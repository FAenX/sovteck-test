FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./


RUN npm install

COPY . .

RUN npm run build

ENV HOST=0.0.0.0 PORT=3000

EXPOSE ${PORT}



CMD ["node", "app.js"]