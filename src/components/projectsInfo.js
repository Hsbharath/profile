import React from "react"

const projects = () => (
  <div className="min-h-screen py-20">
    <h1 className="title lg:text-6xl text-4xl text-cyan-400 antialised line-clamp-1 font-black pb-6 ml-auto">
      Projects
    </h1>
    <div className="grid grid-cols-2 gap-4">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value, index) => (
        <div className="bg-[theme(colors.cyanaqua)] h-28 rounded" key={index}>
          {value}
        </div>
      ))}
    </div>
  </div>
)

export default projects
