import React from "react";
import { connect } from "react-redux";

// components

// css
import './style.css'

// icons
import {
  Sandwich,
  Pizza,
  Drink,
  Info,
  Run,
  Add
} from './NavHeaderIcons'


// land page
const Home = props => {
  return (
    <React.Fragment>
      <header>
        <ul>
          <List />
        </ul>
      </header>

      <section className="cards">
        <Cards {...props} />
      </section>
    </React.Fragment>
  )
} 
  

// header
const List = () => {
  let sections = React.useState([
    {
      title: 'الكل',
      icon: ''
    },
    {
      title: 'بيتزا',
      icon: <Pizza />
    },
    {
      title: 'سندوتشات',
      icon: <Sandwich />
    },
    {
      title: 'مشروبات',
      icon: <Drink />
    },
    {
      title: 'بيتزا',
      icon: <Pizza />
    },
    {
      title: 'سندوتشات',
      icon: <Sandwich />
    },
    {
      title: 'مشروبات',
      icon: <Drink />
    },
  ])[0]

  return sections.map((section, n) => <li key={n} className={ (n === 0)? 'active' : ''} >{section.icon} <span>{section.title}</span></li>)
}

// productions
const Cards = props => {
  let [items, setItems] = React.useState([])


  // fetch the data 
  React.useEffect(() => {
    fetch('/data.json').then(res => res.json()).then(data => setItems(data))
  }, []);


  return items.map(item => <Card item={item} add={props.add} key={Math.random()} />)
}

const Card = ({item, add}) =>{
  // add to shoping list
  function addOrder(value) {
    add(value)
    // setItems(items.filter(i => i !== value ))
  }

  return <div className="card" key={Math.random()}>
    <div className="card-info">
      <span>
        <Run />
        {item.calories} Kcal
      </span>
      <button><Info /></button>
    </div>

    <div className="card-image"><img src={item.image} alt={item.name} /> </div>
    <div className="item-info">
      <div>{item.name}</div>
      <div>الكميه بالمخزون: <span>{item.count}</span></div>
    </div>
    <div className="item-price">
      <button onClick={() => addOrder(Object.create(item))}><Add /></button>
      <div><span>{item.price}</span> ريال</div>
    </div>
  </div> 
}

/**
 * =========
 * = Redux =
 * =========
 */
const mapDispatchToProps = (dispatch) => {
  return {
    add: (value) => dispatch(add(value))
  }
}
const add = (value) => ({
      type: 'ADD',
      payload: value
    })


export default connect(null, mapDispatchToProps)(Home)