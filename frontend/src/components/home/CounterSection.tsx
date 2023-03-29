const CounterSection = () => {
    return <div className='container m-auto'>
        <div className='flex py-5 px-10 justify-between border-2 border-[#ececec] rounded-full'>
            <div className='flex flex-col items-center'>
                <p  className='text-2xl font-bold'>80</p>
                <p className='text-2xl font-bold'>Zadovoljnih uporabnikov</p>
            </div>
            <div className='flex flex-col items-center'>
                <p>213</p>
                <p>Uspešnih projektov</p>
            </div>
            <div className='flex flex-col items-center'>
                <p>3</p>
                <p>Različne države</p>
            </div>
        </div>
    </div>
}
export default CounterSection