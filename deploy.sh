#!/bin/bash

#Inform of deployment
echo "Deploying aaronthedev.com..."

# Unzip the included package into the package folder
cd ~
echo "Printing directory and listing contents"
pwd
ls
echo "Untaring package"
rm -rf package
tar -xzf package.tgz -C package
rm package.tgz
echo "Lisiting Directory contents one more time..."
ls

# Copy any file we want to keep from build to build
# Such as keys, etc...
# cp www/app/config/parameters.yml build/app/config/parameters.yml

# Swap it all around, keeping the previous version aside in case something goes wrong
echo "Backing up and deploying!"
rm -rf /var/www/aaronthedev.com/dist-old
mv /var/www/aaronthedev.com/dist /var/www/aaronthedev.com/dist-old
rm -rf /var/www/aaronthedev.com/dist
mv package/build/dist /var/www/aaronthedev.com/dist
echo "Finished Deploying, goodbye!"
