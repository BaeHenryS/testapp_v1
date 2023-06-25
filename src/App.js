import FormControl from '@mui/material/FormControl';

import { InputLabel, Input, FormHelperText } from '@mui/material';


function myApp () 
{
  return (
    <FormControl>
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
    </FormControl>
  );

}


export default myApp;