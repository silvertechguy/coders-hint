import React from 'react'

import AceEditor from 'react-ace'
import 'ace-builds'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'

import styles from './editors.module.css'

const Editor = ({ title, mode, height }) => (
  <div className={styles.editorContainer}>
    <div className={styles.editorTitle}>{title}</div>
    <AceEditor
      mode={mode}
      theme="monokai"
      name={title}
      fontSize={18}
      width={'100%'}
      showPrintMargin={true}
      showGutter={true}
      tabSize={2}
      setOptions={{ useWorker: false }}
      height={height}
    />
  </div>
)

export const HtmlEditor = (props) => (
  <Editor title={'HTML'} mode="html" {...props} />
)

export const CssEditor = (props) => (
  <Editor title={'CSS'} mode="css" {...props} />
)

export const JavascriptEditor = (props) => (
  <Editor title={'JS'} mode="javascript" {...props} />
)
