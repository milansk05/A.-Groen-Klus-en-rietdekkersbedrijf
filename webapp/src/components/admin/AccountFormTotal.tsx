'use client'
import React, { useState } from 'react'
import AccountForm from './AccountForm'
import { Button } from '../ui/button';


const AccountFormTotal = () => {
    const [showForm, setshowForm] = useState(false);

    const handleCLick = () => {
        setshowForm(true);
    }

  return (
    <>
        <Button onClick={handleCLick}>Add Account</Button>
        {showForm && <AccountForm />}
    </>
  )
}

export default AccountFormTotal