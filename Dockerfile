FROM node:10-alpine

RUN mkdir build
WORKDIR /build

COPY ./package-lock.json /build/package-lock.json
COPY ./package.json /build/package.json
COPY ./app.js /build/app.js
COPY ./entrypoint.sh /build/entrypoint.sh

RUN npm install

ENTRYPOINT ["/bin/sh", "entrypoint.sh"]
