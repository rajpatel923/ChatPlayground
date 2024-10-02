import NavButton from "./NavButton"
import {ICONS, NavigationLinks} from "../lib/constants"
import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <div className=" flex-item-center h-full gap-5 mx-3">
      <NavLink to={NavigationLinks.playgroundButton}>
        <h1 className=" mt-6 w-fit p-4 flex-item-center flex-row text-3xl button-border "><ICONS.ChatIcon className=" text-blue-600"/>ChatPlaygroud.ai</h1>
      </NavLink>
      <div className=" h-full w-full">
        {/* AI Tools section */}
        <div className="flex-col gap-4">
          <h1 className="mb-4 text-hiddenTextColor text-md font-semibold">AI Tools</h1>
          <div className="flex flex-col gap-4">
            <NavButton buttonIcon={ICONS.ChatHeartIcon} buttonTitle="Playground" to={NavigationLinks.playgroundButton} />
            <NavButton buttonIcon={ICONS.DoucmentIcon} buttonTitle="Document Editor" to={NavigationLinks.documentEditorButton}/>
            <NavButton buttonIcon={ICONS.RobotIcon} buttonTitle="Learning Buddy" to={NavigationLinks.learningBuddy}/>
          </div> 
        </div>

        {/* GPTs models Sections */}
        <div className="flex-col gap-4 mt-8">
          <h1 className="mb-4 text-hiddenTextColor text-md font-semibold">AI Models</h1>
          <div className="flex flex-col gap-4">
            <NavButton buttonIcon={ICONS.OpenAIIcon} buttonTitle="Chat GPT" to={NavigationLinks.chatGPT} />
            <NavButton buttonIcon={ICONS.GoogleGeminiIcon} buttonTitle="Gemini" to={NavigationLinks.gemini}/>
            <NavButton buttonIcon={ICONS.MetaLlamaIcon} buttonTitle="Llama 3" to={NavigationLinks.llama3}/>
          </div> 
        </div>

        {/* Basic / Day to Day Models */}
        <div className="flex-col gap-4 mt-8">
          <h1 className="mb-4 text-hiddenTextColor text-md font-semibold">Daily Usage</h1>
          <div className="flex flex-col gap-4">
            <NavButton buttonIcon={ICONS.OpenAIIcon} buttonTitle="Chat GPT" to={NavigationLinks.chatGPT} />
            <NavButton buttonIcon={ICONS.GoogleGeminiIcon} buttonTitle="Gemini" to={NavigationLinks.gemini}/>
          </div> 
        </div>

      </div>
      <div className="flex flex-row w-full mb-4">
        <NavLink to={NavigationLinks.profile} className="w-full">
          <button className='flex gap-3 bg-transparent text-hiddenTextColor px-4 py-2 mx-2  button-border'>
          <ICONS.ProfileIcon className="h-6 w-6" /> {/* Correct usage of the buttonIcon */}
          <h3 className="text-lg font-light">profile</h3>
          </button>
        </NavLink>
    </div>
    </div>
  )
}

export default NavBar