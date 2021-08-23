# Build stage
FROM node:14-alpine AS build
WORKDIR /app

COPY . .

RUN npm i
RUN npm run build

# Application binary
FROM node:14-alpine
WORKDIR /usr/src/app

COPY package*.json .

RUN npm i --only=production
RUN npm i -g serve
COPY --from=build /app/dist ./dist

RUN addgroup -g 1001 -S appuser
RUN adduser -u 1001 -S appuser -G appuser
USER appuser

EXPOSE 3000

CMD [ "serve", "-s", "-l", "3000", "dist" ]
