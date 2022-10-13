import Email from '../assets/email.png';
import Resume from '../assets/resume.png';
import resumePDF from '../assets/Lemuel_Lin_Resume.pdf';

const Links = () => {
    return(
        <div className="flex gap-5 justify-center items-center">
            <i onClick={()=>window.open("https://www.linkedin.com/in/lemuel-lin/")} className="devicon-linkedin-plain text-5xl text-center cursor-pointer hover:scale-125"></i>
            <i onClick={()=>window.open("https://github.com/lemuellin")} className="devicon-github-original colored text-5xl text-center cursor-pointer hover:scale-125"></i>
            <img onClick={() => window.open("mailto:lemuellin@gmail.com")} className="w-12 cursor-pointer hover:scale-125" src={Email} alt={"email icon"}/>
            <img onClick={() => window.open(resumePDF)} className="w-12 cursor-pointer hover:scale-125" src={Resume} alt={"resume icon"}/>
        </div>
    )
}

export default Links;