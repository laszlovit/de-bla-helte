import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/lib/live';

const ALL_SERVICES_QUERY = defineQuery(/* groq */ `*[
  _type == "service"
  && defined(slug.current)
]| order(title asc){
  title,
  "slug": slug.current,
  publishedAt,
  excerpt,
  mainImage,
}`);

export const getAllServices = async () => {
  try {
    const services = await sanityFetch({
      query: ALL_SERVICES_QUERY,
    });
    return services.data || [];
  } catch (error) {
    console.error('Error fetching all services', error);
    return [];
  }
};
