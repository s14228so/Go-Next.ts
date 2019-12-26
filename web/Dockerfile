FROM node:10.16-alpine

WORKDIR /web


COPY package*.json ./


RUN apk update && \
    apk add git && \
    npm install -g npm && \
    npm install

CMD ["npm", "run", "dev"]