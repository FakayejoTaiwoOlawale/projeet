import { create } from "zustand"

type PopProps={
    isShowing:boolean
    setIshowing:(isShowing:boolean)=>void
}

export const usePopStore=create<PopProps>((set)=>({
    isShowing:false,
    setIshowing:(value)=>set({isShowing:value})
}))