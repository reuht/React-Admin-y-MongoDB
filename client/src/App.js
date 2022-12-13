
import './App.css';
import {Admin, Resource} from 'react-admin'; 
import dataProvider from './dataProvider';
import ListUser from './components/ListUsers';
import CreateUser from './components/CreateUser'; 
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider}>
      <Resource
        name="users"
        list={ListUser}
        edit={EditUser}
        create={CreateUser}
      />
      </Admin>
    </div>
  );
}

export default App;
