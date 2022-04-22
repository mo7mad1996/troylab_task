import React from 'react'
import { connect } from 'react-redux'

const Details = props => <div className='Details' >
  <div className='flex'>
    <label>عدد الطلبات</label>
    <span>{props.data.length}</span>
  </div>
  <div className='flex'>
    <label>المجموع</label>
    <label>
      {
        props.total_cost
      } 
      <span className='main-color'> ريال</span>
    </label>
  </div>
</div>


const mapStateTOProps = state => state
export default connect(mapStateTOProps)(Details)