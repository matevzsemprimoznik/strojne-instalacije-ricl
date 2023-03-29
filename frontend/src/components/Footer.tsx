import Link from "next/link";
import FooterImage from '../assets/footer-image.svg'
import Image from "next/image";

const Footer = () => {
    return (
        <footer className='flex relative'>
            <div className='absolute w-full h-full -z-10'>
                <svg preserveAspectRatio='none' width="100%" height="100%" viewBox="0 0 1728 311" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1728" height="311" fill="url(#paint0_linear_70_91)"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M667 205.844V164.819C668.525 154.202 671.308 143.989 675.411 134.337C699.848 76.8657 768.01 45.8205 846.285 37.1874C923.011 28.7252 1011.96 44.5962 1089.77 88.6368C1163.54 130.387 1214.19 195.447 1239.7 259.861C1246.86 277.94 1248.98 294.814 1247.97 310.975H711.513C686.98 276.972 671.54 240.447 667 205.844Z" fill="#2F92FE" fill-opacity="0.84"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1726.42 113.557V311H1022C1038.44 249.727 1097.63 193.311 1175.1 149.506C1268.93 96.4419 1394.67 63.579 1524.57 68.4824C1598.41 71.2696 1667.02 88.132 1726.42 113.557Z" fill="#47B7FE" fill-opacity="0.51"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1295.78 311H810.47C864.483 267.117 922.83 236.229 978.238 218.439C1044.4 197.198 1090.43 222.79 1137.08 248.721C1146.82 254.139 1156.6 259.572 1166.58 264.596C1184.4 273.556 1205.77 279.652 1227.25 285.779C1251.63 292.734 1276.15 299.73 1295.78 311Z" fill="#418BFF" fill-opacity="0.79"/>
                    <defs>
                        <linearGradient id="paint0_linear_70_91" x1="-1.98717e-07" y1="156" x2="1728" y2="146" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#2860FE"/>
                            <stop offset="1" stop-color="#2EB3FF"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className='w-full h-full py-20 flex justify-between container m-auto'>
                <div>
                    <h3 className='text-white text-2xl font-bold mb-4'>PODJETJE</h3>
                    <p className='text-white text-xl'>SUGO d.o.o</p>
                    <p className='text-white text-xl'>Spodnji Jakobski Dol 45</p>
                    <p className='text-white text-xl'>2222 Jakobski dol</p>
                    <p className='text-white text-xl'>Slovenija</p>
                </div>
                <div>
                    <h3 className='text-white text-2xl font-bold mb-4'>KONTAKT</h3>
                    <p className='text-white text-xl'>+386 40 123 456</p>
                    <p className='text-white text-xl'>+386 40 123 456</p>
                    <p className='text-white text-xl'>cncgolob@gmail.com</p>
                </div>
                <div>
                    <h3 className='text-white text-2xl font-bold mb-4'>POVEZAVE</h3>
                    <p><Link className='text-white text-xl' href="/projekti">Projekti</Link></p>
                    <p><Link className='text-white text-xl' href="/o-nas">O nas</Link></p>
                </div>
            </div>

        </footer>
    )
}

export default Footer