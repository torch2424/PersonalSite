#!/bin/bash

#Inform of deployment
echo "Deploying aaronthedev.com..."

# Unzip the included package
cd ~
tar -xzf package.tgz
rm package.tgz

# Copy any file we want to keep from build to build
cp www/app/config/parameters.yml build/app/config/parameters.yml

# Swap it all around, keeping the previous version aside in case something goes wrong
rm -rf /var/www/aaronthedev.com/dist-old
mv /var/www/aaronthedev.com/dist /var/www/aaronthedev.com/dist-old
mv build/dist /var/www/aaronthedev.com/dist
