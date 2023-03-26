import Link from "next/link";

const Nav = () => {
    return (
        <div className='flex p-5 container m-auto justify-between'>
            <Link className='text-2xl font-bold' href="/">Strojne inštalacije <span className='text-myBlue'>Ričl</span></Link>
            <div className='flex mx-5'>
                <Link className='hover:text-myBlue' href="/projekti">Projekti</Link>
                <Link className='ml-12 hover:text-myBlue' href="/o-nas">O nas</Link>
            </div>
        </div>
    )
}

export default Nav