import FrontEnd from "../components/Skills/FrontEnd";
import BackEnd from "../components/Skills/BackEnd";
import Others from "../components/Skills/Other";

const Skills = () => {
    return(
        <div id="skills" className="scroll-mt-12">
            <div className="p-10 bg-slate-100 flex flex-col justify-center items-center">                
                <div className=" text-3xl font-redhat font-bold text-center pt-10 pb-6">Skills</div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-col lg:grid lg:grid-cols-2 xl:flex xl:flex-row justify-center items-center gap-5">
                        <FrontEnd/>
                        <BackEnd/>
                        <Others/>
                    </div>
                    <div className=" text-xl font-redhat font-bold text-center pt-5">Happy to work with any tech not listed above!</div>
                </div>
            </div>
        </div>
    )
}

export default Skills;