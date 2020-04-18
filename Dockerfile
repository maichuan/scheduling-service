FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 7777

CMD [ "yarn", "start" ]
