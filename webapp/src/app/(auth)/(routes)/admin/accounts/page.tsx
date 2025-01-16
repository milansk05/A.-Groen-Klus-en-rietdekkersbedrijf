import { Plus } from 'lucide-react'
import AccountList from '../../../../../components/admin/AccountList'
import AccountForm from '../../../../../components/admin/AccountForm'
import getUsers from '@/app/actions/accounts';
import AccountFormTotal from '@/components/admin/AccountFormTotal';

export default async function AccountsPage() {
    const users = await getUsers();


    
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Accounts Beheer</h1>
                
            </div>

                <AccountFormTotal />
              

                 <AccountList users={users} /> 

        </div>
    )
}