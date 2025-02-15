# Version: 1.0
FROM node:18 AS build

# Create app directory on the container
WORKDIR /usr/src/app

# Install app dependencies from package.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Intialize nginx web server
FROM nginx:alpine

# Copy the build output from the build to the nginx web server
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Expose the port 80
EXPOSE 80




