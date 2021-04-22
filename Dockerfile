FROM node:14

COPY package.json package-lock.json /app/

WORKDIR /app

RUN npm install

ADD . /app

CMD ["npm", "start"]