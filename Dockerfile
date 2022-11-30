FROM node:latest as build

WORKDIR /ProjectTestKong/Menu/Menu
COPY . .

RUN npm  install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist/Menu /usr/share/nginx/html