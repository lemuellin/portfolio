import ExpXs from "../components/Experiences/ExpXs";
import ExpTCT from "../components/Experiences/ExpTCT";
import ExpCGU from "../components/Experiences/ExpCGU";
import ExpFord from "../components/Experiences/ExpFord";
import Education from "../components/Experiences/Education";

const Experiences = () => {
    return(
        <div id="experiences" className=" bg-slate-100 scroll-mt-12">
            <div className="flex flex-col">
                <div className=" text-3xl font-redhat font-bold text-center pt-20 pb-6">My Evolution in a Timeline</div>
                <div className="flex flex-col gap-5">
                    <ExpXs/>
                    <ExpTCT/>
                    <ExpCGU/>
                    <ExpFord/>
                    <Education/>
                </div>
            </div>
        </div>
    )
}

export default Experiences;