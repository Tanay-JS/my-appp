import React from 'react'

function User3() {
    const users = [
        {
            firstname: " ",
            lastname: " ",
            email: " "
        }
    ]
    const submitHandler = e =>{
        e.preventDefault();
        console.log(e.target.email)
        fetch("http://localhost:9002/auth/user/sanjay@gmail.com",
        {
          method:"GET",
          body:JSON.stringify(users),
          headers: {
            "Content-Type" : "application/json; charset=UTF-8"
        }
        })}
  return (
    users.map(usera =>{
        return(
            // <button type="submit"  className="btn">Register</button>
            <p>{usera.email}</p>
        )
    })    
  )
}

export default User3