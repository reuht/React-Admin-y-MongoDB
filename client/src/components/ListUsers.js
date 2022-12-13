import {
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton,
} from "react-admin";

export default function ListUser(props) {
  // console.log(props);

  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="email" />
        <EditButton label="Edit" basePath="/users" />
        <DeleteButton label="Delete" basePath="/users" />
      </Datagrid>
    </List>
  );
}
