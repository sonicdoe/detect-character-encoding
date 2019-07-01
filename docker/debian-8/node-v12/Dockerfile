FROM node:10-jessie

RUN npm install --global node-gyp && npm cache clean --force

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install && npm cache clean --force
COPY . .
RUN node-gyp rebuild

CMD ["npm", "test"]
