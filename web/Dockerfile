
FROM node:10.16-alpine

WORKDIR /src


RUN npm install -g yarn

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . .

CMD ["yarn", "dev"]
