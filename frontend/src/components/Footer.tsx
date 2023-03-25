import Link from "next/link";

const Footer = () => {
    return (
        <footer className='flex p-5 bg-gray-700'>
            <ul className='text-white'>
                <li className='mb-6'><Link className='text-xl font-bold ' href="/">Ričl strojne inštalacije</Link></li>
                <li><Link href="/projekti">Projekti</Link></li>
                <li><Link href="/o-nas">O nas</Link></li>
            </ul>

        </footer>
    )
}

export default Footer