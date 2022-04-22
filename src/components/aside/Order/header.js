import React from "react";

// images
import Kid from './images/kid.png'

// icons
import {WhiteClose} from './icons'
import { connect } from "react-redux";



const Header = props => <header className="order-header">
  <div><img className="img" src={Kid} alt="kid" /></div>
  <div className="info">
    <div>الرقم المقصفي <span className="bold">145</span></div>
    <div>محمد بن بندر الوشيقيري</div>
  </div>
  <div className="close" onClick={props.delete_order}><WhiteClose /></div>
</header>

const dispachToProps = dispatch => {
  return {
    delete_order: _ => dispatch({type: 'REJECT'})
  }
}

export default connect(null, dispachToProps)( Header)