const NavBar = () => {
    return (
        <div className="flex flex-row justify-between text-sm lg:text-lg">
            <a className="" href="https://www.neundex.com/">kleinworld</a>
            <nav className="flex flex-row">
                <ul className="flex flex-row">
                    <li><a href="" className="transform transition duration-100 hover:skew-12" >about</a>,</li>
                    <li><a href="" className="transform transition duration-100 hover:skew-12" >experience</a>,</li>
                    <li><a href="" className="transform transition duration-100 hover:skew-12" >school</a>,</li>
                    <li><a href="" className="transform transition duration-100 hover:skew-12" >contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;