import * as types from "./action.type";
import axios from "axios";

export const getRocketData =(params)=>(dispatch)=>{
    // console.log("blogparams",params)
    dispatch({type:types.GET_DATA_REQUEST});
return axios.get("https://api.spacexdata.com/v3/rockets",params)
.then((res)=>{
    dispatch({type:types.GET_DATA_SUCCESS,payload:res.data})
})
    .catch((err)=>dispatch({type:types.GET_DATA_FAILURE,payload:console.log("err",err)}))
}