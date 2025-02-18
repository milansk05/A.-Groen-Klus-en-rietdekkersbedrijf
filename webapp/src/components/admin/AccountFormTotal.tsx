'use client'

import { useState } from 'react'
import { User } from '@prisma/client'
import { updateUser } from '@/app/actions/accounts'

interface AccountFormTotalProps {
  user?: User
  onSubmit: (user: Partial<User>) => void
  onCancel: () => void
}

export default function AccountFormTotal({ user, onSubmit, onCancel }: AccountFormTotalProps) {
  // State voor formuliervelden, met standaardwaarden op basis van een bestaande gebruiker (indien aanwezig)
  const [name, setName] = useState(user?.name || '')
  const [email, setEmail] = useState(user?.email || '')
  const [password, setPassword] = useState('') // Wachtwoord wordt niet vooraf ingevuld om veiligheidsredenen
  const [role, setRole] = useState(user?.role || '')

  // Functie voor het afhandelen van het verzenden van het formulier
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const userData: Partial<User> = { name, email, role }

    // Alleen wachtwoord toevoegen als het is ingevuld
    if (password) {
      userData.password = password
    }

    // Bijwerken als er een bestaande gebruiker is, anders nieuw toevoegen
    if (user?.id) {
      await updateUser(user.id, userData)
    }

    onSubmit(userData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Naam invoerveld */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Naam</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>

      {/* E-mail invoerveld */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        />
      </div>

      {/* Wachtwoord invoerveld */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Wachtwoord {user ? '(laat leeg om ongewijzigd te laten)' : ''}</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          {...(user ? {} : { required: true })} // Vereist alleen voor nieuwe gebruikers
        />
      </div>

      {/* Rol keuzemenu */}
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-700">Rol</label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          required
        >
          <option value="">Selecteer een rol</option>
          <option value="ADMIN">Admin</option>
          <option value="USER">Gebruiker</option>
        </select>
      </div>

      {/* Actieknoppen */}
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Annuleren
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {user ? 'Bijwerken' : 'Toevoegen'}
        </button>
      </div>
    </form>
  )
}