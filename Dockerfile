# Use an official Node.js runtime as a base image
FROM node:16.20.2

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Expose the port your app runs on
EXPOSE 4000

# Define the command to run your application
CMD ["node", "src/routes/user-server.js"]

