const MechE = () => {
    return(
        <div className=" w-[90vw] pl-3 rounded-2xl pt-8 pb-10 skills:p-5 grid grid-cols-3 skills:border-black-4 skills:rounded-3xl bg-slate-500 text-white skills:w-auto lg:flex gap-5 justify-items-center">
            <div className=" col-span-3 text-xl font-redhat font-bold self-center">Mech Eng. :</div>
            <div className="flex flex-col self-center justify-items-center">
                <div className="text-center font-redhat font-bold text-md skills:text-xl">MATLAB</div>
            </div>
            <div className="flex flex-col self-center justify-items-center">
                <div className="text-center font-redhat font-bold text-md skills:text-xl">AutoCAD</div>
            </div>
            <div className="flex flex-col self-center justify-items-center">
                <div className="text-center font-redhat font-bold text-md skills:text-xl">CATIA</div>
            </div>
            <div className="flex flex-col self-center justify-items-center">
                <div className="text-center font-redhat font-bold text-md skills:text-xl">SolidWorks</div>
            </div>
            <div className="flex flex-col self-center justify-items-center">
                <div className="text-center font-redhat font-bold text-md skills:text-xl">ANSYS</div>
            </div>
            <div className="flex flex-col self-center justify-items-center">                
                <div className="text-center font-redhat font-bold text-md skills:text-xl">Inventor</div>
            </div>
        </div>
    )
}

export default MechE;