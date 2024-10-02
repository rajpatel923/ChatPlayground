import { IoIosChatbubbles } from 'react-icons/io';
import { BsChatHeart } from 'react-icons/bs';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { VscRobot } from 'react-icons/vsc';
import { SiOpenai } from 'react-icons/si';
import { SiGooglegemini } from 'react-icons/si';
import { FaMeta } from 'react-icons/fa6';
import { GiPlagueDoctorProfile } from 'react-icons/gi';

export const ICONS = {
  ChatIcon: IoIosChatbubbles,
  ChatHeartIcon: BsChatHeart,
  DoucmentIcon: IoDocumentTextOutline,
  RobotIcon: VscRobot,
  OpenAIIcon: SiOpenai,
  GoogleGeminiIcon: SiGooglegemini,
  MetaLlamaIcon: FaMeta,
  ProfileIcon: GiPlagueDoctorProfile,
};

export const NavigationLinks = {
  playgroundButton: '/playground',
  documentEditorButton: '/document-editor',
  learningBuddy: '/learning-buddy',
  chatGPT: '/chatgpt',
  gemini: '/gemini',
  llama3: '/llama3',
  profile: '/profile',
};
