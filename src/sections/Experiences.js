import ExperienceItem from "../components/ExperienceItem";
import ExperienceEdu from "../components/ExperienceEdu";
import TCTlogo from '../assets/TCT_logo.png';
import CGUlogo from '../assets/CGU_logo.png';
import Fordlogo from '../assets/Ford_logo.png';
import NTHUlogo from '../assets/NTHU_logo.png';


const Experiences = () => {
    return(
        <div id="experiences" className=" bg-slate-100">
            <div className="flex flex-col">
                <div className=" text-3xl font-redhat font-bold text-center pt-20 pb-6">My Evolution in a Timeline</div>
                <div className="flex flex-col gap-5">
                    <ExperienceItem 
                        logo={TCTlogo}
                        title={"Application Engineer"}
                        time={"2018 - Now"}
                        company={"TCT Circuit Supply"}
                        description={[
                            "• Developed tests to provide optimized PCB drill process, and integrated to customer sites",
                            "• Collaborated with an engineering team internationally, tested an IoT smart warehouse system",
                            "• Led a material cost-saving project, which saved costs by 65% with improved drill quality",
                        ]}
                    />

                    <ExperienceItem
                        logo={CGUlogo}
                        title={"Biomedical Research Assistant"}
                        time={"2016 - 2017"}
                        company={"Chang Gung University"}
                        description={[
                            "• Develop, integrate, debug in C and Python.",
                            "• Streamlined various MATLAB programs to process 3D medical image.",
                            "• Customized Convolutional Neural Network to classify retinal decease image in TensorFlow.",
                            "• Researched in medical image processing and deep learning fields",
                        ]}
                    />

                    <ExperienceItem
                        logo={Fordlogo}
                        title={"Technical Marketing Intern"}
                        time={"2015/7 - 2015/8"}
                        company={"Ford Motor Company"}
                        description={[
                            "• Led an engineering project to improve the backseat ergonomic design",
                            "• Conducted market research to enhance Ford's brand image"
                        ]}
                    />

                    <ExperienceEdu
                        logo={NTHUlogo}
                        title1={"Master of Science in Mechanical Engineering"}
                        time1={"Sept. 2017"}
                        title2={"Bachelor of Science in Mechanical Engineering"}
                        time2={"June 2015"}
                        company={"National Tsing Hua University"}
                        description={[
                            "• Focused on mechanical design, built math models to simulate mechanics of materials.",
                            "• NTHU was ranked 33rd in Eng. Tech from 18' QS Ranking (CMU ranked 31, UCLA 35)"
                        ]}

                    />
                </div>
            </div>
        </div>
    )
}

export default Experiences;