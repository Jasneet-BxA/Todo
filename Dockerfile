FROM node:20

ENV NODE_ENV=development

WORKDIR /react-app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
