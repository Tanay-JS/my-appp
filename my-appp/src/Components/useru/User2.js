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
            <p className='head'>{usera.firstname}</p>
        )
    })    
  )
}

export default User