FROM node:16-alpine

WORKDIR /usr/src/app/my-app

COPY package*.json ./

RUN npm install

RUN ls ./node_modules
RUN chown -R node:node ./node_modules
 
EXPOSE 3000

CMD ["npm", "start"]
