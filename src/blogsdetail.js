import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {   
    const {Id}=useParams()
    const {data:blog,ispendenig, error}=useFetch('http://localhost:8000/blogs/'+ Id)
    const history=useHistory()
    const deleteblog=()=>{
        fetch('http://localhost:8000/blogs/'+ blog.id,{
            method:"DELETE"        })
        .then(()=>{history.push('/');console.log("deleting Done")})
    }

    return ( 
        <div className="blog-details">
            {ispendenig && <div>loading...</div>}
            {error && <div>{error}</div>}
            {blog && <article>
                <h2>{blog.title}</h2>
                <p>writtin by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={deleteblog}>Delete</button>
            </article>}            
        </div>
     );
}
 
export default BlogDetail;