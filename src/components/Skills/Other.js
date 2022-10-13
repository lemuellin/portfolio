const Others = () => {
    return(
        <div className=" w-[90vw] pl-1 rounded-2xl pt-8 pb-10 skills:w-96 skills:p-7 skills:border-black-4 skills:rounded-3xl bg-black text-white grid grid-cols-3 gap-4 justify-items-center">
            <div className=" col-span-3 text-2xl font-redhat font-bold">Others</div>

            <div className="flex flex-col justify-items-center">
                <i className="devicon-firebase-plain colored text-6xl text-center"></i>
                <div className="text-center font-redhat font-bold text-md skills:text-xl">Firebase</div>
            </div>
            <div className="flex flex-col justify-items-center">
                <i className="devicon-git-plain colored text-6xl text-center"></i>
                <div className="text-center font-redhat font-bold text-md skills:text-xl">Git</div>
            </div>
            <div className="flex flex-col justify-items-center">
                <i className="devicon-github-original text-6xl text-center"></i>
                <div className="text-center font-redhat font-bold text-md skills:text-xl">GitHub</div>
            </div>
            <div className="flex flex-col justify-items-center">
                <i className="devicon-webpack-plain colored text-6xl text-center"></i>
                <div className="text-center font-redhat font-bold text-md skills:text-xl">Webpack</div>
            </div>
            <div className="flex flex-col justify-items-center">
                <i className="devicon-jest-plain colored text-6xl text-center"></i>
                <div className="text-center font-redhat font-bold text-md skills:text-xl">Jest</div>
            </div>
            {/* <div className="flex flex-col justify-items-center">
                <i className="devicon-c-plain colored text-7xl text-center"></i>
                <div className="text-center font-redhat font-bold text-2xl">C</div>
            </div> */}
            <div className="flex flex-col justify-items-center">
                <i className="devicon-npm-original-wordmark colored text-6xl text-center"></i>
                <div className="text-center font-redhat font-bold text-md skills:text-xl">NPM</div>
            </div>
        </div>
    )
}

export default Others;