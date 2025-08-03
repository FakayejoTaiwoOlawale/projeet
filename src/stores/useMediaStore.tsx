// import { boolean } from "zod";
// import { create } from "zustand";


// //this is for deifining like the parameters
// type MediaStore={
//     isLoaded:boolean;
//     setLoaded:(value:boolean)=>void
// }




// export default useMediaStore=create<MediaStore>((set)=>{
//     isLoaded:boolean,
//     setLoaded:(value)=>set(isLoaded:value)
// })

import { create } from 'zustand';

type MediaStore = {
  isLoaded: boolean;
  setLoaded: (value: boolean) => void;
};

export const useMediaStore = create<MediaStore>((set) => ({
  isLoaded: false,
  setLoaded: (value) => set({ isLoaded: value }),
}));
//this function receives from the type ..its like (thanks security for the )
// export default UseMediaStore=create<MediaStore>((set)=>{
//     isLoaded:false,
//     setLoaded:()=>set({isLoaded:false})
// }
// )

// export default useBearStore=create((set)=>({
//     bear:1,
//     addBear:()=>set((state)=>{bear:state.bear+1})
//     multiplyBear:()=>set((state)=>({bear:state.bear*2}))
// }))