import React from 'react'
import { FaXmark } from 'react-icons/fa6'

const YtModal = ({name,url,setShowYtModal}) => {
  return (
    <div className="fixed top-0 left-0 z-10 flex h-[100vh] w-[100%] items-center justify-center bg-[#00000033]	px-4 ">
        <div className="bg-white w-[800px] h-[500px] flex flex-col  items-center p-5 rounded-xl gap-5 max-sm:h-fit">
          <div className="flex w-full justify-between">
            <span className='font-semibold'>{name}</span>

            <FaXmark className="w-6 h-6 cursor-pointer" onClick={()=>setShowYtModal(false)}/>
          </div>
          <div className=" flex w-full items-center flex-1 justify-center">
          <iframe
            width="350"
            height="200"
            className="w-full h-full max-md:w-[350px] max-sm:w-[300px] max-sm:h-[200px]"
            src={`https://www.youtube.com/embed/${url}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
          </div>
        </div>
      </div>
  )
}

export default YtModal
