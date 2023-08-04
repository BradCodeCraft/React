function NavBar() {
    return (
        <div className="navbar">
            <h1 className="nav-header">NavBar</h1>
            <span className="nav-items">
                <h3 className="about">
                    <a href="#about">About</a>
                </h3>
                <h3 className="experience">
                    <a href="#experience">Experience</a>
                </h3>
                <h3 className="contact">
                <a href="#contact">Contact</a>
                </h3>
            </span>
        </div>
    )
}

function About() {
    return (
        <div className="container">
            <h1>Testing</h1>
        </div>
    )
}

ReactDOM.render(
    <div>
        <NavBar />
        <About />
    </div>,
    document.getElementById("root"));

/* Imperative */ 
const h1 = document.createElement("h1");
h1.textContent = "This is an example of Imperative React";
h1.className = "test-h1";
document.getElementById("root").append(h1);