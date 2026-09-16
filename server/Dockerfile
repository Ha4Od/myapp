FROM node:20-alpine AS runner
WORKDIR /usr/src/app
ADD package.json package.json
RUN npm intall
ADD . .
RUN npm run build
RUN npm prune --production
CMD ["node", "./server/dist/main.js"]