FROM node:15.3.0-alpine3.10 AS builder
WORKDIR /usr/src/app
ENV NODE_ENV=production
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
RUN npm install react-scripts@4.0.1 -g

ARG REACT_APP_TOP_ALBUMS_URL
ARG REACT_APP_TOP_SONGS_URL
ARG REACT_APP_LIMIT

ENV REACT_APP_TOP_ALBUMS_URL $REACT_APP_TOP_ALBUMS_URL
ENV REACT_APP_TOP_SONGS_URL $REACT_APP_TOP_SONGS_URL
ENV REACT_APP_LIMIT $REACT_APP_LIMIT

# add app
COPY . ./
#build for production
RUN npm run-script build
## remove packages of devDependencies
RUN npm prune --production


FROM nginx:stable-alpine
COPY --from=builder ./usr/src/app/build ./usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]