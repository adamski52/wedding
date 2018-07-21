FROM node:9.6.1

WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install
COPY . /app
RUN npm run build && rm -rf /app/src && rm -rf /app/public

EXPOSE 9000

CMD ["npm", "run", "serve"]