FROM node
WORKDIR /app
COPY . /app
RUN npm install
EXPOSE 3000
CMD npx nodemon --watch 'src/**/*.ts' --exec ts-node src/server.ts