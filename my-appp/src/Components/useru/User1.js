import React from 'react'

function User() {
    const users = [
        {
            id: 1,
            firstname: 'Sanjay',
            lastname: ' Chimakurthy'
        }
    ]
  return (
    users.map(usera =>{
        return(
            <span className='fname'>{usera.firstname+usera.lastname}</span>
        )
    })    
  )
}

export default User