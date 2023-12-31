import React from "react"

const dot = ({ active }) => {
  return (
    <div className={active ? "dot active" : "dot"}>
      <div className="circle"></div>
      <div className="line"></div>
    </div>
  )
}

export default dot
