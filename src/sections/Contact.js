import Links from "../components/Links";

const Contact = () => {
    return(
        <div id="contact">
            <div className=" bg-slate-100 pb-20 flex flex-col justify-center items-center">
                <div className=" text-3xl font-redhat font-bold text-center pt-20 pb-6">Contact Me</div>
                <div className=" w-96 md:w-[45rem] text-2xl flex flex-col text-center pb-6 gap-3">
                    <div>I would love to hear from you!</div>
                    <div>Whether it is a project collaboration, a job opportunity, or just a chat.</div>
                    <div>Feel free to reach me at: lemuellin@gmail.com</div>
                </div>
                
                <Links/>
            </div>
            <div className="bg-slate-300 w-auto h-6"></div>
        </div>   
    )
}
export default Contact;