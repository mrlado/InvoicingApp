import React, { useEffect, useState } from 'react'
import './Layout.css'
import BillTo from './Bill/BillTo'
import Billfrom from './Bill/Billfrom'
import Logo from './Logo/Logo'
import CountDown from './CountDown/Countdown'

import ColorLensIcon from '@mui/icons-material/ColorLens';
import Items from './Items/Items'

const Layout = () => {
    const Color = window.localStorage.getItem('color')|| 'green'

    const[initial, setInitial] = useState(Color)

    useEffect(()=>{
        window.localStorage.setItem('color', initial)
    },[initial])


  return (
    <div className='Layout '>
        <input type='color' className="top Divider opasityO" style={{backgroundColor:initial}} onChange={e => setInitial(e.target.value)}/>
        <div className='flex'>
        <button onClick={()=>{window.print()}}>print</button>
            </div>
        <div className="flex">
            <div className='flex flex1'style={{textAlign:'center',justifyContent:'center',alignContent:'cneter',alignItems:'center'}}>
                <div className='flex1'><h2 style={{marginLeft:'10px', textAlign:'center',justifyContent:'center',alignContent:'cneter',alignItems:'center'}} className="Container">Invoice </h2></div>
                <div className='flex1'><input type='text' className='input' style={{marginLeft:'10px', textAlign:'center',justifyContent:'center',alignContent:'cneter',alignItems:'center'}} placeholder={`RR- ${Date.now()}`}/></div>
            </div>
            <div className='logo '><Logo/></div>
        </div>
        <div className="Container JustEnd">
            <div className='Invoice Nomber Date flexEnd'>
                
                <div className='Container flexEnd' >Invoice Date:<input type='date' style={{border:"none", marginLeft:'62px'}}/></div>
            </div>
        </div>
        <div className="billInfo Container ">
            <div className="bill From "><Billfrom/></div>
            <div className="bill To "><BillTo/></div>
        </div>
        <div className='Invoice Header Divider Container ' style={{backgroundColor:initial}}>
            <span className='Nomber Container' style={{flex:1}}>#</span>
            <input type='text' className='Description DescriptionItem input' style={{flex:3}} value='Description' />
            <input  type='text'className='QTY QTYItem input'style={{flex:1}} value ='QTY' />
            <input  type='text' className='Price PriceItem input'style={{flex:1}} value='Unit Price' />
            <span className='Total' style={{flex:1}}>Total</span>
            <div className='flexhalf Container' style={{flex:1}}>
                <input type="color" className='Input' onChange={e => setInitial(e.target.value)} />
                <ColorLensIcon className='Icon' />
                </div>
        </div>
            <Items/>
        <CountDown/>

        <input type='color' className="bottom Divider" style={{backgroundColor:initial}} onChange={e => setInitial(e.target.value)}/>
    </div>
  )
}

export default Layout