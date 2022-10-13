import avatar from '../assets/avatar.jpeg';

const AboutMe = () => {
    return(
        <div id="about" className="scroll-mt-12">
            <div className=" text-3xl font-redhat font-bold text-center pt-20 pb-6">
                About Me
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 pb-24">
                <img src={avatar} alt={'avatar'} className="w-40 h-fit border border-black-4 p-3 rounded-3xl"/>
                <div className=" min-width-[30rem] md:w-[50rem] border border-black-4 rounded-2xl p-7  flex flex-col gap-3 font-redhat text-xl">
                    <div>
                        Hi, I am <b>Lemuel</b> (pronounced like Samuel, but starts with L).
                    </div>
                    <div>
                        • I am a Front-End Developer with a background in Mechanical Engineering.
                    </div>
                    <div>
                        • I have <span className=' bg-yellow-300 font-semibold px-2'>1 YOE in Software Development</span>, and <span className=' bg-yellow-300 font-semibold px-2'>4 YOE in Mechanical Engineering</span>.
                    </div>
                    <div>
                        • I am creative, proactive, and I love challenges.
                    </div>
                    <div>
                        When I am not coding, I enjoy reading, sipping coffee, or going outdoors.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;