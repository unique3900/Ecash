"use client"

import { useBalance } from "@repo/store/useBalance"
import {BalanceState} from "@repo/store/balanceReducer"
const page = () => {
const {balance}:number|any=useBalance()
    
  return (
    <div>heeey {balance}</div>
  )
}

export default page