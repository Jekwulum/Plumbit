FROM node:18-alpine3.19

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=4001

EXPOSE 4001

CMD ["npm", "start"]