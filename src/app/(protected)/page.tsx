import { getTotalProjects, projectsWithPendingTasks } from "@/actions/projects-actions"
import { getTotalTasks, getTaskStatus, latestTasksCreated } from "@/actions/tasks-actions"

import StatCard from "@/components/StatCard"
import TaskStatusCard from "@/components/TaskStatusCard"
import LatestTasksCard from "@/components/LatestTasksCard"
import TopProjectsCard from "@/components/TopProjectsCard"
import { FolderKanban, ListChecks } from "lucide-react"

export default async function Dashboard() {
	const [totalProjects, totalTasks, taskStatus, latestTasks, topProjects] = await Promise.all([
		getTotalProjects(),
		getTotalTasks(),
		getTaskStatus(),
		latestTasksCreated(),
		projectsWithPendingTasks(),
	])

	return (
		<div className="p-8 space-y-6">
			<div>
				<h1 className="text-2xl font-bold text-gray-900">Bienvenido</h1>
				<p className="text-gray-500 mt-1">Aquí tienes un resumen de tu actividad</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				<StatCard
					title="Total de proyectos"
					value={totalProjects ?? 0}
					icon={<FolderKanban size={18} />}
					description="Proyectos activos"
				/>
				<StatCard
					title="Total de tareas"
					value={totalTasks ?? 0}
					icon={<ListChecks size={18} />}
					description="En todos los proyectos"
				/>
				<TaskStatusCard
					todo={taskStatus?.TODO ?? 0}
					inProgress={taskStatus?.IN_PROGRESS ?? 0}
					done={taskStatus?.DONE ?? 0}
				/>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<LatestTasksCard tasks={latestTasks ?? []} />
				<TopProjectsCard projects={topProjects ?? []} />
			</div>
		</div>
	)
}