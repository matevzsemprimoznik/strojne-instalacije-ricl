import Link from "next/link";

const Nav = () => {
    return (
        <div className='flex p-5 w-full justify-between'>
            <Link className='text-xl font-bold' href="/">Ričl strojne inštalacije</Link>
            <div className='flex mx-5'>
                <Link href="/projekti">Projekti</Link>
                <Link className='ml-12' href="/o-nas">O nas</Link>
            </div>
        </div>
    )
}

export default Nav