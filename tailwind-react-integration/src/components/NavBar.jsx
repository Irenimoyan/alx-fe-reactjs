import { Link } from "react-router-dom";
function NavBAr() {
    return (
        <div >
            <nav className="flex-2">
                <Link to="">Home</Link>
                <Link to="/Profile">Profile</Link>
                <Link to="/Blog">Blog</Link>
                <Link to="/Product">Product</Link>
            </nav>
        </div>
    )
}

export default NavBAr