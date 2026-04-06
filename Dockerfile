# syntax=docker/dockerfile:1.20
FROM oven/bun:1.3 AS build

WORKDIR /usr/src

COPY package.json bun.lock tsconfig.json ./

RUN bun install --production

FROM oven/bun:1.3-slim

WORKDIR /usr/app

COPY --from=build /usr/src/ ./
COPY . ./

CMD ["bun", "run", "src/main.ts"]
