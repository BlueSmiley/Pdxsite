FROM node:current-alpine AS base
# Create app directory
WORKDIR /base
# Installing dependencies
COPY package*.json ./
RUN npm install
# Copying source files
COPY . .

# Building app
FROM base as build
WORKDIR /build
COPY --from=base /base ./
RUN npm run build

FROM node:current-alpine AS prod
WORKDIR /usr/src/app
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
RUN npm install next
# Running the app
CMD ["npm", "run", "start"]

FROM node:current-alpine AS dev
WORKDIR /usr/src/app
COPY --from=build /build ./
RUN npm install next
# Running the app
CMD ["npm", "run", "dev"]