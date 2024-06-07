import {useState} from 'react';
import {Users} from './types';
import Toolbar from './components/Toolbar/Toolbar';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';

const App = () => {
  const [Users, setUsers] = useState<Users[]>([
    {id: '1', name: 'Alan', email: 'alan@gmail.com', image: 'https://www.flaticon.com/free-icon/programmer_560216?term=user&related_id=560216', active: 'on'},
    {id: '2', name: 'Aya', email: 'aya@gmail.com', image: 'https://www.flaticon.com/free-icon/woman_4140047?term=user&page=1&position=37&origin=search', active: 'off'},
    {id: '3', name: 'Aman', email: 'aman@gmail.com', image: 'https://www.flaticon.com/free-icon/programmer_560216?term=user&related_id=560216', active: 'on'},
  ]);

  const addUser = (user: Users) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main className='container-fluid'>
        <div className='row mt-2'>
          <div className='col-4'>
            <UserForm onSubmit={addUser} />
          </div>
          <div className='col-4'>
            <UserList users={Users} />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
