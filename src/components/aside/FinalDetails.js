import React from 'react'
import { connect } from 'react-redux'

const FinalDetails = props => {
  let [Notes, editNotes] = React.useState('يفضل تاريخ صلاحيه حديث')

  return <div className='FinalDetails Details'>
    <div className='flex'>
      <span className='text-color'>الملاحظات</span>
      <input value={Notes} onChange={e => editNotes(e.target.value)} />
    </div>
    <div className = 'flex' >
      <span className='text-color'>عمولة التطبيق</span>
      <div>{(props.total_cost / 9).toFixed(2)} ريال</div>
    </div>
    <div  className = 'total flex' >
      <span>المجموع</span>
      <b>{props.total_cost} <span className='text-color'> ريال </span></b>
    </div>

    <button className='btn'>شراء</button>
  </div>
}
const stateToProps = state => state

export default connect(stateToProps)(FinalDetails)