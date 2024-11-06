import { defineQuery } from 'next-sanity';
import { sanityFetch } from '@/sanity/lib/live';

export const getAllServices = async () => {
  const ALL_SERVICES_QUERY = defineQuery(
    `*[_type == "service"] | order(title asc) `
  );
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
