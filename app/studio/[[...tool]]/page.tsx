import { Studio } from './Studio'

export const dynamic = 'force-static'

export { metadata, viewport } from 'next-sanity/studio'

// output: "export" ayarından dolayı Next.js'in statik derleme yapabilmesi için gerekli:
export function generateStaticParams() {
  return [
    { tool: [] },            // /studio
    { tool: ['structure'] }, // /studio/structure
    { tool: ['vision'] },    // /studio/vision
  ]
}

export default function StudioPage() {
  return <Studio />
}
