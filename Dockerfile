FROM node:10-alpine

RUN mkdir build
WORKDIR /build

COPY ./entrypoint.sh /build/entrypoint.sh
COPY ./package-lock.json /build/package-lock.json
COPY ./package.json /build/package.json

COPY ./app.js /build/app.js
COPY ./auth.js /build/auth.js
COPY ./models/ /build/models

RUN npm install

ENTRYPOINT ["/bin/sh", "entrypoint.sh"]
