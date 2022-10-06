import uniqid from "uniqid";

const ExperienceItem = (props) => {
    return(
        <div className="flex flex-col lg:flex-row justify-center gap-1 lg:gap-5 pt-5 items-center font-redhat font-semibold">
            <div className=" w-[15rem] flex flex-col justify-center text-center gap-3">
                <img src={props.logo} alt={"company logo"} className="w-40 h-fit self-center"/>
                <div>
                    <div className=" text-lg">{props.company}</div>
                    <div className=" text-lg">{props.time}</div>
                </div>
            </div>
            <div className=" md:w-[52rem] border border-black-4 rounded-2xl p-7">
                <div className="font-bold text-xl pb-3">{props.title}</div>
                {props.description.map(bullet => {
                    return(
                        <div key={uniqid()} className=" text-lg">{bullet}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default ExperienceItem;