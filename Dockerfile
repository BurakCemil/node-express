FROM node:10-alpine

RUN mkdir build
WORKDIR /build

COPY ./entrypoint.sh ./build/entrypoint.sh

RUN npm install
RUN npm install -g nodemon

ENTRYPOINT ["/bin/sh", "entrypoint.sh"]
