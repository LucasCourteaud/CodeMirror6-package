import {
  EditorView,
  keymap,
} from '@codemirror/view'
import { EditorState } from '@codemirror/state'
import { history, historyKeymap } from '@codemirror/history'
import { indentOnInput, LanguageSupport } from '@codemirror/language'
import { defaultKeymap } from '@codemirror/commands'
import { javascriptLanguage } from '@codemirror/lang-javascript'
import { defaultHighlightStyle } from '@codemirror/highlight'
import { oneDarkTheme, oneDarkHighlightStyle } from '@codemirror/theme-one-dark'

const languageExtensions = {
    javascript: [new LanguageSupport(javascriptLanguage)],
}
  
const themeExtensions = {
    light: [defaultHighlightStyle],
    dark: [oneDarkTheme, oneDarkHighlightStyle]
}

window.codemirror6 = {
    languageExtensions: languageExtensions,
    themeExtensions: themeExtensions,
    EditorState: EditorState,
    EditorView: EditorView,
    history: [history, historyKeymap],
    indentOnInput: indentOnInput,
    keymap: keymap,
    defaultKeymap: defaultKeymap,
    historyKeymap: historyKeymap,
    languageExtensions: languageExtensions,
    themeExtensions: themeExtensions
}