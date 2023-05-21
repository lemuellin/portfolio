import ScrollDown from '../assets/ScrollDown.gif';
import Links from '../components/Links';

const Welcome = () => {
    return(
        <div id="welcome" className="scroll-mt-12">
            <div className=" pl-8 pr-8 skills:pl-auto skills:pr-auto h-screen flex flex-col justify-center items-center gap-5 pt-28">
                <div className=" text-4xl sm:text-6xl font-redhat font-semibold text-center">
                    Hi, I'm Jake. 
                </div>
                <div className=" text-3xl sm:text-5xl font-redhat font-semibold text-center">
                    A Full-Stack Developer based in Los Angeles.
                    {/* // a mechanical engineer with a passion in web development */}
                </div>
                <Links/>
                <img onClick={(e) => {e.preventDefault(); document.getElementById("skills").scrollIntoView({behavior: 'smooth'})}} className="w-16 cursor-pointer" src={ScrollDown} alt={"scroll down gif"}/>
            </div>
            
        </div>
    )
}

export default Welcome;