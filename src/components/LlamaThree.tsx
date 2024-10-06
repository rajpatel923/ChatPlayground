import React, { useState } from 'react'
import LlmDashboads from './LlmDashboads'
import UserInputBar from './UserInputBar'
import { LLMS, ICONS, UserInput } from '@/lib/constants'
import { getLlamaResponse } from '@/api'
import { LlamaResponse } from '@/api/types'

const LlamaThree: React.FC = () => {
  const {llama} = LLMS
  const [llamaResponse, setLlamaResponse] = useState<LlamaResponse[]>([]);
  const [userInput, setUserInput] = useState<UserInput | null>(null);

  const handleUserInputMessage = async (messageText: string)=>{
    // Add user's message
    setUserInput({text: messageText});
    // Optionally, trigger API calls to get responses from backend
    const llamaRes = await getLlamaResponse(messageText).then((res) => res.response);
      setLlamaResponse((prev) => [...prev, { text: llamaRes }]);
  };

  return (
    <div className="flex h-full flex-col">
      {/* This will take up the remaining space above the UserInputBar */}
      <div className="flex-1 overflow-auto">
        <LlmDashboads 
          message={llamaResponse} 
          id={llama.value} 
          buttonIcon={ICONS.MetaLlamaIcon} 
          userInput={userInput?.text} 
          label={llama.label} 
          modelNumber={llama.LlamaModelNumber}
        />
      </div>

      {/* Horizontal line */}
      <hr />

      {/* The UserInputBar fixed at the bottom */}
      <div>
        <UserInputBar onSendMessage={handleUserInputMessage} />
      </div>
</div>

  )
}

export default LlamaThree