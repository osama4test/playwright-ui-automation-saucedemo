# Use official Playwright image
FROM mcr.microsoft.com/playwright:v1.53.1-jammy

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
COPY .env .env             
RUN npm -v && node -v && npm ci

# Copy all project files (tests, configs, utils, etc.)
COPY . .

# Default command to run tests
CMD ["npx", "playwright", "test", "--reporter=dot"]
