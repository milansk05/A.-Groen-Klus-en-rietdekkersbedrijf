'use client';

import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import AccountList from '../../../../../components/admin/AccountList';
import AccountFormTotal from '@/components/admin/AccountFormTotal';
import getUsers, { createUser, deleteUser, updateUser } from '@/app/actions/accounts';
import { User } from '@prisma/client';

export default function AccountsPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [isAddingUser, setIsAddingUser] = useState(false);
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const fetchedUsers = await getUsers();
            setUsers(fetchedUsers);
        } catch (err) {
            console.error('Error fetching users:', err);
            setError('Kan gebruikers niet laden.');
        }
    };

    const handleAddUser = async (userData: Partial<User>) => {
        try {
            console.log('Verstuurde data:', userData);
            const newUser = await createUser(userData);
            console.log('Aangemaakte gebruiker:', newUser);
            await fetchUsers();
            setIsAddingUser(false);
        } catch (err) {
            console.error('Error bij aanmaken gebruiker:', err);
            setError('Fout bij aanmaken gebruiker.');
        }
    };

    const handleEditUser = async (userData: Partial<User>) => {
        if (editingUser) {
            await updateUser(editingUser.id, userData);
            await fetchUsers();
            setEditingUser(null);
        }
    };

    const handleDeleteUser = async (userId: number) => {
        if (window.confirm('Weet je zeker dat je deze gebruiker wilt verwijderen?')) {
            await deleteUser(userId);
            await fetchUsers();
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Accounts Beheer</h1>
                <button
                    onClick={() => setIsAddingUser(true)}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-indigo-700 transition-colors"
                >
                    <Plus size={20} />
                    Nieuwe Gebruiker
                </button>
            </div>

            {error && <p className="text-red-500">{error}</p>}

            {(isAddingUser || editingUser) && (
                <AccountFormTotal
                    user={editingUser || undefined}
                    onSubmit={editingUser ? handleEditUser : handleAddUser}
                    onCancel={() => {
                        setIsAddingUser(false);
                        setEditingUser(null);
                    }}
                />
            )}

            <AccountList users={users} onEdit={setEditingUser} onDelete={handleDeleteUser} />
        </div>
    );
}