# Use the official Node.js 14 image as the base
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json /app/

# Install the app dependencies
RUN npm install

# Copy the app files to the container
COPY . .

EXPOSE 8080

# Start the app when the container is run
CMD ["node", "app.js"]
