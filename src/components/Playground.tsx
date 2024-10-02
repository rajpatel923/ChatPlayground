import React from 'react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import UserInputBar from './UserInputBar'
import Chatgpt from './Chatgpt'
import Gemini from './Gemini'
import LlamaThree from './LlamaThree'

const Playground = () => {
  return (
    <div className='h-full w-full max-h-[90%] mt-6'>
      <ResizablePanelGroup direction="vertical" className='w-full'>
        <ResizablePanel defaultValue={50}><Chatgpt/></ResizablePanel>
        <ResizableHandle/>
        <ResizablePanel defaultValue={50}>
          <ResizablePanelGroup  direction='horizontal'>
            <ResizablePanel><Gemini/></ResizablePanel>
            <ResizableHandle/>
            <ResizablePanel><LlamaThree/></ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
      <hr/>
      <UserInputBar/>
    </div>
  )
}

export default Playground