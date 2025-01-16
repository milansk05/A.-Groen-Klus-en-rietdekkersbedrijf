import { Home, TrendingUp } from 'lucide-react'
import MetricCard from '../../../components/admin/MetricCard'
import ProjectsList from '../../../components/admin/ProjectsList'
import NotificationsList from '../../../components/admin/NotificationsList'
import { getProjectsCount, getRecentProjects } from '@/app/actions/projects'

const notifications = [
    { id: 1, message: "Voorbeeld Notificatie", time: "5 minuten geleden" },
]

export default async function AdminDashboard() {
    const projectCounts = await getProjectsCount()
    const recentProjectsResult = await getRecentProjects(4)

    return (
        <div>
            <h1 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Home className="w-6 h-6" />
                Dashboard
            </h1>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <MetricCard
                    title="Wekelijkse bezoekers"
                    value="-"
                    subtitle="deze week"
                    icon={<TrendingUp className="w-6 h-6" />}
                />
                <MetricCard
                    title="Nieuwe Projecten"
                    value={projectCounts.success ? projectCounts.data.monthlyCount.toString() : "N/A"}
                    subtitle="deze maand"
                />
                <MetricCard
                    title="Totaal Projecten"
                    value={projectCounts.success ? projectCounts.data.totalCount.toString() : "N/A"}
                    subtitle="alle projecten"
                />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <ProjectsList projects={recentProjectsResult.success ? recentProjectsResult.data : []} />
                <NotificationsList notifications={notifications} />
            </div>
        </div>
    )
}