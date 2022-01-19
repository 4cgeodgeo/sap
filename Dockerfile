FROM node:current-slim

WORKDIR /app

COPY . .

RUN npm run install-all
RUN npm run build

EXPOSE 3013

CMD ["node", "server/src/index.js"]

