import React from 'react'

function Prend1() {
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
            <span className='fname'>{prenda.firstname+prenda.lastname}</span>
        )
    })    
  )
}

export default Prend1