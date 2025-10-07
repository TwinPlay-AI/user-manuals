FROM mcr.microsoft.com/devcontainers/javascript-node:22-bullseye

# Install dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json ./

RUN yarn install && \
    npm install -g rust-just

COPY . .

EXPOSE 3000

USER node

CMD ["yarn", "start"]
