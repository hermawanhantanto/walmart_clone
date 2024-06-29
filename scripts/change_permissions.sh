#!/bin/bash
# Ensure the application directory has the correct permissions
sudo mkdir -p /var/www/myapp
sudo chown -R ec2-user:ec2-user /var/www/myapp