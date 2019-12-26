FROM node:10.16-alpine

WORKDIR /web


COPY ./ts_next/package.json ./package.json



RUN apk update && \
    apk add git && \
    npm install -g yarn &&\
    yarn


CMD ["npm", "run", "dev"]