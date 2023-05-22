// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";


const LoginScreen = () => {

    let [allFieldsCompleted, setAllFieldsCompleted] = useState(false);

    let [ username, setUsername ]= useState(""); //use state for these, on change{(e)=> setInput(e.target.value)} or some shit

    let [ password, setPassword ] = useState("");

    const handleChange = (e) => {
        if(e.target.id === "username") {
            setUsername(e.target.value);
        }
        if (e.target.id === "password") {
            setPassword(e.target.value);
        }

        if (username === "test" && password === "test") {
            setAllFieldsCompleted(true)
        }
    }


    return (
        <>
        <Box component="div" sx={{alignContent: 'center', alignItems: "center",width: '75%', height: '100%', backgroundColor: '#595959'}}>
            <Box component='div' sx={{borderWidth: '5px', borderColor: '#282c34', backgroundColor: '#FFFFFF', alignContent: 'center', alignItems: 'center'}}>
        <Box
          component="form"
          sx={{
            justifyContent:'center', alignContent: 'center',alignItems: 'center', width: '50%', alignItems: 'center', margin: '20px', padding: '40px', backgroundColor: '#FFFFFF'
          }}
          noValidate
          autoComplete="off"
        >
      <TextField value={username} sx={{alignSelf: 'center', margin: 'auto', width:'40%', display:'block'}} id="username" label="username" variant="outlined" onChange={e => {handleChange(e)}} /><br/>    
      <TextField value={password} sx={{alignSelf: 'center', margin: 'auto', width:'40%', display:'block'}} id="password" label="password" variant="outlined" onChange={e => {handleChange(e)}} /> 
      <Button sx={{marginTop: "30px"}} disabled={allFieldsCompleted? false: true} variant="contained">Log In</Button>
        </Box>
        </Box>
        </Box>
        </>

      );
}

export default LoginScreen;