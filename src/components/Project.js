const Project = (props) => {
    return(
        <div className="w-[30rem] p-7 rounded-3xl bg-slate-100 text-black font-redhat flex flex-col gap-2">
            <img src={props.preview} alt="placeholder"/>
            <div className=" text-2xl font-semibold pt-3">{props.title}</div>
            <div className=" text-lg">{props.description}</div>
            <div className=" border border-black px-2 py-1 rounded-md font-semibold">{props.tech}</div>
            <div className="flex justify-around">
                <button className=" w-52 bg-rose-200 px-2 py-1 rounded-md font-semibold cursor-pointer">Live</button>
                <button className=" w-52 bg-indigo-200 px-2 py-1 rounded-md font-semibold cursor-pointer">GitHub</button>
            </div>
            
        </div>
    )
}

export default Project;