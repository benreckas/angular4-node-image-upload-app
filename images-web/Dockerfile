FROM node:latest

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

ADD package.json /usr/src/app/package.json
RUN npm install -g --unsafe-perm @angular/cli
RUN npm i -g @angular/cli
RUN npm i

CMD ["npm", "start"]
