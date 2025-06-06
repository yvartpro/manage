import api from "./api/axios"


export const fetchUsers = ()=>{
    api.get("/api/users.php")
      .then(resp=>{
        if(resp.data.success){
          return(resp.data.users)
        }else{
          throw new Error(resp.data.sapor)
        }
      })
  .catch(err=>console.error(err.message))
}
