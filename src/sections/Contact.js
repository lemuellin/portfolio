import { useState } from 'react';
import Links from "../components/Links";

const Contact = () => {
    const [tooltip, setTooltip] = useState(false);

    const copyToClipBoard = async () => {
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
        <div id="contact" className="scroll-mt-12">
            <div className=" bg-slate-100 pb-20 flex flex-col justify-center items-center">
                <div className=" text-3xl font-redhat font-bold text-center pt-20 pb-6">Contact Me</div>
                <div className=" pl-4 pr-4 skills:pl-20 skills:pr-20 text-xl skills:text-2xl flex flex-col text-center pb-6 gap-3">
                    <div>I would love to hear from you!</div>
                    <div>Whether it is a project collaboration, a job opportunity, or just a chat.</div>
                    <div className=" relative">Feel free to reach me at: 
                        <span onClick={() => copyToClipBoard()} className=" underline cursor-pointer font-semibold hover:bg-yellow-300 px-3">lemuellin@gmail.com</span> 
                        {tooltip ? 
                            <span className=" absolute bg-gray-300 rounded-lg font-bold p-1 text-base ml-2">Copied!</span>
                            : ''
                        }
                    </div>
                </div>
                
                <Links/>
            </div>
            <div className="bg-slate-300 w-auto h-6"></div>
        </div>   
    )
}
export default Contact;