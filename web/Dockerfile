
FROM node:10.16-alpine

WORKDIR /web


COPY package*.json ./

RUN apk update && \
    npm install -g npm && \
    npm install

# ENV HOST 0.0.0.0
# EXPOSE 3000

CMD ["npm", "run", "dev"]
