FROM node:10
WORKDIR /usr/src/app
COPY ./core/package.json ./core/package-lock.json ./
RUN npm install --production
COPY ./core ./
CMD node app.js
