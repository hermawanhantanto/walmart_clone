#!/bin/bash
# Install Node.js, PM2, and other necessary dependencies
curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash -
sudo yum install -y nodejs
sudo npm install -g pm2