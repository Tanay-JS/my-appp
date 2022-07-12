import React from 'react'

function User() {
    const users = [
        {
            id: 1,
            firstname: 'Sanjay',
            lastname: 'Chimakurthy'
        }
    ]
  return (
    users.map(usera =>{
        return(
            <span className='name'>{usera.firstname}</span>
        )
    })    
  )
}

export default User