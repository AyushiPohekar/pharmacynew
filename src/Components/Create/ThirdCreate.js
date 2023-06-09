import React from 'react'
import "./Create.scss"
const ThirdCreate = () => {
  return (
  <div className='ThirdCreateDiv'>
     <div className='left'>
        <table className='table1'>
            <th>
                <td style={{width:"10%"}}>No</td>
                <td style={{width:"30%"}}>Medicine</td>
                <td style={{width:"15%"}}>Unit</td>
                <td style={{width:"15%"}}>Qty</td>
                <td style={{width:"15%"}}>Amount</td>
                <td style={{width:"15%"}}>Delete</td>
            </th>
        </table>
        <div className='AddNew'>Add new Product</div>
        <div>
            <table className='table2'>
                <tr>
                    <td>SubTotal</td>
                    <td>0</td>
                    
                </tr>
                <tr>
                    <td>Delivery Charge</td>
                    <td>0</td>
                    
                </tr>
            </table>
        </div>
     </div>
     <div className='right'>2</div>
  </div>
  )
}

export default ThirdCreate