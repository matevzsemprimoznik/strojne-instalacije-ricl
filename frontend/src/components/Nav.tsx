import Link from "next/link";

const Nav = () => {
    return (
        <div className='flex py-8 container m-auto justify-between'>
            <Link className='text-3xl text-white font-bold' href="/">Strojne inštalacije <span className='text-myBlue'>Ričl</span></Link>
            <div className='flex mx-5'>
                <Link className='text-lg text-white hover-underline-animation' href="/projekti">Projekti</Link>
                <Link className='ml-12 text-lg text-white hover-underline-animation whitespace-nowrap' href="/o-nas">O nas</Link>
            </div>
        </div>
    )
}

export default Nav