import CreateFormProject from "@/components/CreateProjectForm";

const page = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col ">
                <h1 className="text-4xl">Proyectos</h1>
                <h2 className="text-2xl">0 proyectos</h2>
            </div>
            
            <div>
                <CreateFormProject />
            </div>
        </div>
    )
}

export default page;