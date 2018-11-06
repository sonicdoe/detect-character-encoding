FROM ubuntu:16.04

RUN apt-get update && apt-get install -y \
  curl \
  gnupg \
&& curl -sL https://deb.nodesource.com/setup_8.x | bash - \
&& { \
      echo 'Package: nodejs'; \
      echo 'Pin: origin deb.nodesource.com'; \
      echo 'Pin-Priority: 600'; \
  } > /etc/apt/preferences.d/nodesource \
&& apt-get install -y \
  nodejs \
  build-essential \
&& rm -rf /var/lib/apt/lists/*
RUN npm install --global node-gyp && npm cache clean --force

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install && npm cache clean --force
COPY . .
RUN node-gyp rebuild

CMD ["npm", "test"]
