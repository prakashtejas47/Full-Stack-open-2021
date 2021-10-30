const dummy = (blogs) => {
    return(1)
  }
  
const totalLikes = (L) =>{
    return(L.map(blog=>blog['likes']).reduce((a,b)=>a+b,0))
}

const favoriteBlog = (L)=>{
    const likes = L.map(blog=>blog['likes'])
    return(L[likes.indexOf(Math.max(...likes))])
}

const mostBlogs = (L)=>{
    const authors = L.map(blog=>blog["author"])
    const counts = authors.map(author=>authors.filter(val=>val==author).length)
    return(
        {
            author:authors[counts.indexOf(Math.max(...counts))],
            blogs:Math.max(...counts)
        })
}

const mostLikes = (L)=>{
    const authors = L.map(blog=>blog["author"])
    const likes = authors.map(author=>(L.filter(blog=>blog["author"]==author).map(val=>val["likes"])).reduce((a,b)=>a+b,0))
    return(
        {
            author:authors[likes.indexOf(Math.max(...likes))],
            likes:Math.max(...likes)
        })
}
module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}