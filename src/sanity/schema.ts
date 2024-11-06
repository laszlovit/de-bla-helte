import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './types/block-content';
import { categoryType } from './types/category';
import { postType } from './types/post';
import { serviceType } from './types/service';
import { caseStudyType } from './types/case-study';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, serviceType, caseStudyType],
};
