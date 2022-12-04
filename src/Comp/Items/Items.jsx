import React, { useContext, useEffect, useState } from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import {TotalContext} from '../Context/TotalContext'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import './Items.css'

const Items = () => {

const {totalS, setTotal} = useContext(TotalContext)

const [data, setData] = useState([
    {
        Description:'',
        QTY:0,
        Price: 0,
        Saved: false, 
    }
])
const [Booleal, setBoolean] = useState(data.Saved || false)



const AddItem = (e)=>{
    e.preventDefault()
setData([...data, {
    Description:'',
    QTY:0,
    Price: 0,
    Saved: false,
} ])
}

useEffect(()=>{
setTotal(data)
},[data])

  return <>
  {data.length !== 0 ? 
            data.map((Item, index) => {
                return<div key={index}>
                                <div className="Item Container">
                                    <span className='Nomber Container' style={{flex:1}}>{index+1}</span>
                                     <input type='text' className='Description DescriptionItem input' style={{flex:3}} value={Item.Description}  name='Description'onChange={e => setData(prev =>prev.map( (x, I) => I === index ? {...x, Description:e.target.value} : x))} />
                                    <input  type='number'className='QTY QTYItem input'style={{flex:1}} value ={Item.QTY} onChange={e => setData(prev =>prev.map( (x, I) => I === index ? {...x, QTY:e.target.value} : x))}/>
                                    <input  type='number' className='Price PriceItem input'style={{flex:1}} value={Item.Price} onChange={e => {setData(prev =>prev.map( (x, I) => I === index ? {...x, Price:e.target.value} : x))}} />
                                    <span className='Total input' style={{flex:1,borderRight: '1px solid lightgray'}}>{Item.QTY * Item.Price}</span>
                                    <div className='flexhalf Container' style={{flex:1}}>
                                        { Booleal === false ? <CheckBoxIcon className='Icon'/> : ''}
                                        <HighlightOffIcon className='Icon' onClick={e => setData(prev =>prev.filter( (x, I) => I !== index))}/>
                                    </div>
                                </div> 
                </div>
                
    }) 

    :  
        <div className="Item Container">
            <span className='Nomber Container'>1</span>
            <input type='text' className='Description DescriptionItem input' style={{flex:3}} />
            <input  type='number'className='QTY QTYItem input'style={{flex:1}}  />
            <input type='number' className='Price PriceItem input'style={{flex:1}} />
            <span className='Total input' style={{flex:1,borderRight: '1px solid lightgray'}}></span>
                <div className='flexhalf Container' style={{flex:1}}><HighlightOffIcon className='Icon'/></div>
        </div> 
        
}
<div className='Container AddItem'><button className='AddItem BTN' onClick={AddItem}>Add Item</button></div>
</>
}

export default Items




