import React from 'react'

export default function Alert(props) {
const Capitalize=(word)=>
{
  if(word==="danger")
  {
    word="error"
  }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
}
  return (
    <div style={{height:'20px'}}>
{props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{Capitalize(props.alert.type)} : </strong> {props.alert.msg}
  {/* {console.log(props.alert.msg)}; */}
  
</div>}
</div>
  )
}
