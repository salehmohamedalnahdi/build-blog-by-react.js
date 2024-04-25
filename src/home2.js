import { useState,useEffect } from "react";
import BlogList from "./bloglist";

const Home1 = () =>{
    const [blogs,setBlogs]=useState([{title:"title1",body:"body1",author:"mario",id:1},
    {title:"title2",body:"body2",author:"author2",id:2},
    {title:"title3",body:"body3",author:"mario",id:3}])

    const deleteBlog =(Id)=> {
        const newblogs=blogs.filter(b=>b.id !== Id)
        setBlogs(newblogs)
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <BlogList blogs={blogs} title="all blogs"  />
            <BlogList blogs={blogs.sort((b)=>b.author==="mario")} title="mario's blogs" deleteBlog={deleteBlog} />      
        </div>
     );
}
 
export default Home1;

//event
/* const Home = () => {
    const handleClick=()=>{
        console.log('hellow')
      }
      const handleClickAgain=(n)=>{
        console.log('hellow'+n)
      }
      const handleClickAgain2=(n,e)=>{
        console.log('hellow'+n,e)
      }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>click me</button>
            <button onClick={()=>{handleClickAgain('saleh')}}>click me again</button>
            <button onClick={(e)=>{handleClickAgain2('saleh',e)}}>click me again 7 agaain</button>
        </div>
     );
}*/

//uestate (hooks)
/* const Home = () => {
    const [name,setNam]=useState("saleh")
    const [age,setAge]=useState(10)
    const handleClick = ()=>{
        setNam("mohammed")
        setAge(14)
      }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <h2>{name} {age}</h2>
            <button onClick={handleClick}>click me</button>
        </div>
     );
}*/

// outputtin list
/* 
const Home = () => {
    const [blogs,setBlogs]=useState([{title:"title1",body:"body1",author:"author1",id:1},
    {title:"title2",body:"body2",author:"author2",id:2},
    {title:"title3",body:"body3",author:"author3",id:3}])

    return (
        <div className="home">
            <h2>Homepage</h2>
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Writtin By {blog.author}</p>
                </div>  
            ))}        
        </div>
     );
} */

//useEffect
/* const Home1 = () => {
    var [a,newa]=useState(1)
    var handleClick=()=>{
       console.log("handleClick")
       newa(a+=1)
      }
    useEffect(()=>{
        console.log('useeffect run')
    })
    
    return (
        <div className="home">
            <h2>Home2page</h2>
               <p>a:{a}</p> 
               <button onClick={handleClick}>click me</button>
        </div>
     );
}*/

// useEffect depencecies
/* const Home1 = () => {
    var [a,newa]=useState(1)
    const [b,newb]=useState("saleh")

    var handleClick=()=>{
       newa(a+=1)
      }
    useEffect(()=>{
        console.log('useeffect run')
        console.log(b)
    },[b])
    
    return (
        <div className="home">
            <h2>Home2page</h2>
               <p>a:{a}</p> 
               <button onClick={handleClick}>change a </button>
               <p>b:{b}</p>
               <button onClick={()=>newb('Mohammed')}>change b </button>
        </div>
     );
}*/