import { sanityFetch } from '@/sanity/lib/live';
import { defineQuery } from 'next-sanity';

const SERVICE_QUERY = defineQuery(/* groq */ `*[
  _type == "service"
  && slug.current == $slug
][0]{
  publishedAt,
  title,
  mainImage,
  excerpt,
  body,
}
`);

export const getService = async (slug: string) => {
  try {
    const service = await sanityFetch({
      query: SERVICE_QUERY,
      params: { slug },
    });
    return service.data;
  } catch (error) {
    console.error('Error fetching service', error);
  }
};
