const Pipe = () => {
    return <div className='w-fit grid h-16 items-center grid-cols-[1fr_24px]'>
        <div className='h-12 w-52 bg-gray-600 relative'>
            <div className="h-[96%] w-full absolute right-0 left-0 overflow-hidden z-10">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="bg-[#42b9f5] w-full h-[70%]"/>
                </div>
            </div>

        </div>
        <div className='h-full bg-gray-600 relative'>
            <div className='h-[90%] w-[80%] absolute bg-gray-500 right-0'/>
            <div className='h-[80%] w-[60%] absolute bg-gray-400 right-0'/>
        </div>
    </div>
}

export default Pipe