import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Pipe from "@/components/Pipe";

export default function Home() {
  return (
      <div className='flex'>
        <Pipe />
        <Pipe />
      </div>
  )
}
