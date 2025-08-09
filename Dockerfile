# Stage 1 - Build the React app
FROM node:22 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2 - Serve with Caddy
FROM caddy:2
COPY --from=build /app/build /usr/share/caddy
