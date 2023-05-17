FROM node:alpine
WORKDIR '/app'

# Copy package.json file to the container
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
