const NavBar = () => {
    return (
        <div className="flex flex-row justify-between pt-4">
            <a className="" href="https://www.neundex.com/">kleinworld</a>
            <nav className="flex flex-row">
                <ul className="flex flex-row">
                    <li ><a href="" className="transform transition duration-100 hover:italic" >about</a>,</li>
                    <li ><a href="" className="transform transition duration-100 hover:italic" >experience</a>,</li>
                    <li ><a href="" className="transform transition duration-100 hover:italic" >school</a>,</li>
                    <li ><a href="" className="transform transition duration-100 hover:italic" >contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;