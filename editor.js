import {EditorState, EditorView, basicSetup} from '@codemirror/basic-setup'
import {html} from '@codemirror/lang-html'

let editor = new EditorView({
    state: EditorState.create({
        extensions: [
            basicSetup,
            html()
        ]
    }),
    parent: document.body
})