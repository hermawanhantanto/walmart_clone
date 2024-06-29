#!/bin/bash
# Validate that the application is running
pm2 describe nextjs-app || exit 1