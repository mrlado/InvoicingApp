import React from 'react'
import'./Bill.css';

const BillTo = () => {
  return (
    <div>
        BillTo:
        <div className='Container InputContainer'>
    <input type='text' name='CompanyName' placeholder='Company Name'></input>    
    <input type='number' name='CompanyName' placeholder='Reg. Number'></input>  
    <input type='number' name='CompanyName' placeholder='Phone'></input>  
    <input type='text' name='CompanyName' placeholder='Email'></input>   
    </div>
    </div>
  )
}

export default BillTo