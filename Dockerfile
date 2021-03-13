FROM node:14-alpine

ENV NODE_ENV development

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 8000

CMD npm run dev