import CGUlogo from '../../assets/CGU_logo.png';

const ExpCGU = () => {
    return(
        <div className="flex flex-col lg:flex-row justify-center gap-1 lg:gap-5 pt-5 items-center font-redhat font-semibold">
            <div className=" w-[15rem] flex flex-col justify-center text-center gap-3">
                <img src={CGUlogo} alt={"company logo"} className="w-40 h-fit self-center"/>
                <div>
                    <div className=" text-lg">Chang Gung University</div>
                    <div className=" text-lg">2016 - 2017</div>
                </div>
            </div>
            <div className=" md:w-[48rem] border border-black-4 rounded-2xl p-7">
                <div className="font-bold text-xl pb-3">Biomedical Research Assistant</div>
                <div className=" text-lg">
                    <div>• Streamlined various <span className='bg-yellow-300 px-2'>MATLAB</span> programs to process 3D medical image</div>
                    <div>• Customized <span className='bg-yellow-300 px-2'>Convolutional Neural Network</span> to classify medical image with <span className='bg-yellow-300 px-2'>TensorFlow</span></div>
                </div>

            </div>
        </div>
    )
}

export default ExpCGU;