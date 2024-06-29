#!/bin/bash
# Stop PM2 process
pm2 stop all || true
pm2 delete all || true
