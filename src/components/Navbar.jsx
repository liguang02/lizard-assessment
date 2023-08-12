import { Link } from "react-router-dom";

// a very basic and simple navigation bar component that can be expanded upon in the future
const Navbar = () => {
    return ( 
        <div>
            <nav className="navbar">
                <h1>Posts History</h1>
                <div className ="links">
                    <Link to="/">Home</Link>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;