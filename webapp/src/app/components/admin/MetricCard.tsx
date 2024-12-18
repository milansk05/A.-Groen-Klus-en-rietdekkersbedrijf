interface MetricCardProps {
    title: string
    value: string | number
    subtitle: string
    icon?: React.ReactNode
}

export default function MetricCard({
    title,
    value,
    subtitle,
    icon
}: MetricCardProps) {
    return (
        <div className="bg-primary text-white rounded-lg p-6">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-sm font-medium mb-2">{title}</h3>
                    <p className="text-4xl font-bold mb-1">{value}</p>
                    <p className="text-sm opacity-90">{subtitle}</p>
                </div>
                {icon && (
                    <div className="opacity-80">
                        {icon}
                    </div>
                )}
            </div>
        </div>
    )
}