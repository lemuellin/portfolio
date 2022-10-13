const Project = (props) => {
    return(
        <div className="w-[30rem] h-[33rem] p-7 rounded-3xl bg-slate-100 text-black font-redhat flex flex-col gap-2">
            <img src={props.preview} alt="placeholder"/>
            <div className=" text-2xl font-semibold pt-3">{props.title}</div>
            <div className=" text-lg pb-1">{props.description}</div>
            <div className=" border border-black px-2 py-1 rounded-md font-semibold">{props.tech}</div>
            <div className="flex justify-around pt-2">
                <button className=" w-52 bg-indigo-200 hover:bg-indigo-300 hover:font-bold px-2 py-1 rounded-md font-semibold cursor-pointer">GitHub</button>
                <button className=" w-52 bg-rose-200 hover:bg-rose-300 hover:font-bold px-2 py-1 rounded-md font-semibold cursor-pointer">Live</button>
            </div>
            
        </div>
    )
}

export default Project;