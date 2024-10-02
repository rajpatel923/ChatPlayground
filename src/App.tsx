import './App.css'
import Chatgpt from './components/Chatgpt'
import DocumentEditor from './components/DocumentEditor'
import Gemini from './components/Gemini'
import LearningBuddy from './components/LearningBuddy'
import LlamaThree from './components/LlamaThree'
import Playground from './components/playground'
import Profile from './components/Profile'
import { NavigationLinks } from './lib/constants'
import HomePage from './pages/HomePage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App:React.FC = ()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<HomePage/>}>
          <Route path='' element={<Playground/>}/>
          <Route path={NavigationLinks.playgroundButton} element={<Playground/>}/>
          <Route path={NavigationLinks.documentEditorButton} element={<DocumentEditor/>}/>
          <Route path={NavigationLinks.learningBuddy} element={<LearningBuddy/>}/>
          <Route path={NavigationLinks.chatGPT} element={<Chatgpt/>}/>
          <Route path={NavigationLinks.gemini} element={<Gemini/>}/>
          <Route path={NavigationLinks.llama3} element={<LlamaThree/>}/>
          <Route path={NavigationLinks.profile} element={<Profile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
