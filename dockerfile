# Começamos de uma imagem já existente
FROM node:10

# Definimos a pasta e copiamos todos os arquivos
WORKDIR /usr/app
COPY . ./

# Instalamos as dependências
RUN yarn

# Expomos a porta para os services
EXPOSE 3333

# Executamos a aplicação 🧡
CMD yarn dev:server
