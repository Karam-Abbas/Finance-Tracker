import React from 'react'
import useEntry from '../contexts/entryContext'
function EntrySwitch() {
    const {toggle,renderLogin,renderSignup} =useEntry();
    const onChange=(e)=>{
        if(toggle==='Signup') {
            renderSignup();
        }
        else {
            renderLogin();
        }
    };
  return (
    <a href="" onClick={onChange}></a>
  )
}

export default EntrySwitch