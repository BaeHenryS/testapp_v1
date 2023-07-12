//Importing Firebase



import { db } from './config/firebase'
import { getDocs, collection } from 'firebase/firestore';

import { useState, useEffect } from 'react';



import FormControl from '@mui/material/FormControl';
import { InputLabel, Input, FormHelperText } from '@mui/material';
import { MultiStepForm } from './components/MultiStepForm';

import { get } from 'react-hook-form';
import { Medications } from './components/Medications';



function App () 
{
  const [patientList, setpatientList] = useState([]);


  const patientReference = collection(db, 'patients');


  useEffect(() => {
    const getpatientList = async() => {
        // READ THE DATA
        // Set the Patient List
        try {
        const data = await getDocs(patientReference);

        const patients = data.docs.map((doc) => ({...doc.data(), id: doc.id}));

        console.log("a")
        
        setpatientList(patients);
        console.log(patientList[0].fname)

        //console.log(patients)
      } catch(e) {
        console.log(e);
      }
      

    }
    
getpatientList();
console.log(patientList)

  }, []);


  return (
   


    <div>
    <div className="Patients">
      <h1>Patients</h1>
      
      {patientList.map((patient) => (
        <div className="Patient" key={patient.id}>
          <h2>{patient.fname}</h2>
          <h2>{patient.lname}</h2>
        </div>
          ))}
    </div>

    <div className = "MultiForm">
        <MultiStepForm/>
    </div>
    </div>



    // <FormControl>
    //   <InputLabel htmlFor="my-input">Email address</InputLabel>
    //   <Input id="my-input" aria-describedby="my-helper-text" />
    //   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
    // </FormControl>
  );

}


export default App;