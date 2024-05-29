import { useSelector } from "react-redux";
import { selectBalance } from "../action/balanceReducer";

export const useBalance=()=>{
    const value=useSelector(selectBalance);
    return value;
}