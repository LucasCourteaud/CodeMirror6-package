# CodeMirror6-package

### To use modes for other languages than php/css/js/html you need : 
###    - import {[language_name}] from "@codemirror/legacy-modes/mode/[language_name]"
###    - import {StreamLanguage} from "@codemirror/stream-parser"
###    - add StreamLanguage.define([language_name]) in extension of the create EditorView

### execute `npm run build` to generate your component
### you can change the building file in build.sh, the file is the second argument