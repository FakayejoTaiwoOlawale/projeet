import { useQuery } from "@tanstack/react-query";
import { Media, mediaSchema } from "../schema/media.schema";
    import axios from "axios";

const getData=async ()=>{
    const response= await axios("api/calls/media")
    return Media.parse(response.data)
}

const {isloading,data,erro}=useQuery(['media'],data)