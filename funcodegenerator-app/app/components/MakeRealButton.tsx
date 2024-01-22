import { useEditor, useToasts } from '@tldraw/tldraw'
import { useCallback } from 'react'
import { makeReal } from '../makeReal'

export function MakeRealButton() {
	const editor = useEditor()
	const { addToast } = useToasts()

	const handleClick = useCallback(async () => {
		try {
			await makeReal(editor)
		} catch (e) {
			console.error(e)
			addToast({
				icon: 'cross-2',
				title: 'Algo salio mal :c',
				description: (e as Error).message.slice(0, 100),
			})
		}
	}, [editor, addToast])

	return (
		<button className="makeRealButton" onClick={handleClick}>
			Genera tu codigo
		</button>
	)
}
