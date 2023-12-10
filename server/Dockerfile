# Stage 1: Build the application
FROM "node:latest" as build
WORKDIR /app
COPY . .
RUN npm install
RUN npx tsc --outDir "./dist"

# Stage 2: Deploy with necessary things
FROM "node:latest"
WORKDIR /app
COPY package*.json ./
COPY --from=build /app/dist .
RUN npm ci --omit=dev
CMD node ./index.js
