import avatar from '../assets/avatar.jpeg';

const AboutMe = () => {
    return(
        <div>
            <div id="about" className=" text-3xl font-redhat font-bold text-center pt-20 pb-6">
                About Me
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10 pb-24">
                <img src={avatar} alt={'avatar'} className="w-40 h-fit border border-black-4 p-3 rounded-3xl"/>
                <div className=" min-width-[30rem] md:w-[50rem] border border-black-4 rounded-2xl p-7  flex flex-col gap-3 font-redhat text-xl">
                    <div>
                        Hi, I'm Lemuel (pronounced like Samuel, but starts with L).
                        I'm a full stack web developer with a background in Mechanical Engineering.
                    </div>
                    <div>
                        While working as a full time Mechanical Engineer, I started to explore web development in my free time.
                        I always love studying, solving engineering problems.
                        I discovered that Web Development is the engineering field that I can do anywhere, anytime.
                        Not only can I challenge myself in working through problems, but also express my creativity by building visually appealing sites.
                    </div>
                    <div>
                        When I am not coding, you'll probably find me reading, sipping coffee, or going outdoors.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;