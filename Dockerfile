FROM node:alpine as base
WORKDIR /usr/src/app
COPY ./src/package*.json ./
ENV DEBUG=nodejs-docker-express:*

FROM base as production
ENV NODE_ENV=production
RUN npm ci
CMD ["node", "app.js"]

FROM base as dev
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
CMD ["nodemon", "app.js"]


