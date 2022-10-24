import Project from "../components/Project";
import minimalGarden from "../assets/screenshots/minimalGardenCompressed.gif";
import portfolio from '../assets/screenshots/portfolioCompressed.png';
import monogram from '../assets/screenshots/monogramCompressed.gif';
import wheresWalter from '../assets/screenshots/wheresWalterCompressed.gif';
import weatherNow from '../assets/screenshots/weatherNowCompressed.jpg';
import battleship from '../assets/screenshots/battleshipCompressed.gif';

const Projects = () => {
    return(
        <div id="projects" className="flex flex-col justify-center items-center scroll-mt-12">
            <div className=" text-3xl font-redhat font-bold text-center pt-20 pb-6">Projects</div>
            <div className="flex flex-col lg:grid lg:grid-cols-2 2xl:grid 2xl:grid-cols-3 justify-center items-center pb-20 gap-5">
                <Project 
                    preview={monogram} 
                    title={"Monogram"} 
                    description={"An Instagram clone incorporated weather widget to monitor weather/light condition."} 
                    tech={"React, Firebase, Bootstrap, REST API, Async JS"}
                    liveLink={"https://lemuellin.github.io/monogram/"}
                    githubLink={"https://github.com/lemuellin/monogram"}
                />
                <Project 
                    preview={minimalGarden} 
                    title={"Minimal Garden"} 
                    description={"A React E-Commerce site with a fully functional shopping cart."} 
                    tech={"React, React Testing Library, Jest"}
                    liveLink={"https://lemuellin.github.io/shopping-cart/"}
                    githubLink={"https://github.com/lemuellin/shopping-cart"}
                />
                <Project 
                    preview={wheresWalter} 
                    title={"Where's Walter?"} 
                    description={"A React Photo-Tagging game, utilizing Firebase to verify game status."} 
                    tech={"React, React Router, Firebase"}
                    liveLink={"https://lemuellin.github.io/photo-tagging-app/"}
                    githubLink={"https://github.com/lemuellin/photo-tagging-app"}
                />
                <Project 
                    preview={battleship} 
                    title={"Battleship"} 
                    description={"Classic board game designed via Test Driven Development (TDD)."} 
                    tech={"TDD, OOP, Webpack, Jest"}
                    liveLink={"https://lemuellin.github.io/odin-battleship/"}
                    githubLink={"https://github.com/lemuellin/odin-battleship"}
                />
                <Project 
                    preview={weatherNow} 
                    title={"Weather Now"} 
                    description={"A weather app utilizing Open Weather API with async/await JS."} 
                    tech={"REST API, Async JS"}
                    liveLink={"https://lemuellin.github.io/odin-weather-app/"}
                    githubLink={"https://github.com/lemuellin/odin-weather-app"}
                />
                <Project 
                    preview={portfolio} 
                    title={"Portfolio Site"} 
                    description={"Yay! You are already here, this site showcased what I have achieved so far in my journey."} 
                    tech={"React, Tailwind"}
                    liveLink={"https://lemuellin.github.io/portfolio/"}
                    githubLink={"https://github.com/lemuellin/portfolio"}
                />
            </div>
        </div>
    )
}

export default Projects;