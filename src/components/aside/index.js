import React from "react";
import { connect } from "react-redux";
// css
import './style.css'

// components
import Items from './items'
import Details from './details'
import Buttons from './Buttons'

import Order from './Order'
import FinalDetails from './FinalDetails'

// icons
import {
  Search,
  Info,
  SearchPeople,
  NoItemsIcon,
  Edit
} from './icons'

const Aside = props => {

  let [inEdit, setInEdit] = React.useState(false)

  const edit = () => setInEdit(e => !e)

  return (
    <aside className="aside">
      <header>
        <form>
          <input placeholder="اسم الطالب" />
          <button><Search /></button>
        </form>

        <button className="yellow"><SearchPeople /></button>
        <button className="blue"><Info /></button>
      </header>

      {
        props.data.length ? 

          props.is_sold? 
            <div className="last_order">
              <Order />
              <FinalDetails />
            </div>
          :
            <div className="items">
              <div className="item-header">
                <h4>ملخض الطلبات الوارده</h4>
                {
                  inEdit? 
                  <button onClick={edit}>حفظ</button>:
                  <button onClick={edit} className='yellow'><Edit /> تعديل</button>
                }
              </div>
              <Items inEdit={inEdit} />
              <Details />

              <Buttons />
              
            </div>
        :
        <NoItems />
      }

    </aside>
  )
}

const NoItems = _ => <div className="no-items">
  <NoItemsIcon />
  <h3>يجب عليك اختيار طالب اولا</h3>
</div>


const mapStateTOProps = state => state
export default connect(mapStateTOProps)(Aside)