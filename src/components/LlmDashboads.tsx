import React, { useRef } from "react"
import { Badge } from "./ui/badge"
import { IconType } from "react-icons";
import TypingMessage from "./TypeingMessage";

interface LlmDashboadsProps {
    id:string | undefined,
    modelNumber: string | undefined,
    label: string,
    buttonIcon: IconType,
    userInput: string | undefined,
    message: Messages[] | undefined,
}

interface Messages{
   text: string;
    isTyping?: boolean;
}



const LlmDashboads: React.FC<LlmDashboadsProps> = ({buttonIcon: ButtonIcon, id, modelNumber, label, userInput, message}) => {
    
    const messagesEndRef = useRef<HTMLDivElement | null>(null);
    
    // const scrollToBottom = () => {
    //   messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    // };
  
    // useEffect(() => {
    //   scrollToBottom();
    // }, [messages]);
    
  return (
    <div className=" mt-4 flex flex-col gap-4 mx-6 h-full">
        <Badge className="px-2 py-1 fle w-fit gap-2">
            <ButtonIcon className="h-4 w-4"/>
            <h3 className="text-sm font-semibold">{label}</h3>
        </Badge>
        <div className="h-full max-h-fit mx-4 button-border border overflow-y-auto">
                    {/* User input */}
                    <div className="w-full bg-lightBgColor button-border rounded-b-none px-4 py-6">
                        <h1>User</h1>
                        <p>{userInput}</p>
                    </div>
                    {/* llms response */}
                    <div className=" h-full max-h-fit">
                        <h1 className="font-bold text-xl text-hiddenTextColor ml-6 mt-4">{label}<span> </span>:</h1>
                        {message?.map((msg, index) =>
                        (
                            <TypingMessage key={index} fullText={msg.text} />
                        ))}    
                        <div ref={messagesEndRef} />                    
                    </div>
        </div> 
    </div>
  )
}

export default LlmDashboads