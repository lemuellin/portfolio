const Others = () => {
    return(
        <div className=" w-96 p-7 border-black-4 rounded-3xl bg-black text-white grid grid-cols-3 gap-4 justify-items-center">
            <div className=" col-span-3 text-2xl font-redhat font-bold">Others</div>

            <div className="flex flex-col justify-items-center">
                <i className="devicon-firebase-plain colored text-6xl text-center"></i>
                <div className="text-center font-redhat font-bold text-xl">Firebase</div>
            </div>
            <div className="flex flex-col justify-items-center">
                <i className="devicon-git-plain colored text-6xl text-center"></i>
                <div className="text-center font-redhat font-bold text-xl">Git</div>
            </div>
            <div className="flex flex-col justify-items-center">
                <i className="devicon-github-original text-6xl text-center"></i>
                <div className="text-center font-redhat font-bold text-xl">GitHub</div>
            </div>
            <div className="flex flex-col justify-items-center">
                <i className="devicon-webpack-plain colored text-6xl text-center"></i>
                <div className="text-center font-redhat font-bold text-xl">Webpack</div>
            </div>
            <div className="flex flex-col justify-items-center">
                <i className="devicon-jest-plain colored text-6xl text-center"></i>
                <div className="text-center font-redhat font-bold text-xl">Jest</div>
            </div>
            {/* <div className="flex flex-col justify-items-center">
                <i className="devicon-c-plain colored text-7xl text-center"></i>
                <div className="text-center font-redhat font-bold text-2xl">C</div>
            </div> */}
            <div className="flex flex-col justify-items-center">
                <i className="devicon-npm-original-wordmark colored text-6xl text-center"></i>
                <div className="text-center font-redhat font-bold text-xl">NPM</div>
            </div>
        </div>
    )
}

export default Others;