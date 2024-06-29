#! /bin/bash
cd walmart_clone
git pull origin main
npm install
pm2 restart myapp