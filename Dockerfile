FROM node:16.0.0

RUN mkdir -p /mevn_crud
WORKDIR /mevn_crud

COPY package*.json /mevn_crud
RUN npm install

COPY . /mevn_crud

ENV HOST 0.0.0.0
EXPOSE 8000

CMD npm run start