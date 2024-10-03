import { useState } from 'react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import UserInputBar from './UserInputBar'
import LlmDashboads from './LlmDashboads'
import {LLMS} from '../lib/constants'
import {ICONS} from '../lib/constants'

interface Message {
  text: string;
  isTyping?: boolean;
}
interface UserInput{
  text: string
}



const Playground = () => {
  const {chatgpt, gemini, llama} = LLMS

  const [userInput, setUserInput] = useState<UserInput | null>(null);
  //saving the messages of the chatgpt, gemini and Llama
  const [chatGPTResponse, setChatGPTResponse] = useState<Message[]>([]);
  const [geminiResponse, setGeminiResponse] = useState<Message[]>([]);
  const [llamaResponse, setLlamaResponse] = useState<Message[]>([]);

  const fetchResponsesFromBackend = async (message: string) => {
    try {
      // Fetch response from ChatGPT API
      const chatGPTRes = await fetch(`/api/chatgpt`, {
        method: 'POST',
        body: JSON.stringify({ message }),
      }).then((res) => res.json());
      setChatGPTResponse((prev) => [...prev, { text: chatGPTRes.message }]);

      // Fetch response from Gemini
      const geminiRes = await fetch(`/api/gemini`, {
        method: 'POST',
        body: JSON.stringify({ message }),
      }).then((res) => res.json());
      setGeminiResponse((prev) => [...prev, { text: geminiRes.message }]);

      // Fetch response from Llama
      const llamaRes = await fetch(`/api/llama`, {
        method: 'POST',
        body: JSON.stringify({ message }),
      }).then((res) => res.json());
      setLlamaResponse((prev) => [...prev, { text: llamaRes.message }]);
    } catch (error) {
      console.error("Error fetching responses:", error);
    }
  };
  

  
  


  const handleUserInputMessage = (messageText: string) => {
    // Add user's message
    setUserInput({text: messageText});
    // Optionally, trigger API calls to get responses from backend
    fetchResponsesFromBackend(messageText);
  };



  return (
    <div className='h-full w-full max-h-[90%]'>
      <ResizablePanelGroup direction="vertical" className='w-full'>
        <ResizablePanel defaultValue={50} className=''><LlmDashboads message={chatGPTResponse}  buttonIcon={ICONS.OpenAIIcon} userInput={userInput?.text} id={chatgpt.value} label={chatgpt.label} modelNumber={chatgpt.chatgptModelNumber} /></ResizablePanel>
        <ResizableHandle/>
        <ResizablePanel defaultValue={50}>
          <ResizablePanelGroup  direction='horizontal'>
            <ResizablePanel className='h-full'><LlmDashboads message={geminiResponse} id={gemini.value} buttonIcon={ICONS.GoogleGeminiIcon} userInput={userInput?.text} label={gemini.label} modelNumber={gemini.geminiModelNumber} /></ResizablePanel>
            <ResizableHandle/>
            <ResizablePanel className=''><LlmDashboads message={llamaResponse} id={llama.value} buttonIcon={ICONS.MetaLlamaIcon} userInput={userInput?.text} label={llama.label} modelNumber={llama.LlamaModelNumber} /></ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
      <hr/>
      <UserInputBar onSendMessage={handleUserInputMessage}/>
    </div>
  )
}

export default Playground