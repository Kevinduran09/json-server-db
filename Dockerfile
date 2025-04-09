FROM node:20

WORKDIR /app

# Copia los archivos
COPY package*.json ./
RUN npm install

# Copia el resto
COPY . .

# Expone el puerto
EXPOSE 3000

CMD ["npx", "json-server", "--watch", "db.json", "--host", "0.0.0.0"]
