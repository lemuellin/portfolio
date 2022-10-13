import Project from "../components/Project";
import img0 from "../assets/placeholder.png";

const Projects = () => {
    return(
        <div id="projects" className="flex flex-col justify-center items-center scroll-mt-12">
            <div className=" text-3xl font-redhat font-bold text-center pt-20 pb-6">Projects</div>
            <div className="flex flex-col lg:grid lg:grid-cols-2 2xl:grid 2xl:grid-cols-3 justify-center items-center pb-20 gap-5">
                <Project preview={img0} title={"Monogram"} description={"An Instagram clone for monochrome photography. User can share photos, and like/comment posts."} tech={"React, Firebase, Bootstrap"}/>
                <Project preview={img0} title={"Minimal Garden"} description={"An E-commerce website with all the shopping cart functionalities."} tech={"React, Jest"}/>
                <Project preview={img0} title={"Portfolio Site"} description={"Yay! You are already here, this site showcased what I have achieved so far in my journey."} tech={"React, Tailwind"}/>
                <Project preview={img0} title={"Where's Waldo?"} description={"A Photo-Tagging game with timer and leaderboard feature, using Firebase to keep scores."} tech={"React, Firebase"}/>
                <Project preview={img0} title={"Battleship"} description={"A classic board game designed via Test Driven Development(TDD)."} tech={"JS, Test Driven Development, Webpack, Jest"}/>
                <Project preview={img0} title={"Weather App"} description={"A weather app utilizing Open Weather API with async and promises."} tech={"JS, Open Weather API, Webpack"}/>
            </div>
        </div>
    )
}

export default Projects;

// instagram clone
// portfolio
// Succulent shop
// battleship
// photo tagging app
// API implement

// stockline?
// weather app