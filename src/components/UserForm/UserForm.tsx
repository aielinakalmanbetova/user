const  UserForm = () => {
  return (
    <form>
      <h4>Add new User</h4>
      <div className='form-group' style={{paddingBottom: '10px'}}>
        <label htmlFor='name'>Name:</label>
        <input style={{marginLeft: '7px'}}
               type='text'
               name='name'
               id='name'
               required
        />
      </div>
      <div className="form-group" style={{paddingBottom: '10px'}}>
        <label htmlFor="email">Email:</label>
        <input style={{marginLeft: '10px'}}
               type="text"
               placeholder="Username"
               aria-label="Username"
               aria-describedby="basic-addon1"/>
      </div>
      <div className="form-group" style={{paddingBottom: '10px'}}>
        <label htmlFor="Role">Role open select menu:</label>
        <select className="form-select" style={{width: '200px'}}>
          <option value="1">Пользователь</option>
          <option value="2">Редактор</option>
          <option value="3">Администратор</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="Active">Active:</label>
        <input
          type="checkbox"
          name="Active"
          id="Active"
        />
      </div>
      <div className='form-group' style={{paddingBottom: '10px'}}>
        <label htmlFor='image'>Icon:</label>
        <input style={{width: '300px'}}
               type='url'
               name='image'
               id='image'
               required
               className='form-control'
        />
      </div>
      <button type="button" className="btn btn-outline-warning" >Create</button>
    </form>
  );
};

export default UserForm;