import { Home, TrendingUp } from 'lucide-react'
import MetricCard from '../../../components/admin/MetricCard'
import ProjectsList from '../../../components/admin/ProjectsList'
import NotificationsList from '../../../components/admin/NotificationsList'

const recentProjects = [
    { id: 1, title: "Project 1", lastUpdate: "2 uur geleden" },
    { id: 2, title: "Project 2", lastUpdate: "2 uur geleden" },
    { id: 3, title: "Project 3", lastUpdate: "2 uur geleden" },
    { id: 4, title: "Project 4", lastUpdate: "2 uur geleden" },
]

const notifications = [
    { id: 1, message: "Nieuwe aanvraag ontvangen", time: "5 minuten geleden" },
    { id: 2, message: "Nieuwe aanvraag ontvangen", time: "5 minuten geleden" },
    { id: 3, message: "Nieuwe aanvraag ontvangen", time: "5 minuten geleden" },
    { id: 4, message: "Nieuwe aanvraag ontvangen", time: "5 minuten geleden" },
]

export default function AdminDashboard() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-8 flex items-center gap-2">
                <Home className="w-6 h-6" />
                Dashboard
            </h1>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <MetricCard
                    title="Wekelijkse bezoekers"
                    value="100000"
                    subtitle="deze week"
                    icon={<TrendingUp className="w-6 h-6" />}
                />
                <MetricCard
                    title="Nieuwe Projecten"
                    value="24"
                    subtitle="deze maand"
                />
                <MetricCard
                    title="Klanttevredenheid"
                    value="4.9"
                    subtitle="uit 150 reviews"
                />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <ProjectsList projects={recentProjects} />
                <NotificationsList notifications={notifications} />
            </div>
        </div>
    )
}