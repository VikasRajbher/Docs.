import React, { useRef, useState } from 'react'
import Card from './Card'

function foreground() {
  
  const ref = useRef(null);
  
  const data=[{
      desc: "This is the Background color of the Card that will be displayed.",
      filesize: "0.9mb",
      close: true,
      tag:{ isOpen: true, tagTitle:"Download Now", tagColor:"green" },
    },
    {
      desc: "This is the Background color of the Card that will be displayed.",
      filesize: "0.9mb",
      close: true,
      tag:{ isOpen: true, tagTitle:"Upload", tagColor:"blue" },
    },
    {
      desc: "This is the Background color of the Card that will be displayed.",
      filesize: "0.9mb",
      close: true,
      tag:{ isOpen: true, tagTitle:"Download Now", tagColor:"green" },
    },
  ];
    useState()
  return (
    <div ref={ref} className=' fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5 '>
      {data.map((item, index)=>(
        <Card data={item} reference={ref} />
      ))}
    </div>
  )
}

export default foreground