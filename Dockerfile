FROM node:current-alpine3.18
ENV LANG=C.UTF-8
ENV TZ=Asia/Tokyo
WORKDIR /usr/src/app
USER node