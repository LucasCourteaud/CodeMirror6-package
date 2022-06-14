import {
  EditorView,
  keymap,
} from '@codemirror/view'
import { EditorState } from '@codemirror/state'
import { history, historyKeymap, defaultKeymap } from '@codemirror/commands'
import { indentOnInput, LanguageSupport, defaultHighlightStyle } from '@codemirror/language'
import { javascriptLanguage } from '@codemirror/lang-javascript'
import {
  oneDarkTheme,
  oneDarkHighlightStyle
} from '@codemirror/theme-one-dark'

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
    history: history,
    indentOnInput: indentOnInput,
    keymap: keymap,
    defaultKeymap: defaultKeymap,
    historyKeymap: historyKeymap,
    languageExtensions: languageExtensions,
    themeExtensions: themeExtensions
}