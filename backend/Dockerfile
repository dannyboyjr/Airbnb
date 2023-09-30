# Pull the Node.js Docker image
FROM node:16-alpine

# Expose the port the app runs in
EXPOSE 8080

# Define the working directory in Docker
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy app source code
COPY . .

# Copy startup script
COPY startup.sh /app/startup.sh

# Set environment variables
ENV PORT=8080

# Make the startup script executable and run it
CMD ["sh", "/app/startup.sh"]
