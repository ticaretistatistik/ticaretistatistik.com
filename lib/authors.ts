import { readFileSync } from 'fs';
import { join } from 'path';

export interface Author {
  key: string;
  name: string;
  title: string;
  url: string;
  image_url: string;
}

export function getAuthors(): Record<string, Author> {
  const yaml = readFileSync(join(process.cwd(), 'blog', 'authors.yml'), 'utf8');
  const lines = yaml.split('\n');
  const authors: Record<string, Author> = {};
  let currentKey = null;
  let currentAuthor: any = {};

  for (const raw of lines) {
    const line = raw.replace(/\r$/, '');
    if (!line.trim() || line.trim().startsWith('#')) continue;
    
    const top = line.match(/^([A-Za-z0-9_-]+):\s*$/);
    if (top) {
      if (currentKey) {
        authors[currentKey] = currentAuthor as Author;
      }
      currentKey = top[1];
      currentAuthor = { key: currentKey };
      continue;
    }
    
    const field = line.match(/^\s+([A-Za-z_]+):\s*(.*)$/);
    if (field && currentKey) {
      let value = field[2].trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      currentAuthor[field[1]] = value;
    }
  }
  if (currentKey) {
    authors[currentKey] = currentAuthor as Author;
  }
  
  return authors;
}
