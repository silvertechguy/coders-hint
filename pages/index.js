import React, { useState } from 'react'
import SplitPane from 'react-split-pane'

import { CssEditor, HtmlEditor, JavascriptEditor } from '../components/editors'

const Index = () => {
  // Hold the height value in the state, begin with the height of 485px
  const [heightValue, setHeightValue] = useState('485px')

  return (
    <SplitPane
      split="horizontal"
      minSize={'50%'}
      // We use the onDragFinished event of SplitPane to update the height value in the state. We remove 40px to compensate the editor's titles
      onDragFinished={(height) => {
        setHeightValue(`${height - 40}px`)
      }}
    >
      <SplitPane split="vertical" minSize={'33%'}>
        <HtmlEditor height={heightValue} />
        <SplitPane split="vertical" minSize={'50%'}>
          <CssEditor height={heightValue} />
          <JavascriptEditor height={heightValue} />
        </SplitPane>
      </SplitPane>
      <div>Preview Page</div>
    </SplitPane>
  )
}

export default Index
