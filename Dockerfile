FROM node:10-alpine

WORKDIR /build

COPY . .

RUN npm install
RUN npm install -g nodemon

ENTRYPOINT ["/bin/sh", "entrypoint.sh"]
