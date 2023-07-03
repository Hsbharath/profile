import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const projects = () => {
  const projdata = [
    {
      id: 1,
      title: "An apple mobile which is nothing like apple",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    },
    {
      id: 2,
      title:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    },
    {
      id: 3,
      title: "Samsung's new variant which goes beyond Galaxy to the Universe",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    },
    {
      id: 4,
      title: "OPPO F19 is officially announced on April 2021.",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    },
    {
      id: 5,
      title:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    },
    {
      id: 6,
      title:
        "MacBook Pro 2021 with mini-LED display may launch between September, November",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
    },
    {
      id: 7,
      title:
        "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
    },
    {
      id: 8,
      title:
        "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
    },
    {
      id: 9,
      title:
        "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey 1 Year Warranty",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
    },
    {
      id: 10,
      title:
        "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
      category: "laptops",
      thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
    },
  ]

  return (
    <div className="lg:py-20 md:py-10 sm:py-5 xs:py-5">
      <div className="flex items-center justify-start mb-6">
        <h1 className="title lg:text-4xl text-4xl antialised line-clamp-1 font-bold lg:pb-7 md:pb-7">
          Projects
        </h1>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-[theme(colors.cyanaqua)] deg-45 ml-3 lg:mb-3"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, index) => (
          <div className="rounded" key={index}>
            <img
              src={projdata[index].thumbnail}
              alt={index}
              className="w-full h-28 bg-cover rounded-lg"
            />
            <p className="mb-2">{projdata[index].title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default projects
