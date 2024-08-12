import OpenAI from 'openai';

export default class OpenAIClient {
  constructor(apiKey, model) {
    this.client = new OpenAI({
      apiKey: apiKey,
    });
    this.model = model;
  }

  async getChatCompletion(role, userInput) {
    const completion = await this.client.chat.completions.create({
      messages: [{ role: role, content: userInput }],
      model: this.model,
    });
    return completion.data.choices[0].message.content;
  }
}