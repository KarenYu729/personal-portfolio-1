import './App.css';
import NavBar from "./components/navBar.component";
import Banner from "./components/Banner.component";
import Projects from "./components/project.component";
import 'animate.css';
import ScrollToTop from "./components/scrollToTop.component";

function App() {


    return (
        <div className="App">

            <NavBar/>
            <div id={'home'}>
                <Banner/>
            </div>
            <ScrollToTop />
            <div id={'projects'}>
                <Projects/>
            </div>
            <div id={'skills'}>
                <div className="skills">
                    <h1 className={'animate__bounceInUp'}> Skills</h1>
                    <ol className="list">
                        <li className={"item animate__bounceInLeft"}>
                            <h2> Front-End</h2>
                            <span>
                            React, HTML, CSS, JavaScript, BootStrap
                        </span>
                        </li>

                        <li className={"item animate__bounceInRight"}>
                            <h2>Data Science</h2>
                            <span>Data visualization, Machine Learning</span>
                        </li>

                        <li className={"item"}>
                            <h2>Languages</h2>
                            <span>JavaScript, Python, C, C++, TypeScript, Go, MATLAB, R</span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default App;
