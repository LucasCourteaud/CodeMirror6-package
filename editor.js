import * as view from "@codemirror/view"
import * as state from "@codemirror/state"
import * as language from "@codemirror/language"
import * as commands from "@codemirror/commands"
import * as search from "@codemirror/search"
import * as autocomplete from "@codemirror/autocomplete"
import * as lint from "@codemirror/lint"
import * as html from "@codemirror/lang-html"
import * as php from "@codemirror/lang-php"
import * as css from "@codemirror/lang-css"
import * as javascript from "@codemirror/lang-javascript"
import * as json from "@codemirror/lang-json"
import * as markdown from "@codemirror/lang-markdown"
import * as xml from "@codemirror/lang-xml"
import * as sql from "@codemirror/legacy-modes/mode/sql"
import { basicLight } from "cm6-theme-basic-light"
import { oneDark } from "@codemirror/theme-one-dark"
import { solarizedLight } from "cm6-theme-solarized-light"
import { solarizedDark } from "cm6-theme-solarized-dark"
import { materialDark } from "cm6-theme-material-dark"
import { nordTheme } from "cm6-theme-nord"
import { gruvboxLight } from "cm6-theme-gruvbox-light"
import { gruvboxDark } from "cm6-theme-gruvbox-dark"

const languageExtensions = {
    javascript: [new language.LanguageSupport(javascript.javascriptLanguage)],
    html: [new language.LanguageSupport(html.htmlLanguage)],
    css: [new language.LanguageSupport(css.cssLanguage)],
    php: [new language.LanguageSupport(php.phpLanguage)],
    xml: [new language.LanguageSupport(xml.xmlLanguage)],
    json: [new language.LanguageSupport(json.jsonLanguage)],
    sql: [new language.StreamLanguage(sql.mySQL)],
    md: [new language.LanguageSupport(markdown.markdownLanguage)],
}
  
const themeExtensions = {
    basicLight: basicLight,
    basicDark: oneDark,
    solarizedLight: solarizedLight,
    solarizedDark: solarizedDark,
    materialDark: materialDark,
    nordTheme: nordTheme,
    gruvboxLight: gruvboxLight,
    gruvboxDark: gruvboxDark
}

window.codemirror6 = {
  view: view,
  state: state,
  language: language,
  commands: commands,
  search: search,
  autocomplete: autocomplete,
  lint: lint,
  html: html,
  php: php,
  css: css,
  javascript: javascript,
  json: json,
  xml: xml,
  markdown: markdown,
  sql: sql,
  languageExtensions: languageExtensions,
  themeExtensions: themeExtensions,
  getBasicExtensions() {
    let cm = window.codemirror6;
    if (!cm.ext) {
      cm.ext = {
        lineNumbers: cm.view.lineNumbers(),
        highlightActiveLineGutter: cm.view.highlightActiveLineGutter(),
        highlightSpecialChars: cm.view.highlightSpecialChars(),
        history: cm.commands.history(),
        foldGutter: cm.language.foldGutter(),
        drawSelection: cm.view.drawSelection(),
        dropCursor: cm.view.dropCursor(),
        allowMultipleSelections: cm.state.EditorState.allowMultipleSelections.of(true),
        indentOnInput: cm.language.indentOnInput(),
        syntaxHighlighting: cm.language.syntaxHighlighting(cm.language.defaultHighlightStyle, {fallback: true}),
        bracketMatching: cm.language.bracketMatching(),
        closeBrackets: cm.autocomplete.closeBrackets(),
        autocompletion: cm.autocomplete.autocompletion(),
        rectangularSelection: cm.view.rectangularSelection(),
        crosshairCursor: cm.view.crosshairCursor(),
        highlightActiveLine: cm.view.highlightActiveLine(),
        highlightSelectionMatches: cm.search.highlightSelectionMatches(),
        keymap: cm.view.keymap.of([
          ...cm.autocomplete.closeBracketsKeymap,
          ...cm.commands.defaultKeymap,
          ...cm.search.searchKeymap,
          ...cm.commands.historyKeymap,
          ...cm.language.foldKeymap,
          ...cm.autocomplete.completionKeymap,
          ...cm.lint.lintKeymap,
          cm.commands.indentWithTab
        ]),
      };
    }
    return cm.ext;
  }
};