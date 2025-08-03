import { boolean } from "zod";
import { create } from "zustand";


//this is for deifining like the parameters
type MediaStore={
    isLoaded:boolean;
    setLoaded:(value:boolean)=>void
}

//this function receives from the type ..its like (thanks security for the )
export default UseMediaStore=create<MediaStore>((set))
    isLoaded:false,
    setLoaded:(value)=>set({isLoaded:value})
