# Usa una imagen oficial de Node.js
FROM node:20

# Crea y define el directorio de trabajo
WORKDIR /app

# Copia los archivos de tu proyecto (asegúrate de tener db.json en tu proyecto)
COPY . .

# Instala json-server
RUN npm install json-server

# Expón el puerto en el que json-server escuchará
EXPOSE 3000

# Comando para ejecutar json-server
CMD ["node", "server.js"]
