import React from 'react'

function Prend2() {
    const prends = [
        {
            id: 1,
            firstname: 'Praveen',
            lastname: 'ReddyP',
            email: 'praveenreddyp@purviewservices.co.in'
        }
    ]
  return (
    prends.map(prenda =>{
        return(
            <span className='name'>{prenda.email}</span>
        )
    })    
  )
}

export default Prend2