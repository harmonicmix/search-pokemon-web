FROM node:14

WORKDIR /app 

COPY package.json yarn.lock ./
RUN yarn

COPY next.config.js ./next.config.js

COPY components ./components
COPY pages ./pages
COPY public ./public
COPY styles ./styles
COPY types ./types

ENV API_ENDPOINT=http://192.168.50.113:5558
ENV NEXT_PUBLIC_API_ENDPOINT=http://192.168.50.113:5558


CMD [ "yarn","dev" ]

