'use client'

import { useEffect, useState } from 'react'
import { Plus } from 'lucide-react'
import AccountList from '../../../../../components/admin/AccountList'
import AccountForm from '../../../../../components/admin/AccountForm'
import { getAccounts } from '@/app/actions/accounts'

interface Account {
    id: number;
    name: string;
    email: string;
    role: string;
    lastLogin: string;
}

const initialAccounts: Account[] = [
    { id: 1, name: "Arjen Groen", email: "arjen@agroen-dv.nl", role: "Admin", lastLogin: "2023-06-15" },
    { id: 2, name: "Jan Janssen", email: "jan@agroen-dv.nl", role: "Medewerker", lastLogin: "2023-06-14" },
    { id: 3, name: "Petra Peters", email: "petra@agroen-dv.nl", role: "Medewerker", lastLogin: "2023-06-13" },
]

export default function AccountsPage() {



    const [accounts, setAccounts] = useState<Account[]>(initialAccounts)
    const [isAddingAccount, setIsAddingAccount] = useState(false)
    const [editingAccount, setEditingAccount] = useState<Account | null>(null)

    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        loadAccounts();
    }, [])

    const loadAccounts = async () => {        
        const result = await getAccounts();

        if (result.succes) {
            setAccounts(result.data);
        }
        setIsLoading(false);
    }

    const handleAddAccount = (newAccount: Omit<Account, 'id'>) => {
        setAccounts([...accounts, { ...newAccount, id: accounts.length + 1 }])
        setIsAddingAccount(false)
    }

    const handleEditAccount = (updatedAccount: Omit<Account, 'id'> & { id?: number }) => {
        if (updatedAccount.id) {
            setAccounts(accounts.map(a => a.id === updatedAccount.id ? { ...updatedAccount, id: a.id } : a))
        }
        setEditingAccount(null)
    }

    const handleDeleteAccount = (accountId: number) => {
        setAccounts(accounts.filter(a => a.id !== accountId))
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Accounts Beheer</h1>
                <button
                    onClick={() => setIsAddingAccount(true)}
                    className="bg-primary text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-primary/90 transition-colors"
                >
                    <Plus size={20} />
                    Nieuw Account
                </button>
            </div>

            {isAddingAccount && (
                <AccountForm onSubmit={handleAddAccount} onCancel={() => setIsAddingAccount(false)} />
            )}

            {editingAccount && (
                <AccountForm
                    account={editingAccount}
                    onSubmit={handleEditAccount}
                    onCancel={() => setEditingAccount(null)}
                />
            )}

            <AccountList
                accounts={accounts}
                onEdit={setEditingAccount}
                onDelete={handleDeleteAccount}
            />
        </div>
    )
}