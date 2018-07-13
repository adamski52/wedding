FROM node:9.6.1

WORKDIR /app

COPY . /app
RUN npm install
RUN npm run build

EXPOSE 9000

CMD ["npm", "run", "serve"]