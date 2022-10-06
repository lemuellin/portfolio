import Project from "../components/Project";
import img0 from "../assets/placeholder.png";

const Projects = () => {
    return(
        <div id="projects" className="flex flex-col justify-center items-center">
            <div className=" text-3xl font-redhat font-bold text-center pt-16 pb-6">Projects</div>
            <div className="flex flex-col lg:grid lg:grid-cols-2 2xl:grid 2xl:grid-cols-3 justify-center items-center pb-20 gap-5">
                <Project preview={img0} title={"Monogram"} description={"An Instagram clone"} tech={"JS, HTML...etc"}/>
                <Project preview={img0} title={"Portfolio"} description={"An Instagram clone"} tech={"JS, HTML...etc"}/>
                <Project preview={img0} title={"Battleship"} description={"An Instagram clone"} tech={"JS, HTML...etc"}/>
                <Project preview={img0} title={"Succulent Shop"} description={"An E-commerce succulent website with all the shopping cart functionalities."} tech={"JS, HTML...etc"}/>
                <Project preview={img0} title={"Where's Waldo?"} description={"An Instagram clone"} tech={"JS, HTML...etc"}/>
                <Project preview={img0} title={"Weather App"} description={"An Instagram clone"} tech={"JS, HTML...etc"}/>
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