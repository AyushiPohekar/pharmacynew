import React from 'react';
import "./Create.scss";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import ThirdCreate from './ThirdCreate';



const Create = ({state}) => {
    const cardItem=[
        {
            title:"Order Recieved",
            middle:"29 JAn 2023 14:20",
            content:"Show Details"
        },
        {
            title:"Delivery Type",
            middle:"Home Delivery",
            content:"Show Details"
        },
        {
            title:"Payment Mode",
            middle:"Cash On Delivery",
            content:""
        },
        {
            title:"Consumer Number",
            middle:555555555,
            content:""
        },
        {
            title:"Consumer Name",
            middle:"Ayushi",
            content:""
        }
    ]
  
  return (
  <>
  <div className='firstdiv'>
    <div className='left'>
    <div className='arrow'><AiOutlineArrowLeft/></div>
   
    <div className='OrderId'>Order #01234</div>
    <button className='newbtn'>New Order</button>
    </div>
    
    <div className='right'>
        <div>Show Open</div>
        <div className='premium'>Go Premium </div>
    </div>
    

  </div>
  <div className='seconddiv'>
   {
     cardItem.map((item)=>{
        return(
            <>
            <div className='cardname'>
                <div className='uppercard'>
                <div className='title'>{item.title}</div>
                <div className='middle'>{item.middle}</div>
                </div>
               
                <div className='content'>{item.content}</div>
            </div>
            </>
        )
     })

   }
  </div>
  <div><ThirdCreate/></div>
  </>
  )
}

export default Create