import Fordlogo from '../../assets/Ford_logo.png';

const ExpFord = () => {
    return(
        <div className="flex flex-col lg:flex-row justify-center gap-1 lg:gap-5 pt-5 items-center font-redhat font-semibold">
            <div className=" w-[15rem] flex flex-col justify-center text-center gap-3">
                <img src={Fordlogo} alt={"company logo"} className="w-40 h-fit self-center"/>
                <div>
                    <div className=" text-lg">Ford Motor Company</div>
                    <div className=" text-lg">2015/7 - 2015/8</div>
                </div>
            </div>
            <div className=" md:w-[48rem] border border-black-4 rounded-2xl p-7">
                <div className="font-bold text-xl pb-3">Technical Marketing Intern</div>
                <div className=" text-lg">
                    <div>• Conducted <span className='bg-yellow-300 px-2'>market research</span> to enhance Ford's brand image</div>
                    <div>• Refined the seat design of Escape model</div>
                </div>
            </div>
        </div>
    )
}

export default ExpFord;