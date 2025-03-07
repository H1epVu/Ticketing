FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm install --cache /tmp/npm-cache --omit=dev

COPY . .

CMD ["npm", "start"]
