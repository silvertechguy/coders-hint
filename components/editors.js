import React from 'react'

import styles from './editors.module.css'

const Editor = ({ mode, onChange, value, title, height }) => {
  if (typeof window !== 'undefined') {
    const AceEditor = require('react-ace').default
    require('ace-builds/src-noconflict/mode-javascript')
    require('ace-builds/src-noconflict/mode-html')
    require('ace-builds/src-noconflict/mode-css')
    require('ace-builds/src-noconflict/theme-monokai')

    return (
      <div className={styles.editorContainer}>
        <div className={styles.editorTitle}>{title}</div>
        <AceEditor
          mode={mode}
          theme="monokai"
          name={title}
          onChange={onChange}
          fontSize={18}
          width={'100%'}
          height={height}
          value={value}
          showPrintMargin={true}
          showGutter={true}
          tabSize={2}
          setOptions={{ useWorker: false }}
        />
      </div>
    )
  }

  return null
}

export const HtmlEditor = (props) => (
  <Editor title={'HTML'} mode="html" {...props} />
)

export const CssEditor = (props) => (
  <Editor title={'CSS'} mode="css" {...props} />
)

export const JavascriptEditor = (props) => (
  <Editor title={'JS'} mode="javascript" {...props} />
)
