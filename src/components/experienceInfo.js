import React from "react"

const experience = () => {
  return (
    <div className="min-h-screen py-20">
      <h1 className="title lg:text-6xl text-4xl text-cyan-400 antialised line-clamp-1 font-black pb-6 ml-auto">
        Experience
      </h1>
      <div>
        {[1, 2, 3, 4, 5, 6].map((value, index) => (
          <div className="w-full min-h-28 rounded mb-3" key={index}>
            <div className="flex gap-4">
              <p className="flex text-[theme(colors.cyanaqua)]">2016</p>
              <div className="flex-1 bg-[theme(colors.cyanaqua)] h-32 rounded">
                {value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default experience
