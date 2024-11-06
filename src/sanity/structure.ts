import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.documentTypeListItem('caseStudy').title('Case Studies'),
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('category').title('Categories'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !['post', 'category', 'service', 'caseStudy'].includes(item.getId()!)
      ),
    ]);
