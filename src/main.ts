import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js"

import { format } from "date-fns";

const server = new McpServer({
  name: "datetime-mcp",
  version: "1.0.0"
});

server.registerTool("get-time",
  {
    title: "Get current time",
    description: "Returns the current time in ISO 8601 format",
    inputSchema: {}
  },
  async () => {
    const result = format(new Date(), "HH:mm:ss")
    return {
      content: [{ type: "text", text: String(result) }]
    }
  }
);

server.registerTool("get-date",
  {
    title: "Get current date",
    description: "Returns the current date in ISO 8601 format",
    inputSchema: {}
  },
  async () => {
    const result = format(new Date(), "yyyy-MM-dd")
    return {
      content: [{ type: "text", text: String(result) }]
    }
  }
);

server.registerTool("get-datetime",
  {
    title: "Get current date and time",
    description: "Returns the current date and time in ISO 8601 format",
    inputSchema: {}
  },
  async () => {
    const result = format(new Date(), "yyyy-MM-dd HH:mm:ss")
    return {
      content: [{ type: "text", text: String(result) }]
    }
  }
);

server.registerTool("get-timezone",
  {
    title: "Get current timezone",
    description: "Returns the current timezone in ISO 8601 format",
    inputSchema: {}
  },
  async () => {
    const result = Intl.DateTimeFormat().resolvedOptions().timeZone
    return {
      content: [{ type: "text", text: String(result) }]
    }
  }
);

const shutdown = async () => {
  await server.close()
  process.exit(0)
}
process.on("SIGINT", shutdown)
process.on("SIGTERM", shutdown)

const transport = new StdioServerTransport()
await server.connect(transport)
