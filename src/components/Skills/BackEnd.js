import Mongoose from '../../assets/mongooseIcon.png';

const BackEnd = () => {
    return(
        <div className="w-[90vw] pr-2 rounded-2xl pt-8 pb-10 skills:w-96 skills:p-7 skills:border-black-4 skills:rounded-3xl bg-black text-white grid grid-cols-3 gap-4 justify-items-center">
            <div className=" col-span-3 text-2xl font-redhat font-bold">Back End</div>

            <div className="flex flex-col justify-items-center">
                <i className="devicon-nodejs-plain colored text-6xl text-center"></i>
                <div className="text-center font-redhat font-bold text-md skills:text-xl">NodeJS</div>
            </div>
            <div className="flex flex-col justify-items-center">
                <i className="devicon-mongodb-plain colored text-6xl text-center"></i>
                <div className="text-center font-redhat font-bold text-md skills:text-xl">MongoDB</div>
            </div>
            <div className="flex flex-col justify-items-center">
                <i className="devicon-firebase-plain colored text-6xl text-center"></i>
                <div className="text-center font-redhat font-bold text-md skills:text-xl">Firebase</div>
            </div>
            <div className="flex flex-col justify-items-center">
                <i className="devicon-express-original text-6xl text-center"></i>
                <div className="text-center font-redhat font-bold text-md skills:text-xl">Express*</div>
            </div>
            <div className="flex flex-col justify-items-center items-center">
                <img src={Mongoose} className="w-[60px] text-center"></img>
                <div className="text-end font-redhat font-bold text-md skills:text-xl">Mongoose*</div>
            </div>
        </div>
    )
}

export default BackEnd;