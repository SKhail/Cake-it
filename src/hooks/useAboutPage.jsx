import { useStaticQuery, graphql } from "gatsby";

export const useAboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage(databaseId: {eq: 47}) {
        content
        featuredImage {
          node {
            localFile {
              publicURL
            }
          }
        }
      }
    }
  `);

  return data
};
