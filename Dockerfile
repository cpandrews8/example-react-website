FROM node:latest

WORKDIR /chrisandrews

ADD . /chrisandrews

RUN npm install

EXPOSE 3000

CMD npm run serve