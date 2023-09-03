import './header.css'
function Header() {
    return (
        <header>
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <div className="menu">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </div>
            <input type='search' className='searchInp' />
        </header>
    )
}

export default Header;