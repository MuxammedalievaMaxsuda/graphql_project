import request, { gql } from "graphql-request";
import { fetchedErrorPost, fetchedPosts, fetchingPosts } from "../reducers/posts.slice";
import { fetchedAuthors } from "../reducers/author.slice";

export async function getAuthors(dispatch){
    const query=gql`
    {
      authors{
        id
        fullName
        bio
        avatar{
            url
        }
    }
}
`
dispatch(fetchingPosts())
await request("https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clt60p4jw04hd07ut2b9evtgg/master",query)
 .then(res=>{
    dispatch(fetchedAuthors(res.authors))
 })
 .catch(err=>{
    dispatch(fetchedErrorPost())
    console.log(err)
 })
}


export async function getPosts(dispatch){
    const query=gql`
    {
      posts{
        id
        title
        slug
        excerpt
        createdAt
        coverImage{
            url
        }
        content{
            html
        }
        author{
            id
            fullName
            avatar{
                url
            }
            bio
        }
      }
}
`
dispatch(fetchingPosts())
await request("https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clt60p4jw04hd07ut2b9evtgg/master",query)
 .then(res=>{
    dispatch(fetchedPosts(res.posts))
 })
 .catch(err=>{
    dispatch(fetchedErrorPost())
    console.log(err)
 })
}
