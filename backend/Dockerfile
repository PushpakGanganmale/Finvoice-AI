# 1. Use Node base image
FROM node:20-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy rest of the code
COPY . .

# 6. Expose backend port
EXPOSE 8000

# 7. Start server
CMD ["npm", "run", "dev"]
