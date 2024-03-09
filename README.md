# Awesome Project Build with TypeORM

Steps to run this project:


To set up the applications:

**For the mobile application:**
1. Clone the repository to your local machine.
2. Install dependencies with `npm install` and ensure Expo is globally installed on your machine.
   - If Expo is not installed globally, run: `npm install -g expo-cli`.
3. Run your app with `npm run start`.
4. Scan the QR code with your mobile device, and you are good to go.

**For the API repository:**
1. Clone the repository.
2. Install dependencies with `npm i`.
3. Ensure that Docker is running on your local machine.
4. Pull PostgreSQL on Docker by running the `docker-compose.yml` file.
5. Run your service with `npm run start`.

Noteworthy:
1. Replace the base URL with the IPV4 address and the port where your backend service is running.
   - Example: `BASE_URL: http://192.168.51.124:3000/auth`.
2. Insert a JWT_SECRET in your backend service environment variable.
   - Example: `JWT_SECRET=gfg_jwt_secret_key`.
