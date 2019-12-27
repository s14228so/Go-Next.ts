
FROM node:10.16-alpine

WORKDIR /src

COPY . .

RUN rm -rf /src/node_modules
RUN rm -rf /src/package-lock.json

RUN npm install

CMD ["bash", "-c", "npm run dev"]
