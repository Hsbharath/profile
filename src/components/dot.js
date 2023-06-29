import React from 'react'

const dot = ({active}) => {

    console.log(active);

  return (
    <div className={active ? 'dot active' : 'dot'}>
        <div className="circle"></div>
    </div>
  )
}

export default dot