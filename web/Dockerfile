FROM node:9.11.1-alpine

WORKDIR /web

COPY . .

RUN apk update && \
    apk add git && \
    npm install -g npm 