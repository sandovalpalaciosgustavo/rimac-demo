import { Navigate } from "react-router";
import { useContext } from 'react';


export const ProtegerRutas =({children})=>{
    /* if(!loginProteger){ 
        return <Navigate to="/"></Navigate>
    } */

    return children;
}