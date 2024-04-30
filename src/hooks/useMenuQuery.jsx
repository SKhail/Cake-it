import { useStaticQuery, graphql } from "gatsby"; // this is built in gatsby that they provide you with 


export const useMenuQuery = () => {
    const data = useStaticQuery(graphql`
    query HeaderQuery {
        site(siteMetadata: {title: {}}) {
          id
        }
        menu: wpMenu(name: {eq: "mainMenu"}) {
          menuItems {
            nodes {
              label
              url
              parentId
              id
              childItems {
                nodes {
                  label
                  url
                  id
                }
              }
            }
          }
        }
      }
    `)

    return data
}