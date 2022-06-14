import { StreamLanguage, defaultHighlightStyle } from "@codemirror/language"; 

import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
import { autocompletion } from "@codemirror/autocomplete";

import {keymap} from '@codemirror/view'
import {indentWithTab} from "@codemirror/commands";
import {lintGutter, linter} from "@codemirror/lint"
import Linter from "eslint4b-prebuilt"

import {html} from "@codemirror/lang-html"
import {php} from "@codemirror/lang-php"
import {css} from "@codemirror/lang-css"
import {esLint, javascript} from "@codemirror/lang-javascript"
import {json} from "@codemirror/lang-json"
import {markdown} from "@codemirror/lang-markdown"
import {xml} from "@codemirror/lang-xml"
import {sql} from "@codemirror/legacy-modes/mode/sql"
import {shell} from "@codemirror/legacy-modes/mode/shell"

import { oneDark, oneDarkTheme, oneDarkHighlightStyle } from "@codemirror/theme-one-dark";

import {themes} from "./themes/themes"

const dark = [oneDarkTheme, oneDarkHighlightStyle];

window.codemirror6 = {
  EditorView: EditorView,
  EditorState: EditorState,
  basicSetup: basicSetup,
  autocompletion: autocompletion,
  html: html,
  php: php,
  css: css,
  javascript: javascript,
  json: json,
  markdown: markdown,
  xml: xml,
  sql: sql,
  shell: shell,
  StreamLanguage: StreamLanguage,
  defaultHighlightStyle: defaultHighlightStyle,
  keymap: keymap,
  indentWithTab: indentWithTab,
  linter: linter,
  esLint: esLint,
  Linter: Linter,
  lintGutter: lintGutter,
  themes: themes,
  oneDarkTheme: oneDarkTheme,
  oneDark: oneDark,
  dark: dark
};