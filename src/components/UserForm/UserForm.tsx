import React, {useState} from 'react';
import {Users} from '../../types';

interface Props {
  onSubmit: (user: Users) => void;
}

const initialState = {
  name: '',
  email: '',
  role: '',
  active: false,
  image: '',
};

const  UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState<Users>(initialState);
   const changeUser = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
   ) => {
     setUser((prevState) => ({
       ...prevState,
       [event.target.name]: event.target.value,
     }));
   };

  const changeActive = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.checked,
    }));
  };
  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onSubmit({
      id: Math.random().toString(),
      ...user,
    });
    setUser(initialState);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new User</h4>
      <div className='form-group mt-2'>
        <label htmlFor='name'>Name:</label>
        <input style={{marginLeft: '7px'}}
               type='text'
               name='name'
               value={user.name}
               id='name'
               onChange={changeUser}
               required
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="email">Email:</label>
        <input style={{marginLeft: '10px'}}
               type="email"
               name="email"
               placeholder="email"
               value={user.email}
               onChange={changeUser}
               aria-label="email"
               aria-describedby="basic-addon1"/>
      </div>
      <div className="form-group mt-2">
        <label htmlFor="role">Role open select menu:</label>
        <select className="form-select w-50" name={'role'} value={user.role} onChange={changeUser}>
          <option value="1">Пользователь</option>
          <option value="2">Редактор</option>
          <option value="3">Администратор</option>
        </select>
      </div>
      <div className="form-group mt-2">
        <label htmlFor="active">Active:</label>
        <input
          type="checkbox"
          name="active"
          onChange={changeActive}
          checked={user.active}
          id="active"
        />
      </div>
      <div className='form-group mt-2'>
        <label htmlFor='image'>Icon:</label>
        <input style={{width: '300px'}}
               type='url'
               name='image'
               id='image'
               onChange={changeUser}
               required
               value={user.image}
               className='form-control'
        />
      </div>
      <button type="submit" className="btn btn-outline-warning mt-2">Create</button>
    </form>
  );
};

export default UserForm;