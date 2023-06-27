//Importing Firebase





import FormControl from '@mui/material/FormControl';
import { InputLabel, Input, FormHelperText } from '@mui/material';
import { MultiStepForm } from './components/MultiStepForm';
import { Medications } from './components/Medications';


function myApp () 
{
  return (
    <div>
        <MultiStepForm/>
    </div>
    // <FormControl>
    //   <InputLabel htmlFor="my-input">Email address</InputLabel>
    //   <Input id="my-input" aria-describedby="my-helper-text" />
    //   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
    // </FormControl>
  );

}


export default myApp;