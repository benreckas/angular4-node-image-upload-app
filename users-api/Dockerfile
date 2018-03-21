# Build new node contaier using latest version
FROM node:latest

# Set working directory within container
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Add /usr/src/app/node_modules/.bin to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# Install and cache app dependencies
ADD package.json /usr/src/app/package.json
RUN npm install

# Start the app
CMD ["npm", "start"]