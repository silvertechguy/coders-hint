import React from 'react'

import styles from './editors.module.css'

const Editor = ({ title }) => {
  return (
    <div className={styles.editorContainer}>
      <div className={styles.editorTitle}>{title}</div>
    </div>
  )
}

export const HtmlEditor = () => {
  return <Editor title={'HTML'} />
}

export const CssEditor = () => {
  return <Editor title={'CSS'} />
}

export const JavascriptEditor = () => {
  return <Editor title={'Javascript'} />
}
