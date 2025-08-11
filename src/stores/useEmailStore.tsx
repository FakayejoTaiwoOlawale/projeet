// import { create } from "zustand";
import {create} from "zustand"

interface UserDetails{
    name:string;
    setName:(name:string)=>void

}

export const UseUserStore=create<UserDetails>((set){
    name:"";
    setName:(value)=>(set(name:value));
    email:"";
})