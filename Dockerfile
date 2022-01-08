FROM node:16-alpine

# Install build packages and npm global packages
RUN apk update && \
    apk add --no-cache make gcc g++ python3 certbot git && \
    npm install -g cross-env webpack webpack-cli pm2 rimraf

# Copy files
COPY . .

# Run npm install for build
RUN npm install && \
    npm rebuild node-sass

# Build
RUN npm run build

# Build User Interface
RUN git clone https://github.com/WebDollar/Node-WebDollar && \
    cd Node-WebDollar && \
    git checkout master && \
    npm install -g node-gyp && npm install pm2 -g --unsafe-perm && \
    npm install && \
    npm run build_browser && \
    npm run build_browser_user_interface && \
    rm -f /public/WebDollar-dist/WebDollar-Protocol-bundle.js && \
    rm -f /public/WebDollar-dist/WebDollar-Protocol-bundle.js.map && \
    cp /vue-Frontend/public/WebDollar-dist/WebDollar-Protocol-bundle.js /public/WebDollar-dist/ && \
    cp /vue-Frontend/public/WebDollar-dist/WebDollar-Protocol-bundle.js.map /public/WebDollar-dist/

# Clean Everything
RUN apk del make gcc g++ python3 && \
	rm -rf /tmp/* /var/cache/apk/* && \
	npm cache clean --force

# Ports
EXPOSE 80
EXPOSE 443

CMD ["npm","start"]
