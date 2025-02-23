# Use Node.js 20 as the base image
FROM node:20

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json before installing dependencies
COPY package.json package-lock.json ./

# Install dependencies (prefer npm ci if package-lock.json exists)
RUN npm ci

# Copy the rest of the app files
COPY . .

# Expose port 3000 (if your app runs on this port)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
