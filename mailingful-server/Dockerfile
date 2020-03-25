FROM alpine:latest

RUN apk update && apk add ca-certificates && rm -rf /var/cache/apk/*
RUN mkdir /app

ADD main /app/main
WORKDIR /app

EXPOSE 9876

ENTRYPOINT [ "/app/main" ]
