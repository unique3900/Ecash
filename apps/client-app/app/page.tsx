
import { store } from '@repo/store/store'
import { getServerSession } from 'next-auth'
import React from 'react'
import { authOptions } from '../lib/auth';
const getUser=async()=>{
  const session= await getServerSession(authOptions);
  console.log(session)
  return session
}


const page =async () => {
  const session=await getUser();
  return (
    <div className=''>hey {session?.user.email}</div>
  )
}

export default page
