import { doc, setDoc } from "firebase/firestore"; 

import { db } from '../config/firebase'


const setDocument = async (values) => {
// Construct a Random ID for the Patient
const patientID = Math.floor(Math.random() * 1000000000);


//values.patientID
const patientReference = doc(db, 'patients', patientID.toString());
await setDoc(patientReference, {
  fname: values.patientFirstName,
  lname: values.patientLastName,
  dob: values.patientDOB,
});

}

export default setDocument;
