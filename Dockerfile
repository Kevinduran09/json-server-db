FROM node:20

WORKDIR /app

# Copia los archivos
COPY package*.json ./
RUN npm install

# Copia el resto
COPY . .

# Expone el puerto
EXPOSE 3000

CMD ["node", "server.js"]
