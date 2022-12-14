import NTHUlogo from '../../assets/NTHU_logo.png';

const Education = () => {
    return(
        <div className="flex flex-col lg:flex-row justify-center gap-1 lg:gap-5 pt-5 items-center font-redhat pb-24">
            <div className="w-[15rem] flex flex-col justify-center text-center gap-3">
                <img src={NTHUlogo} alt={"company logo"} className="w-40 h-fit self-center"/>
                <div className="text-lg font-semibold">National Tsing Hua University</div>
            </div>
            <div className=" md:w-[48rem] border border-black-4 rounded-2xl p-7">
                <div className="grid grid-cols-4 pb-3">
                    <div className=" hidden edu:block font-semibold text-2xl col-span-3">Master of Science in Mechanical Engineering</div>
                    <div className="edu:hidden font-semibold text-xl col-span-4">M.S. & B.S.</div>
                    <div className="edu:hidden font-semibold text-xl col-span-4">in Mechanical Engineering</div>
                    <div className="hidden edu:block justify-self-end text-lg">Sept. 2017</div>
                    <div className="hidden edu:block font-semibold text-2xl col-span-3">Bachelor of Science in Mechanical Engineering</div>
                    <div className="hidden edu:block justify-self-end text-lg">June 2015</div>
                </div>

                <div className=" text-md skills:text-lg">* NTHU was ranked 33rd in Eng. Tech from 18' QS Ranking (CMU ranked 31, UCLA 35)</div>
            </div>
        </div>
    )
}

export default Education;