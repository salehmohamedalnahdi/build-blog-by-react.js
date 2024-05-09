import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title,settitle]=useState('')
    const [body,setbody]=useState('')
    const [author,setauthor]=useState('saleh')
    const history=useHistory()

    const handlesubmit=(e)=>{
        e.preventDefault()
        const blog={title,body,author}
        fetch('http://localhost:8000/blogs',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(blog),
        })
        .then(()=>{
            history.go(-1)
            history.push('/')})
}
    return ( 
        <div className="create">
            <h2>add new blog</h2>
            <form action="" onSubmit={handlesubmit}>
                <label >Title</label>
                <input type="text" value={title} required onChange={(e)=>settitle(e.target.value)}/>
                <label >Body</label>
                <textarea value={body} required onChange={(e)=>setbody(e.target.value)}/>
                <label >Author:</label>
                <select value={author} required onChange={(e)=>setauthor(e.target.value)}>
                    <option value='saleh'>saleh</option>
                    <option value='mohammed'>mohammed</option>
                </select>
                <button>Add Blog</button>
               
            </form>
        </div>
     );
}
 
export default Create;