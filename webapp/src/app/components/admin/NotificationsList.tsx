interface Notification {
    id: number
    message: string
    time: string
}

interface NotificationsListProps {
    notifications: Notification[]
}

export default function NotificationsList({ notifications }: NotificationsListProps) {
    return (
        <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Meldingen</h2>
            <p className="text-gray-600 mb-6">Recente systeem meldingen</p>

            <div className="space-y-4">
                {notifications.map((notification) => (
                    <div
                        key={notification.id}
                        className="flex items-start gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                        <div>
                            <p className="font-medium">{notification.message}</p>
                            <p className="text-sm text-gray-500">{notification.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

