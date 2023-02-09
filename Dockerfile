FROM node:16

# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install && npm install typescript -g

COPY . .

RUN npm run build

CMD [ "node", "dist/src/index.js" ]