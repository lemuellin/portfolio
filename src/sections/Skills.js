import FrontEnd from "../components/Skills/FrontEnd";
import Others from "../components/Skills/Other";
import MechE from "../components/Skills/MechE";

const Skills = () => {
    return(
        <div id="skills" className="p-10 bg-slate-100 flex flex-col justify-center items-center">
            <div className=" text-3xl font-redhat font-bold text-center pt-6 pb-6">"Why Lemuel?"</div>
            <div className="flex flex-col lg:flex-row gap-5 font-redhat">
                
                <div className="flex flex-col justify-center  text-center w-[25rem] border border-black-4 rounded-3xl p-5 bg-slate-200">
                    <div className="text-2xl font-semibold">1 YOE</div>
                    <div className="text-xl font-medium">in</div>
                    <div className="text-2xl font-semibold">Software Development</div>
                </div>
                <div className="flex flex-col justify-center  text-center w-[25rem] border border-black-4 rounded-3xl p-5 bg-slate-200">
                    <div className="text-2xl font-semibold">4 YOE</div>
                    <div className="text-xl font-medium">in</div>
                    <div className="text-2xl font-semibold">Mechanical Engineering</div>                
                </div>
            </div>
            
            <div className=" text-3xl font-redhat font-bold text-center pt-16 pb-6">Skills</div>
            <div>
                <div className="flex flex-col lg:grid lg:grid-cols-2 xl:flex xl:flex-row justify-center items-center gap-5">
                    <FrontEnd/>
                    <Others/>
                    <div>
                        <MechE/>
                    </div>
                </div>

                <div className=" text-xl font-redhat font-bold text-center pt-6 pb-6">**Happy to work with any tech not listed above**</div>
            </div>
        </div>
    )
}

export default Skills;