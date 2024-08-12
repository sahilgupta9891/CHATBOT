import colors from 'colors';
import readlineSync from 'readline-sync';

export default class CLIManager {
    constructor(user) {
        this.user = user;
        this.chatHistory = [];
    }

    printBotMessage(message) {
        console.log(colors.green(`Bot: ${message}`));
    }

    printErrorMessage(error) {
        if (error.response) {
            console.error(colors.red(`Error: ${error.response.data.error.code}`));
            console.error(colors.red(`Error: ${error.response.data.error.message}`));
            return;
        }
        console.error(colors.red(`Error: ${error}`));
    }

    welcomeUser() {
        this.printBotMessage(`Welcome to the Chatbot Program! ${this.user}`);
        this.printBotMessage(`You can start chatting with the bot.`);
    }

    getChatHistory() {
        return this.chatHistory;
    }

    getUserInput() {
        return readlineSync.question(colors.blue(`${this.user}: `));
    }

    updateChatHistory(role, content) {
        this.chatHistory.push([role, content]);
    }
}