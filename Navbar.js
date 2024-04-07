export default function Navbar() {
    return <nav className="nav">
        <a href="/" className = "site-title">QTIMinds</a>
        <ul>
            <li>
                <a href = "/home">Home</a>
            </li>
            <li>
                <a href = "https://www.qtiminds.com/about">About</a>
            </li>
            <li>
                <a href = "https://www.qtiminds.com/services">Services</a>
            </li>
            <li>
                <a href = "https://www.qtiminds.com/careers">Careers</a>
            </li>
            <li>
                <a href = "/courses">Courses</a>
            </li>
            <li>
                <a href = "https://www.qtiminds.com/contact">Contact</a>
            </li>
        </ul>
    </nav>
}