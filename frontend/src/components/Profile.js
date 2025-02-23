import React from 'react'
import {useUser} from'../hooks/useUser'
function Profile() {

  const {user}=useUser();
  console.log(user)
  return (
    <div className='bg-gray-100 p-4 rounded-md'>
      <div>
        <p><strong>name:  </strong>{user.name}</p>
        <p><strong>Email:  </strong>{user.email}</p>
        <p><strong>dept:  </strong>{user.dept}</p>
      </div>
    </div>
  )
}

export default Profile