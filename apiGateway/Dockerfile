FROM node:18-alpine3.19 as base

WORKDIR /home/plumbit/apiGateway

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# After RUN npm run build
RUN ls -la ./build

FROM base as production

WORKDIR /home/plumbit/apiGateway

COPY package*.json ./

COPY --from=base /home/plumbit/apiGateway/build ./build

RUN npm install --only=production

CMD ["node", "build/index.js"]