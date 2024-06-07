import React from 'react';
import {Users} from '../../types';

interface Props {
  user: Users;
}

const UserItem: React.FC<Props> = ({user}) => {
  const imageStyle = {
    background: `url(${user.image}) no-repeat center center / cover`,
  };

  return (
    <div className='card mb-2'>
      <div className='row g-0'>
        <div className='col-sm-4 rounded-start' style={imageStyle}></div>
        <div className='col-sm-8 ps-2'>
          <h5 className='card-title'>{user.name}</h5>
          <p className='card-text small'>{user.email}</p>
          <p className='card-text'>{user.role === 'admin' ? 'Administrator' : user.role === 'editor' ? 'Editor' : 'User'}</p>
          <p className='card-text'>{user.active ? 'Yes' : 'No'}</p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;