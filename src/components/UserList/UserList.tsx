import React from 'react';
import UserItem from '../UserItem/UserItem';
import {Users} from '../../types';

interface Props {
  users: Users[]
}
const UserList: React.FC<Props> = ({users}) => {
  return (
    <>
      <h4>UserList</h4>
      {users.map((user) => (
        <UserItem key={user.id} user={user}/>
      ))}
    </>
  );
};

export default UserList;