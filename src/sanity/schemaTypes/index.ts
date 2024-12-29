import { type SchemaTypeDefinition } from 'sanity'
import author from './author'

import post from './post'
import blockContent from './blockcontent'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, blockContent],
}