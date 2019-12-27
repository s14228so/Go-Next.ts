FROM golang:1.12.0-alpine


ENV GO111MODULE=on
WORKDIR $GOPATH/src/github.com/s14228so/todo/api


WORKDIR /go/src/github.com/s14228so/todo/api
ADD . /go/src/github.com/s14228so/todo/api

RUN apk update \ 
    && apk add --no-cache git


COPY go.mod go.sum ./
# #システムの方は共有マウントしてないのでgo mod downloadし直す
RUN go mod download



