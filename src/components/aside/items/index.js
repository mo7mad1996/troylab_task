import React from "react";
import { connect } from "react-redux";

// components
import SingleItem from "./SingleItem";

// shoping list
const Items = props =>{
  return <div className="items-menu">
    <List {...props}  /> 
  </div>
  }

const List = props => props.data.map((item, ndx) => <SingleItem key={ndx} item={item} props={props} n={ndx} />)




// redux
const mapStateToProps = state => state
const mapDispatchToProps = dispatch => {
  return {
    update: (value, index) => dispatch(update(value, index))
  }
}
function update(value, index) {
  return {
    type: 'UPDATE',
    payload: value,
    index
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items) ;