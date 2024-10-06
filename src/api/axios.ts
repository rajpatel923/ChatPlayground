import axiosAPI from './axios.config';
import { ChatgptResponse, GeminiResponse, LlamaResponse } from './types';

export const getChatgptResponse = async (userInput: string): Promise<ChatgptResponse> => {
  const response = await axiosAPI
    .post<ChatgptResponse>(`/chatgpt`, { message: `${userInput}` })
    .then((res) => res.data);
  return response;
};

export const getGeminiResponse = async (userInput: string): Promise<GeminiResponse> => {
  const response = await axiosAPI.post<GeminiResponse>(`/gemini`, { message: `${userInput}` }).then((res) => res.data);
  return response;
};
export const getLlamaResponse = async (userInput: string): Promise<LlamaResponse> => {
  const response = await axiosAPI.post<LlamaResponse>(`/llma`, { message: `${userInput}` }).then((res) => res.data);
  return response;
};
