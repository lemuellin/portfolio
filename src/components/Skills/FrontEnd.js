const FrontEnd = () => {
    return(
        <div className=" w-96 p-7 border-black-4 rounded-3xl bg-black text-white grid grid-cols-3 gap-4 justify-items-center">
            <div className=" col-span-3 text-2xl font-redhat font-bold">Front End</div>

            <div className="flex flex-col justify-items-center">
                <i className="devicon-html5-plain colored text-6xl text-center"></i>
                <div className="text-center font-redhat font-bold text-xl">HTML</div>
            </div>
            <div className="flex flex-col justify-items-center">
                <i className="devicon-css3-plain colored text-6xl text-center"></i>
                <div className="text-center font-redhat font-bold text-xl">CSS</div>
            </div>
            <div className="flex flex-col justify-items-center">
                <i className="devicon-javascript-plain colored text-6xl text-center"></i>
                <div className="text-center font-redhat font-bold text-xl">JavaScript</div>
            </div>
            <div className="flex flex-col justify-items-center">
                <i className="devicon-react-original colored text-6xl text-center"></i>
                <div className="text-center font-redhat font-bold text-xl">React</div>
            </div>
            <div className="flex flex-col justify-items-center">
                <i className="devicon-bootstrap-plain colored text-6xl text-center"></i>
                <div className="text-center font-redhat font-bold text-xl">Bootstrap</div>
            </div>
            <div className="flex flex-col justify-items-center">
                <i className="devicon-tailwindcss-plain colored text-6xl text-center"></i>
                <div className="text-center font-redhat font-bold text-xl">Tailwind</div> 
            </div>
        </div>
    )
}

export default FrontEnd;

// ESLint Babel 