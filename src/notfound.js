import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>sorry</h2>
            <p>page is not found</p>
            <Link to='/'>back to Home page</Link>
        </div>
     );
}
 
export default NotFound;