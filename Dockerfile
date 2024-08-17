# Etapa 1: Construção
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod

# Etapa 2: Servir a aplicação
FROM nginx:alpine

COPY --from=build /app/dist usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
