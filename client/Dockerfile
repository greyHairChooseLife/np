# Stage 1: Build the application
FROM "node:latest" as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: Deploy with built only
FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html
CMD nginx -g daemon off;
