import CGUlogo from '../../assets/CGU_logo.png';

const ExpCGU = () => {
    return(
        <div className="flex flex-col lg:flex-row justify-center gap-1 lg:gap-5 pt-5 items-center font-redhat">
            <div className=" w-[15rem] flex flex-col justify-center text-center gap-3">
                <img src={CGUlogo} alt={"company logo"} className="w-40 h-fit self-center"/>
                <div>
                    <div className=" text-lg font-semibold">Chang Gung University</div>
                    <div className=" text-lg font-semibold">2016 - 2017</div>
                </div>
            </div>
            <div className=" md:w-[48rem] border border-black-4 rounded-2xl p-7">
                <div className="font-semibold text-2xl pb-3">Biomedical Research Assistant</div>
                <div className=" text-lg">
                    <div>• Streamlined <span className='bg-yellow-300 px-2 font-semibold'>MATLAB</span> programs to process 3D medical image</div>
                    <div>• Customized <span className='bg-yellow-300 px-2 font-semibold'>Convolutional Neural Network</span> to classify image with <span className='bg-yellow-300 px-2 font-semibold'>TensorFlow</span></div>
                </div>

            </div>
        </div>
    )
}

export default ExpCGU;