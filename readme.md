# Chatbot CLI

This is a simple command-line interface (CLI) chatbot that interacts with users using OpenAI's API. The bot engages in conversation, keeps a chat history, and provides responses based on user input.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Features](#features)
- [Dependencies](#dependencies)
- [Contributing](#contributing)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sahilgupta9891/CHATBOT.git
   cd chatbot
   ```

2. **Install the required dependencies:**

   Make sure you have Node.js installed. Then, run:

   ```bash
   npm install
   ```

## Usage

To run the chatbot, use the following command:

```bash
node index.js <username>
```

Replace `<username>` with the name you'd like to use during the session.

### Example

```bash
node index.js Alice
```

Once the chatbot starts, you can interact with it by typing messages.

## Configuration

This project requires an OpenAI API key. The key and the model name should be specified in a `.env` file in the root directory.
Copy the `.env.example` file into a new `.env` file and update the credentials there.

### Example `.env` file:

```
OPEN_API_KEY=your-openai-api-key
OPEN_API_MODEL=text-davinci-003
```

## Features

- **CLI Interface:** Interact with the chatbot directly from your terminal.
- **Chat History:** The bot keeps track of the conversation history.
- **Error Handling:** Graceful error handling for issues like invalid API responses.
- **Environment Configuration:** Easy configuration using `.env` file.

## Dependencies

- **dotenv:** For loading environment variables.
- **colors:** For colored output in the terminal.
- **readline-sync:** For synchronous command-line input.
- **OpenAI API:** To generate chatbot responses.

You can install these dependencies by running:

```bash
npm install
```

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request