import {useState} from 'react';
import {Users} from './types';
import Toolbar from './components/Toolbar/Toolbar';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';

const App = () => {
  const [Users, setUsers] = useState<Users[]>([
    {id: Math.random().toString(), name: 'Alan', role: 'user', email: 'alan@gmail.com', image: 'https://cdn-icons-png.freepik.com/512/4086/4086679.png', active: false},
    {id: Math.random().toString(), name: 'Aya', role: 'user', email: 'aya@gmail.com', image: 'https://thumbs.dreamstime.com/b/died-laughing-humor-react-funny-story-childhood-happiness-concept-kid-cheerful-face-emotions-sincere-emotional-134638084.jpg', active: true},
    {id: Math.random().toString(), name: 'Aman', role: 'user', email: 'aman@gmail.com', image: 'https://cdn-icons-png.freepik.com/512/4086/4086679.png', active: false},
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
