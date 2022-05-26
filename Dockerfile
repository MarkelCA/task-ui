FROM node:16-alpine

WORKDIR /usr/src/app/task-ui

COPY package*.json ./

RUN npm install

RUN chown node:node ./node_modules
 
EXPOSE 3000

CMD ["npm", "start"]
