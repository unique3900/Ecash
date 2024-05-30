"use client"

import Navbar from '@repo/ui/navbar'
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const MainBar = () => {
    const session=useSession();
  return (
   <Navbar onSignin={signIn} onSignout={signOut} user={session.data?.user}/>
  )
}

export default MainBar