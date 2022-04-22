import React from "react";

const SingleItem = ({ item, props, n }) => {
  
  let [edit, setEdit] = React.useState(false)
  let [count, setCount] = React.useState(1)

  React.useEffect(() => {
    props.update(count, n);
  }, [count, n, props])

  
  const input = e => {
    setCount(v => v = +e.target.value)
    setEdit(true)
  }

  return <div className="single-item">
    <img src={item.image} alt={item.name} />
    <div className="item-details" >
      <div>{item.name}</div>
      {
        (edit && !props.inEdit)  && 
        <span className="text-yellow">تم تعديل الكميه</span>
      }
    </div>
    <div>
      {
        props.inEdit ? 
        <div className ={edit? "changed": undefined} >

          <input type={'number'}
            onChange = {input}
            value = {count}
            min={0}
            />
        </div>  
        : <div className={"count mainColor" }>{item.orderCount}</div>
      } 
      
    </div>
  </div>
}


export default SingleItem