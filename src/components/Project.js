const Project = (props) => {
    return(
        <div className=" pb-8 projects:w-[30rem] projects:h-[33rem] projects:p-7 projects:rounded-3xl bg-slate-100 text-black font-redhat flex flex-col gap-2">
            <img src={props.preview} alt="placeholder"/>
            <div className=" pl-5  pr-5 projects:pl-0 projects:pr-0 text-2xl font-semibold pt-3">{props.title}</div>
            <div className=" pl-5 pr-5 projects:pl-0 projects:pr-0 text-lg pb-1">{props.description}</div>
            <div className="pl-5 pr-5 projects:pl-0 projects:pr-0">
                <div className="border border-black px-2 py-1 rounded-md font-semibold">{props.tech}</div>
            </div>
            <div className="flex justify-around pt-2">
                <button className=" w-36 projects:w-52 bg-indigo-200 hover:bg-indigo-300 hover:font-bold px-2 py-1 rounded-md font-semibold cursor-pointer">GitHub</button>
                <button className=" w-36 projects:w-52 bg-rose-200 hover:bg-rose-300 hover:font-bold px-2 py-1 rounded-md font-semibold cursor-pointer">Live</button>
            </div>
        </div>
    )
}

export default Project;