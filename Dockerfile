# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application source code
COPY . .

# Expose the port
EXPOSE 5000

# Start the app (dotenv will read .env if mounted, otherwise use injected envs)
CMD ["node", "src/index.js"]
