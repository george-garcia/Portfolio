# ── Build stage ───────────────────────────────────────────────────────────────
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

# SES contact endpoint (API Gateway URL), inlined at build.
ARG VITE_CONTACT_ENDPOINT=
ENV VITE_CONTACT_ENDPOINT=$VITE_CONTACT_ENDPOINT
RUN npm run build

# ── Serve stage ───────────────────────────────────────────────────────────────
FROM nginx:1.27-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
