import React from 'react';
import "./studentheader.css"
import { BsSearch, BsJustify} from 'react-icons/bs';

function StudentHeader({OpenSidebar}) {
  
  return (
    <header className='header-a'>
        <div className='menu-icon-a'>
            <BsJustify className='icon-a' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon-a'/>
        </div>
        {/* <div className='header-right'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div> */}
    </header>
  )
}

export default StudentHeader
