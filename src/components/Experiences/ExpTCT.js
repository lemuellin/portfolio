import TCTlogo from '../../assets/TCT_logo.png';

const ExpTCT = () => {
    return(
        <div className="flex flex-col lg:flex-row justify-center gap-1 lg:gap-5 pt-5 items-center font-redhat">
            <div className=" w-[15rem] flex flex-col justify-center text-center gap-3">
                <img src={TCTlogo} alt={"company logo"} className="w-40 h-fit self-center "/>
                <div>
                    <div className=" text-lg  font-semibold">TCT Circuit Supply</div>
                    <div className=" text-lg  font-semibold">2018 - Now</div>
                </div>
            </div>
            <div className=" md:w-[48rem] border border-black-4 rounded-2xl p-7">
                <div className="font-semibold text-2xl pb-3">Application Engineer</div>
                <div className=" text-lg">
                    <div>• Developed <span className='bg-yellow-300 px-2  font-semibold'>React</span> software to perform <span className='bg-yellow-300 px-2  font-semibold'>statistical analysis</span> and generate <span className='bg-yellow-300 px-2  font-semibold'>CAD</span></div>
                    <div>• Provided <span className='bg-yellow-300 px-2  font-semibold'>technical support</span>, optimizing manufacturing process for customers</div>
                </div>
            </div>
        </div>
    )
}

export default ExpTCT;