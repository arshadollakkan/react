
import '../styles/navbar.css'



const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
                <img src='images/logonav.svg' alt="" />
            </div>
            <div className="links">
            <ul>
                <li><a href="">TV</a></li>  
                <li><a href="">Movies</a></li>
                <li><a href="">Sports</a></li>
                <li><a href="">Disnery</a></li>
            </ul>
                
            </div>
        </div>
     );
}
 
export default Navbar;