import Toolbar from './components/Toolbar/Toolbar';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';
const App = () => {

  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main className='container-fluid'>
        <div className='row mt-2'>
          <div className='col-4'>
            <UserForm />
          </div>
          <div className='col-4'>
            <UserList />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
