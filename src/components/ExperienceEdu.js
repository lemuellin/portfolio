import uniqid from "uniqid";

const ExperienceEdu = (props) => {
    return(
        <div className="flex flex-col lg:flex-row justify-center gap-1 lg:gap-5 pt-5 items-center font-redhat font-semibold pb-24">
            <div className="w-[15rem] flex flex-col justify-center text-center gap-3">
                <img src={props.logo} alt={"company logo"} className="w-40 h-fit self-center"/>
                <div className="text-lg">{props.company}</div>
            </div>
            <div className=" md:w-[52rem] border border-black-4 rounded-2xl p-7">
                <div className="grid grid-cols-4 pb-3">
                    <div className="font-bold text-xl col-span-3">{props.title1}</div>
                    <div className="justify-self-end text-lg">{props.time1}</div>
                    <div className="font-bold text-xl col-span-3">{props.title2}</div>
                    <div className="justify-self-end text-lg">{props.time2}</div>
                </div>
                {props.description.map(bullet => {
                    return(
                        <div key={uniqid()} className=" text-lg">{bullet}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default ExperienceEdu;