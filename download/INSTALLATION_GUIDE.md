# CysecBook Installation Guide for Kali Linux

## Prerequisites

Before installing CysecBook, ensure your Kali Linux system has the required dependencies.

### Step 1: Update Your System

```bash
sudo apt update && sudo apt upgrade -y
```

### Step 2: Install Node.js and npm

```bash
# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verify installation
node --version
npm --version
```

### Step 3: Install Bun (Recommended for better performance)

```bash
# Install Bun
curl -fsSL https://bun.sh/install | bash

# Reload shell
source ~/.bashrc

# Verify installation
bun --version
```

---

## Installation Steps

### Step 4: Extract the CysecBook Archive

```bash
# Navigate to your downloads folder (or wherever you saved cysecbook.zip)
cd ~/Downloads

# Create destination directory
sudo mkdir -p /var/www/html/cysecbook

# Extract the archive
sudo unzip cysecbook.zip -d /var/www/html/cysecbook

# Navigate to the project directory
cd /var/www/html/cysecbook
```

### Step 5: Set Permissions

```bash
# Set ownership to www-data (Apache user)
sudo chown -R www-data:www-data /var/www/html/cysecbook

# Set proper permissions
sudo chmod -R 755 /var/www/html/cysecbook
sudo chmod -R 777 /var/www/html/cysecbook/public
```

### Step 6: Install Dependencies

```bash
cd /var/www/html/cysecbook

# Using Bun (recommended - faster)
bun install

# OR using npm (alternative)
npm install
```

### Step 7: Build the Application

```bash
cd /var/www/html/cysecbook

# Using Bun
bun run build

# OR using npm
npm run build
```

---

## Running CysecBook

### Option A: Run with Bun/Npm (Development Mode)

```bash
cd /var/www/html/cysecbook

# Using Bun
bun run dev

# OR using npm
npm run dev
```

The site will be available at: **http://localhost:3000**

### Option B: Run with PM2 (Production Mode - Recommended)

```bash
# Install PM2 globally
sudo npm install -g pm2

# Start the application
cd /var/www/html/cysecbook
pm2 start "bun run dev" --name cysecbook

# Or with npm
pm2 start "npm run dev" --name cysecbook

# Save PM2 configuration
pm2 save

# Configure PM2 to start on boot
pm2 startup
```

### Option C: Run with Apache Reverse Proxy

1. **Enable Apache proxy modules:**

```bash
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod rewrite
sudo systemctl restart apache2
```

2. **Create Apache virtual host configuration:**

```bash
sudo nano /etc/apache2/sites-available/cysecbook.conf
```

3. **Add the following configuration:**

```apache
<VirtualHost *:80>
    ServerName cysecbook.local
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/html/cysecbook
    
    ProxyPreserveHost On
    ProxyPass / http://127.0.0.1:3000/
    ProxyPassReverse / http://127.0.0.1:3000/
    
    <Directory /var/www/html/cysecbook>
        Options Indexes FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    ErrorLog ${APACHE_LOG_DIR}/cysecbook_error.log
    CustomLog ${APACHE_LOG_DIR}/cysecbook_access.log combined
</VirtualHost>
```

4. **Enable the site and restart Apache:**

```bash
sudo a2ensite cysecbook.conf
sudo systemctl restart apache2
```

5. **Add to /etc/hosts:**

```bash
echo "127.0.0.1 cysecbook.local" | sudo tee -a /etc/hosts
```

6. **Start the Next.js server:**

```bash
cd /var/www/html/cysecbook
bun run dev &  # Run in background
```

Access at: **http://cysecbook.local**

---

## Accessing CysecBook

### Main Site
- **URL:** http://localhost:3000 (or http://cysecbook.local with Apache)

### Hidden Pages for Security Testing
- http://localhost:3000/admin-panel
- http://localhost:3000/debug
- http://localhost:3000/test
- http://localhost:3000/staging
- http://localhost:3000/phpmyadmin

### API Endpoints
- http://localhost:3000/api/v1/users
- http://localhost:3000/api/v1/search?q=test
- http://localhost:3000/api/v1/upload
- http://localhost:3000/api/internal/config
- http://localhost:3000/api/internal/secrets

### Hidden Files (Deep Directory Structure)
- `/public/hidden/level1/level2/.../level50/`
- Use FFUF/DIRB/Gobuster to discover these files!

---

## Using with FFUF, DIRB, Gobuster

### FFUF Example

```bash
# Directory fuzzing
ffuf -u http://localhost:3000/FUZZ -w /var/www/html/cysecbook/download/directories.txt

# File fuzzing
ffuf -u http://localhost:3000/FUZZ -w /var/www/html/cysecbook/download/files.txt

# Extension fuzzing
ffuf -u http://localhost:3000/indexFUZZ -w /var/www/html/cysecbook/download/extensions.txt
```

### DIRB Example

```bash
dirb http://localhost:3000 /var/www/html/cysecbook/download/directories.txt
```

### Gobuster Example

```bash
gobuster dir -u http://localhost:3000 -w /var/www/html/cysecbook/download/directories.txt
```

---

## SQL Injection Testing

### Test Forms
1. Navigate to the **Test** page: http://localhost:3000/test
2. Try SQL injection payloads:
   - `1 OR 1=1`
   - `' UNION SELECT * FROM users--`
   - `1; DROP TABLE users--`

### Search Forms
Test the search functionality in Blog, Store, and other modules with:
   - `test' OR '1'='1`
   - `' UNION SELECT username, password FROM users--`

---

## XSS Testing

### Test Pages
1. Navigate to http://localhost:3000/test
2. Try XSS payloads:
   - `<script>alert('XSS')</script>`
   - `<img src=x onerror=alert('XSS')>`
   - `<svg onload=alert('XSS')>`

### Comment Forms
Test comments in Blog, Photos, and Dating modules with XSS payloads.

---

## Troubleshooting

### Port 3000 Already in Use

```bash
# Find process using port 3000
sudo lsof -i :3000

# Kill the process
sudo kill -9 <PID>
```

### Permission Issues

```bash
# Fix permissions
sudo chown -R $USER:$USER /var/www/html/cysecbook
chmod -R 755 /var/www/html/cysecbook
```

### Build Errors

```bash
# Clear cache and reinstall
cd /var/www/html/cysecbook
rm -rf node_modules .next
bun install
bun run build
```

---

## Stopping the Server

### If using direct command
Press `Ctrl+C` in the terminal

### If using PM2

```bash
pm2 stop cysecbook
pm2 delete cysecbook
```

---

## Wordlists Location

The wordlists are included in the download:
- `/var/www/html/cysecbook/download/directories.txt` (500+ directory names)
- `/var/www/html/cysecbook/download/files.txt` (500+ file names)
- `/var/www/html/cysecbook/download/extensions.txt` (Common extensions)

---

## Quick Start Commands (Copy & Paste)

```bash
# Complete installation in one go
cd ~/Downloads
sudo mkdir -p /var/www/html/cysecbook
sudo unzip cysecbook.zip -d /var/www/html/cysecbook
cd /var/www/html/cysecbook
sudo chown -R $USER:$USER .
bun install
bun run build
bun run dev
```

Then open http://localhost:3000 in your browser!

---

## Happy Hacking! 🔐

Remember: This is a deliberately vulnerable application for educational purposes. Do not deploy on production servers or expose to the internet.
