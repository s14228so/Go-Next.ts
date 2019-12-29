
FROM node:10.16-alpine

WORKDIR /src

COPY . .

RUN  rm -rf /src/node_modules \
    && rm -rf /src/package-lock.json \
    && yarn

CMD ["yarn", "dev"]
