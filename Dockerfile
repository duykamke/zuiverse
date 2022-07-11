FROM node:16-alpine as setup
RUN npm install -g pnpm

FROM setup as deps
WORKDIR /app
COPY package.json ./
COPY pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM setup AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

FROM ubuntu:22.04
WORKDIR /bun

RUN apt-get update
RUN apt-get install curl unzip -y
RUN curl --fail --location --progress-bar --output "/bun/bun.zip" "https://github.com/Jarred-Sumner/bun/releases/download/bun-v0.1.2/bun-linux-x64.zip"
RUN unzip -d /bun -q -o "/bun/bun.zip"
RUN mv /bun/bun-linux-x64/bun /usr/local/bin/bun
RUN chmod 777 /usr/local/bin/bun

WORKDIR /app
ENV NODE_ENV production

RUN addgroup --gid 101 --system appuser && adduser --uid 101 --system appuser
RUN chown -R 101:101 /app && chmod -R g+w /app

COPY --from=builder --chown=appuser /app/build ./

USER appuser

EXPOSE 3000

ENV PORT 3000

CMD ["bun", "run", "start"]