FROM golang:1.12.0-alpine


ENV GOPATH=/go
ENV GO111MODULE=on


RUN apk update \ 
    && apk add --no-cache git


WORKDIR /go/src/github.com/s14228so/todo/api
COPY . .

CMD ["go", "run", "main.go"]


