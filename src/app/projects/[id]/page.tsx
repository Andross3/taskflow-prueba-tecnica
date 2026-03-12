import ButtonProject from "@/components/buttonNewProject";

const page = () => {
    return (
        <div className="flex justify-between items-center px-6">
            <div className="flex flex-col ">
                <h1 className="text-4xl">Proyectos</h1>
                <h2 className="text-2xl">0 proyectos</h2>
            </div>
            
            <div>
                <ButtonProject />
            </div>
        </div>
    )
}

export default page;