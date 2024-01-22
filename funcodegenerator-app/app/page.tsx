'use client'

import dynamic from 'next/dynamic'
import './styles.css'
import { MakeRealButton } from './components/MakeRealButton'
import { ResponseShapeUtil } from './ResponseShape/ResponseShape'


const Tldraw = dynamic(async () => (await import('@tldraw/tldraw')).Tldraw, {
	ssr: false,
})

const shapeUtils = [ResponseShapeUtil]

export default function App() {
	return (
		<div className="editor">
			<Tldraw
				persistenceKey="make-real"
				shareZone={<MakeRealButton />}
				shapeUtils={shapeUtils}
			>
			</Tldraw>
		</div>
	)
}
