#!/bin/bash
cd /var/www/myapp
npm install
pm2 start npm --name "nextjs-app" -- run dev