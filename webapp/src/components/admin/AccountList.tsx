import { Edit, Trash2 } from 'lucide-react'

interface Account {
    id: number;
    name: string;
    email: string;
    role: string;
    lastLogin: string;
}

interface AccountListProps {
    accounts: Account[];
    onEdit: (account: Account) => void;
    onDelete: (accountId: number) => void;
}

export default function AccountList({ accounts, onEdit, onDelete }: AccountListProps) {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Naam</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rol</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Laatste Login</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acties</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {accounts.map((account) => (
                        <tr key={account.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{account.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{account.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{account.role}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{account.lastLogin}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <button
                                    onClick={() => onEdit(account)}
                                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                                >
                                    <Edit size={18} />
                                </button>
                                <button
                                    onClick={() => onDelete(account.id)}
                                    className="text-red-600 hover:text-red-900"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}