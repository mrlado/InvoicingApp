import React, { useContext, useEffect, useState } from 'react'
import './countdown.css'
import {TotalContext} from '../Context/TotalContext'
import TextareaAutosize from '@mui/material/TextareaAutosize';

const Countdown = () => {
  const {totalS, setTotal} = useContext(TotalContext)
  const [Summa , setSumm] =useState(0)
  const [additionalData, setAdditionalData] = useState([{
    Discount:0,
    TaxRate: 0,
    Shipping:0,
  }])

let FullSumma = 0
const TaxTotal = Summa *additionalData.TaxRate / 100;
const BalanceDueWithoutshipping = Summa - additionalData.Discount -  TaxTotal 
const FullBanlance = parseInt(BalanceDueWithoutshipping) + parseInt(additionalData.Shipping)

useEffect(()=>{
  totalS.forEach((value, index, array) => {
    let Multiply = value.QTY * value.Price
    FullSumma += Multiply
    setSumm(FullSumma)
  })
},[totalS])

  return (
    <div className="Container " >

    <div className="AdditionalInfo ">
      <TextareaAutosize
      aria-label="minimum height"
      placeholder="Additional Information"
      style={{ width: '387px', height:'294px' }}
    /></div>

    <div className="Counts  flex">
        <div style={{marginTop:'10px'}} className='flex'>
          <span className='flexstart' style={{textAlign:'end',alignSelf:'flex-start'}}>SUBTOTAL:</span>
          <span className='flexEnd'style={{marginLeft:'10px', width:'360px'}}>{Summa}</span>
          <div style={{flex:'0.3'}}></div>
          </div>
        <div className='flex borderTop'>
            <span className='borderTop Container flexstart flex1' >DISCOUNT:
            </span>
              <input 
                type='number' 
                className='input flexEnd flex3'
                style={{marginLeft:'10px', width:'335px', textAlign:'end'}} 
                value={additionalData.Discount === undefined ? 0 : additionalData.Discount} 
                onChange={e =>setAdditionalData({...additionalData,Discount:e.target.value})}/>
              <div style={{flex:'0.3'}}></div>
          </div>
        <div className='flex borderTop'>
            <span className='borderTop Container flexstart flex1'>TAX RATE:
            </span>
              <input type='number' 
              className='input flex3' 
              style={{marginLeft:'10px', width:'335px',textAlign:'end'}}
              value={additionalData.TaxRate === undefined ? 0 : additionalData.TaxRate} 
              onChange={e =>setAdditionalData({...additionalData,TaxRate:e.target.value})}/>
              <div style={{flex:'0.3'}}>%</div>
           
          </div>
        <div className='flex borderTop' >
            <span className='borderTop Container flexstart flex1'>TOTAL TAX:</span>
            <input disabled 
            className='Inputdisable flex3'
            style={{marginLeft:'10px', width:'335px',textAlign:'end',backgroundColor:'transparant'}} 
            value={TaxTotal ? TaxTotal : 0} />
            <div style={{flex:'0.3'}}></div>
          </div>
        <div className='flex borderTop'>
          <span className='borderTop Container flexstart flex1'>SHIPPING/HANDLING:</span>
            <input type='number' 
              className='input flex3' 
              style={{marginLeft:'10px', width:'335px',textAlign:'end'}} 
              value={additionalData.Shipping ? additionalData.Shipping : 0} 
              onChange={e =>setAdditionalData({...additionalData,Shipping:e.target.value})} />
            <div style={{flex:'0.3'}}></div>
        </div>
        <div className='flex borderTop'>
            <span style={{fontWeight:'bold'}} className='flexstart flex1'>Full Amount:
              </span>
              <input disabled style={{width:'327px',textAlign:'end'}} 
              className="Inputdisable flex3"
              value={FullBanlance ? FullBanlance : 0}/>
              <div style={{flex:'0.3'}}></div>
        </div>
    </div>
</div>
  )
}

export default Countdown