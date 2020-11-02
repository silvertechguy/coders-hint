import SplitPane from 'react-split-pane'
import { CssEditor, HtmlEditor, JavascriptEditor } from '../components/Editors'

const Index = () => {
  return (
    <SplitPane split="horizontal" minSize={'50%'}>
      <SplitPane split="vertical" minSize={'33%'}>
        <HtmlEditor />
        <SplitPane split="vertical" minSize={'50%'}>
          <CssEditor />
          <JavascriptEditor />
        </SplitPane>
      </SplitPane>
      <div>Preview Page</div>
    </SplitPane>
  )
}

export default Index
