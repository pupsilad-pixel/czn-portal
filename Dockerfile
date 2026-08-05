FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund --ignore-scripts

COPY nuxt.config.ts tsconfig.json app.vue ./
COPY assets assets
COPY components components
COPY layouts layouts
COPY pages pages
COPY public public
COPY shared shared
RUN npm run generate

# Runtime stage without nginx — using Node http-server
FROM node:20-alpine AS runtime
WORKDIR /app

RUN npm install -g http-server@14 --no-audit --no-fund

COPY --from=build /app/.output/public /app/public

ENV PORT=80
EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost:80/ || exit 1

CMD ["http-server", "/app/public", "-p", "80", "-a", "0.0.0.0", "-s", "--proxy", "http://localhost:80?"]
