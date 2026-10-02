import { type SchemaTypeDefinition } from 'sanity'
import { post } from './post'
import { archive } from './archive'
import { event } from './event'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, archive, event],
}
