import React from "react";
import { connect } from "react-redux";

// css
import './style.css'

const Buttons = props => {

   
  return <div className="buttons">
    <button className="btn Accept" onClick={props.Accept} >قبول الطلبات</button>
    <button className="btn reject" onClick={props.reject}>رفض الطلبات</button>
  </div>
}

function mapDispachToProps(dispach){
  return {
    reject: _ => dispach({type: 'REJECT'}),
    Accept: _ => dispach({type: 'ACCEPT'})
  }
}

export default connect(null, mapDispachToProps)(Buttons)