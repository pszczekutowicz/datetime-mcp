# Project datetime-mcp

A simple datetime server using Model Context Protocol (MCP).

## Features

- TBD
- MCP server with stdio transport
- TypeScript support

## Installation

1. **Build the Docker Image**
   
   Build the image using a tag (e.g., `datetime-mcp`).
   ```bash
    docker image build -t datetime-mcp .
   ```

2. **Configure Your MCP Client**
   ```json
   {
     "servers": {
       "datetime-server": {
         "type": "stdio",
         "command": "docker",
         "args": ["run", "--interactive", "--rm", "datetime-mcp"] 
       }
     },
     "inputs": []
   }
   ```
