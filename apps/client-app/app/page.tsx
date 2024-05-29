import { PrismaClient } from '@repo/db/client'
import React from 'react'


const page = () => {
  if(PrismaClient){
    console.log("Hey")
  }
  return (
    <div className=''>page</div>
  )
}

export default page
