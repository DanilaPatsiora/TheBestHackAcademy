FROM node:10.11

COPY . .
RUN npm install -g yarn
RUN yarn install

CMD yarn start