# Solvestor 🤖💰

A powerful AI-powered investment agent for Solana blockchain, built with LangChain and Next.js. Solvestor helps you analyze, manage, and execute Solana blockchain operations through natural language interactions.

## Features

- 🤖 **AI-Powered Interactions**
  - Natural language processing for blockchain commands
  - Intelligent market analysis and decision making
  - Context-aware conversation memory
  - Real-time streaming responses

- 💰 **Solana Operations**
  - Wallet management and transaction handling
  - Token transfers and swaps
  - NFT operations and analysis
  - Smart contract interactions

- 🛠 **Developer-Friendly**
  - Built on LangChain.js and Next.js
  - Streaming responses for real-time feedback
  - TypeScript support
  - Extensive error handling

## Installation

```bash
# Install dependencies
npm install
# or
pnpm install
```

## Quick Start

1. Set up your environment variables in `.env.local`:
```env
OPENAI_API_KEY=your_openai_api_key
RPC_URL=your_solana_rpc_url
SOLANA_PRIVATE_KEY=your_wallet_private_key_base58
```

2. Run the development server:
```bash
npm run dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to start interacting with Solvestor.

## Usage

### Basic Interaction

```typescript
import { SolanaAgentKit } from "solana-agent-kit";

// Initialize the agent
const agent = new SolanaAgentKit(
  "your-wallet-private-key-as-base58",
  "https://api.mainnet-beta.solana.com"
);

// Start interacting with natural language
await agent.chat("What's the current SOL price?");
```

### Advanced Features

- **Autonomous Mode**: Let Solvestor monitor and execute trades based on predefined strategies
- **Market Analysis**: Get detailed insights about tokens and market trends
- **Portfolio Management**: Track and manage your Solana assets efficiently

## Architecture

Solvestor is built on top of several powerful technologies:

- **LangChain.js**: For AI model interactions and workflow management
- **Next.js**: For the web interface and API routes
- **Solana Web3.js**: For blockchain interactions
- **OpenAI**: For natural language processing

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Format code
npm run format
```

## System Requirements

- Node.js >= 18
- NPM or pnpm package manager
- OpenAI API key
- Solana wallet with SOL for transactions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Security

- Never share your private keys or API keys
- Always verify transactions before signing
- Use testnet for development and testing
- Review permissions granted to the agent

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and discussions:
- Open an issue in the GitHub repository
- Join our community discussions
- Check out the [documentation](https://docs.yourdomain.com)

## Acknowledgments

- Built with [LangChain](https://langchain.com)
- Powered by [OpenAI](https://openai.com)
- Solana blockchain integration via [Solana Web3.js](https://solana-labs.github.io/solana-web3.js)
