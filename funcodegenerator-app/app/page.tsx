import Image from 'next/image'
import { Canvas } from './components/Canvas'
import {Buttons} from './components/Buttons'
import {Tittle} from './components/Tittle'
export default function Home() {
  return (
    <main >
      <div>
      <Tittle />
    <Canvas />
    <Buttons />
    
      </div>
     
    </main>
  )
}
