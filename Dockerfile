FROM node:10.11
RUN mkdir webpack
COPY . ./webpack
WORKDIR ./webpack
RUN npm install -g yarn
RUN yarn install
EXPOSE 8080
CMD yarn start
