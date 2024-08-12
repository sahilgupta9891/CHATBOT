import dotenv from 'dotenv';
import CLIManager from './src/CLIManager.js';
import OpenAIClient from './src/OpenAIClient.js';

dotenv.config();

// Chatbot function
const Chatbot = async () => {

  const user = process.argv[2];
    if (!user) {
        user = 'You';
    }
  // Getting CLI Manager
  const cliManager = new CLIManager(user);
  
  // Getting OpenAI Client
  const openAIClient = new OpenAIClient(process.env.OPEN_API_KEY, process.env.OPEN_API_MODEL);
  
  cliManager.welcomeUser();

  while (true) {
    const userInput = cliManager.getUserInput();
    try {
      const messages = cliManager.getChatHistory().map(([role, content]) => ({
        role,
        content,
      }));
      messages.push({ role: 'user', content: userInput });

      const completion = await openAIClient.getChatCompletion('user', userInput);
      cliManager.printBotMessage(completion);

      cliManager.updateChatHistory('user', userInput);
      cliManager.updateChatHistory('bot', completion);
    } catch (error) {
      cliManager.printErrorMessage(error);
      return;
    }
  }
};

Chatbot();