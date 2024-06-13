FROM node:18-alpine3.19

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=4003

EXPOSE 4003

CMD ["npm", "start"]