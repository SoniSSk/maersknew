import React, { useEffect, useState } from 'react';
import router from "next/router";

function Dashboard() {

  const [name, setName ] = useState();
  const [email , setEmail ] = useState();
  const [password, setPassword ] = useState();
  

  const handelchangeName =  (props) =>{
    setName(props.target.value);
   // console.log(name);
  };
  const handelchangeEmail =  (event) =>{
    setEmail(event.target.value);
   // console.log(email);
  };
  const handelchangepassword =  (event) =>{
    setPassword(event.target.value);
    //console.log(mobile);
  };


 const registerAPI = async () =>{
   const response  = await fetch('/api/user',{
       method:'POST',
       header:{'Content-Type':'application/json'}, body:JSON.stringify({
           name  : 'Kuldeep',
           password: 'swapee123',
           email: 'swap@gmail.com',
       })},
   )
  .then(response => response.json())
  .then(json => console.log(json))
  
  
}

// useEffect(() => {
//     registerAPI();
//     // alert("yes");
//     setEmail("kuldeep@gmail.com");
//     setName("Kuldeep Soni");
//     setPassword("swpaee@1");
   
// })

  const onSubmitCall  =()=>{
    // registerAPI();
   
    if (!/\S+@\S+\.\S+/.test(email)){
        alert("Email Is not Valid ");
       // break;
    }
  
  //  else{
  //   // registerAPI();
  //   router.push("/login");

  //  }
   
  
  };
  const onLogout =()=>{
    router.push("/login");
  }

  

  return (
    <div  >
            <div style={{
        marginTop:50,
       }} ></div>
         <div style={{
        margin: "auto",
        width: 200,
        border: 5,
        borderColor: "grey",
        borderStyle:"solid",
        borderRadius:20,
        padding: 10,}}>
        <form >
         <lable> <b style={{
        paddingLeft:60,
       }}>Profile </b> </lable><br/><br/>
         <lable> Name:<input type = "text" value= {name} onChange= {handelchangeName} placeholder="Name"></input></lable><br/><br/>
         <lable> Email:<input type = "email" value= {email} onChange= {handelchangeEmail} placeholder="email"></input></lable><br/><br/>
         <lable> Password:<input  type = "text" value= {password} onChange= {handelchangepassword} placeholder="password"></input></lable><br/><br/>
          < p style={{
        textAlign:'center',
        justifyContent:'center',
        paddingLeft:10,
        }}><input  type ="button" onClick={onSubmitCall} value="Update" /> </p>
        < p style={{
        textAlign:'center',
        justifyContent:'center',
        paddingLeft:10,
        }}><input  type ="button" onClick={onLogout} value="Logout" /></p>
        </form>
        </div>
    </div>
  );
}

export default Dashboard;
