import Xslogo from '../../assets/Xs_logo.png';

const ExpXs = () => {
    return(
        <div className="flex flex-col lg:flex-row justify-center gap-1 lg:gap-5 pt-5 items-center font-redhat">
            <div className=" w-[15rem] flex flex-col justify-center text-center gap-3">
                <img src={Xslogo} alt={"company logo"} className=" w-36 h-fit self-center "/>
                <div>
                    <div className=" text-lg  font-semibold">Xsellarate Merchant Services</div>
                    <div className=" text-lg  font-semibold">2023 - Now</div>
                </div>
            </div>
            <div className=" md:w-[48rem] border border-black-4 rounded-2xl p-7">
                <div className="font-semibold text-2xl pb-3">Web Service Engineer</div>
                <div className=" text-lg">
                    <div>• Created <span className='bg-yellow-300 px-2  font-semibold'>websites</span> for local businesses with <span className='bg-yellow-300 px-2  font-semibold'>WIX</span> and <span className='bg-yellow-300 px-2  font-semibold'>JavaScript</span></div>
                    <div>• Conducted marketing research to optimize <span className='bg-yellow-300 px-2  font-semibold'>SEO</span> strategies</div>
                </div>
            </div>
        </div>
    )
}

export default ExpXs;