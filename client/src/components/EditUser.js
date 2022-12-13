import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput} from 'react-admin';




export default function EditUser(props){
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="name" required/>
        <NumberInput source="age"  required/>
        <TextInput source="email" required/>
      </SimpleForm>
    </Edit>
  );
};
