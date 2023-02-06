FROM node:10.13.0-alpine

COPY . /app/

RUN cd /app && npm install

EXPOSE 3000

WORKDIR /app

CMD ["npm", "start"]