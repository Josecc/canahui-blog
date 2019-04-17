import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Panel from './panel';

const Posts = () => (
  <StaticQuery
    query={graphql`
      query {
        allMediumPost(sort: {fields: [createdAt], order: DESC}) {
          totalCount
          nodes {
            id
            title
            slug
            medium_id
            virtuals {
              subtitle
              previewImage {
                imageId
              }
              readingTime
              totalClapCount
            }
            author {
              name
              username
            }
          }
        }
      }
    `}
    render={data => <Panel total={data.allMediumPost.totalCount} posts={data.allMediumPost.nodes} />}
  />
)
export default Posts
