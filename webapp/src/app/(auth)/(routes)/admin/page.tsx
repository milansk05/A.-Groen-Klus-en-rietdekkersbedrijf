'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Home, TrendingUp } from 'lucide-react'
import MetricCard from '../../../components/admin/MetricCard'
import ProjectsList from '../../../components/admin/ProjectsList'
import NotificationsList from '../../../components/admin/NotificationsList'
import { getProjectsCount, getRecentProjects } from '@/app/actions/projects'

const notifications = [
    { id: 1, message: "Voorbeeld Notificatie", time: "5 minuten geleden" },
]

export default function AdminDashboard() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [projectCounts, setProjectCounts] = useState<any>(null);
    const [recentProjects, setRecentProjects] = useState<any[]>([]);
    const router = useRouter();

    useEffect(() => {
        const authStatus = sessionStorage.getItem("isAuthenticated");
        console.log("Auth status gevonden:", authStatus);

        if (authStatus !== "true") {
            setTimeout(() => {
                console.log("Niet ingelogd, doorsturen naar /login...");
                router.push("/login");
            }, 100); // Even wachten om errors te voorkomen
        } else {
            setIsAuthenticated(true);
        }

        // ✅ Data ophalen via useEffect
        async function fetchData() {
            try {
                const projectsData = await getProjectsCount();
                const recentData = await getRecentProjects(4);
                setProjectCounts(projectsData.success ? projectsData.data : null);
                setRecentProjects(recentData.success ? recentData.data : []);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        }

        fetchData();
    }, [router]);

    if (isAuthenticated === null) {
        return <p className="text-center">Bezig met laden...</p>;
    }

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
                    value={projectCounts ? projectCounts.monthlyCount.toString() : "N/A"}
                    subtitle="deze maand"
                />
                <MetricCard
                    title="Totaal Projecten"
                    value={projectCounts ? projectCounts.totalCount.toString() : "N/A"}
                    subtitle="alle projecten"
                />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <ProjectsList projects={recentProjects} />
                <NotificationsList notifications={notifications} />
            </div>
        </div>
    );
}