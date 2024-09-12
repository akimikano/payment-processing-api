FROM node:22.1.0
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm i
COPY . /app
CMD ["node","app.js"]