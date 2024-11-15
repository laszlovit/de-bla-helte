import { sanityFetch } from '@/sanity/lib/live'
import { defineQuery } from 'next-sanity'

export const getAllCaseStudies = async () => {
  const ALL_CASE_STUDIES_QUERY = defineQuery(
    `*[_type == "caseStudy"] | order(title asc) `,
  )
  try {
    const caseStudies = await sanityFetch({
      query: ALL_CASE_STUDIES_QUERY,
    })
    return caseStudies.data || []
  } catch (error) {
    console.error('Error fetching all case studies', error)
    return []
  }
}
