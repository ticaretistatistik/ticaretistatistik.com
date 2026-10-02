import { type SchemaTypeDefinition } from 'sanity'
import { post } from './post'
import { archive } from './archive'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, archive],
}
