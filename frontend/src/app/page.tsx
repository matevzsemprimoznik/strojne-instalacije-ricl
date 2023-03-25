import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Pipe from "@/components/Pipe";
import PipeEdge from "@/components/PipeEdge";
import React from "react";
import Pipes from "@/components/Pipes";

export default function Home() {
  return (
      <div>
          <Pipes/>

      </div>
  )
}
