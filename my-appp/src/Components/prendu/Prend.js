import React from 'react'

function Prend() {
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
            <span className='name'>{prenda.firstname}</span>
        )
    })    
  )
}

export default Prend