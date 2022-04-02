import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className= {"menu " +(menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(true)}>
                    <a href="#intro">Home</a>
                </li>

                <li onClick={()=>setMenuOpen(true)}>
                    <a href="#portfolio">Portfolio</a>
                </li>

                <li onClick={()=>setMenuOpen(true)}>
                    <a href="#works">Works</a>
                </li>

                <li onClick={()=>setMenuOpen(true)}>
                    <a href="#skills">Skills</a>
                </li>

                <li onClick={()=>setMenuOpen(true)}>
                    <a href="#testimonials">Experience</a>
                </li>

                <li onClick={()=>setMenuOpen(true)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
           
            
        </div>
    )
}

