import React from 'react'
import TextMessage from './TextMessage'

interface UserInputBarProps {
  onSendMessage: (message: string) => void;
}
const UserInputBar: React.FC<UserInputBarProps> = ({onSendMessage}) => {
  return (
    <div className='h-12 mx-10 mt-4'>
        <TextMessage onSendMessage={onSendMessage}/>
    </div>
  )
}

export default UserInputBar