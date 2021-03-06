import React from "react";
import { connect } from "react-redux";

// icons
import {RemoveBtn} from './icons'

const Items = props => {

  return <ul className="Order-items">
    <span className="bold">{props.data.length} منتجات</span>
    <Item {...props} />
  </ul>
}

const Item = props => {

  return props.data.map((item, n) => <li key={n} className="single_order_item">
    <div><img className="img" src={item.image} alt={item.name} /></div>
    <div className="center">
      <div>{item.name}</div>
      <div>{item.price} ريال  {item.orderCount}x</div>
    </div>
    <div className="left">
      <button className="btn" onClick={_ => props.deleteItem(n)}><RemoveBtn /></button>
      <div><span className="bold">{item.price * item.orderCount}</span> ريال</div>
    </div>
    
  </li>)
}

const stateToProps = state => state
const dispatchToProps = dispatch => {
  return {
    deleteItem: n => dispatch({type: 'REMOVE ITEM', payload: n})
  }
}


export default connect(stateToProps, dispatchToProps)(Items)