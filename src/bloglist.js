const BlogList = ({blogs,title,deleteBlog}) => {
    //const blogs=prop.blogs
    //const title=prop.title
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Writtin By {blog.author}</p>
                <button onClick={()=> deleteBlog(blog.id)}>delete</button>
            </div>  
         ))} 
        </div>

     );
}
 
export default BlogList;