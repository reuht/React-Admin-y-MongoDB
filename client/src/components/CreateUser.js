import React from "react";
import { Create, SimpleForm, TextInput, NumberInput} from "react-admin";

export default function CreateUser(props) {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="name" required />
        <NumberInput source="age" required />
        <TextInput source="email" required />
      </SimpleForm>
    </Create>
  );
}
