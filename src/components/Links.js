import { useState } from 'react';
import Email from '../assets/email.png';
import Resume from '../assets/resume.png';
import resumePDF from '../assets/Lemuel_Lin_Resume.pdf';
import './Styles/tooltip.css';

const Links = () => {
    const [tooltip, setTooltip] = useState(false);

    const emailClicked = async () => {
        setTooltip(true)
        setTimeout(() => {
            setTooltip(false);
        }, 1000);
        
        try{
            // Copy the text inside the text field
            await navigator.clipboard.writeText('lemuellin@gmail.com');
        } catch(err) {
            console.error('Failed to copy: ', err);
        }
    }

    return(
        <div className="flex gap-5 justify-center items-center">
            <i onClick={()=>window.open("https://www.linkedin.com/in/lemuellin/")} className="devicon-linkedin-plain text-5xl text-center cursor-pointer hover:scale-125"></i>
            <i onClick={()=>window.open("https://github.com/lemuellin")} className="devicon-github-original colored text-5xl text-center cursor-pointer hover:scale-125"></i>
            <div className="tooltip">
                <img onClick={() => emailClicked()} className="w-12 cursor-pointer hover:scale-125" src={Email} alt={"email icon"}/>
                { tooltip ? <span className="tooltiptext">Copied!</span> : ''}
            </div>
            <img onClick={() => window.open(resumePDF)} className="w-12 cursor-pointer hover:scale-125" src={Resume} alt={"resume icon"}/>
        </div>
    )
}

export default Links;