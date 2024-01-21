import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Logo from "../../components/images/Golden Path - Logo.png"
import { Email, Password } from '@mui/icons-material';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div style={{display:"flex" , justifyContent:"space-around" , alignItems:"center" , minHeight:"100vh"}}>
    

<div>

<Box mx={5} sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Email
        </InputLabel>
        <Input
        type='email'
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          }
        />
      </FormControl>
      <TextField
      type='password'
        id="input-with-icon-textfield"
        label="Password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Password />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
       <Button variant="Submit" color="primary"sx={{bgcolor:"#fa8806"}}> <Link to={"/admin"} style={{textDecoration:"none" , color:"#000"}}> sign in </Link>  </Button>
         
       {/* </Button> className='btn5'> sign in </button> */}
      </Box>
    </Box>

</div>
   <div style={{backgroundColor:"#6e6a6a" , minHeight:"100vh" , width:"70%" ,display:"flex", alignItems:"center"} }>
    
    <img
    
          src={Logo}
          alt="Logo"
          style={{ width: "100%" }}
          className="me-3 img"
        />
    </div> 

    
    </div>
  )
}

export default Login