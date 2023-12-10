FROM "node:latest"

WORKDIR /app

COPY package*.json ./

RUN rm -rf node_modules
RUN npm i

CMD npm run dev
