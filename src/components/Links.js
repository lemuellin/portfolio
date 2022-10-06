import Email from '../assets/email.png';
import Resume from '../assets/resume.png';

const Links = () => {
    return(
        <div className="flex gap-5 justify-center items-center">
            <i className="devicon-linkedin-plain text-5xl text-center cursor-pointer hover:scale-125"></i>
            <i className="devicon-github-original colored text-5xl text-center cursor-pointer hover:scale-125"></i>
            <img className="w-12 cursor-pointer hover:scale-125" src={Email} alt={"email icon"}/>
            <img className="w-12 cursor-pointer hover:scale-125" src={Resume} alt={"resume icon"}/>
        </div>
    )
}

export default Links;