# Set base image to Node.js v18
FROM node:18

# Set working directory inside the container
WORKDIR /usr/src/nodejs

# Copy package.json and package-lock.json first (ensures layer caching)
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application files
COPY . .

# Expose port 5001 for the server
EXPOSE 5001

# Start the application
CMD ["npm", "start"]