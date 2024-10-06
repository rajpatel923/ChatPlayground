import React from 'react'
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
//   FormMessage, this is use for error prompts
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"

const FormSchema = z.object({
    userInput: z
      .string()
      .max(500, {
        message: "Maximun 500 character can only be sent.",
      }),
  })

interface TextMessageProps {
    onSendMessage: (message: string) => void;
  }


const TextMessage: React.FC<TextMessageProps> = ({onSendMessage}) => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
      })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)
        if (data.userInput.trim() === '') return;
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
          ),
        })
        onSendMessage(data.userInput);
        form.reset({
            userInput: ""
        })
      }

  return (
    <Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className='w-full h-full flex flex-row items-center px-4'>
    <div className="flex-grow">
      <FormField
        control={form.control}
        name="userInput"
        render={({ field }) => (
          <FormItem>
            <FormControl>  
              <Textarea
                placeholder="Welcome to chat-playground, how can I help you today?"
                className="resize-none w-full"
                {...field}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
    <Button type="submit" className="ml-2">Submit</Button>
  </form>
</Form>

  ) 
}

export default TextMessage