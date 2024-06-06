import { Link } from "react-router-dom"

 const Header = () => {
    return (
     <header>
        <nav>
     <Link to="/" className="link">Home</Link>
     <Link to="/viewport" className="link">Viewport</Link>
     <Link to="/profiles" className="link">Profiles</Link>
     </nav>
     </header>
    )
 }
 
 export default Header