#!/bin/bash

#Inform of deployment
echo "Deploying aaronthedev.com..."

# Unzip the included package into the package folder
cd ~
echo "Printing directory and listing contents: "
pwd
find . -type d | cat
echo "Untaring package"
rm -rf package
mkdir package
tar -xzf package.tgz -C package
rm package.tgz
echo "Printing final directory contents: "
pwd
find . -type d | cat

# Copy any file we want to keep from build to build
# Such as keys, etc...
# cp www/app/config/parameters.yml build/app/config/parameters.yml

# Swap it all around, keeping the previous version aside in case something goes wrong
echo "Backing up (/var/www/dist-old) and deploying!"
rm -rf /var/www/aaronthedev.com/dist-old
mkdir /var/www/aaronthedev.com/dist-old
# Need to use /folder/* to move a folders contents, and not the whole folder
mv /var/www/aaronthedev.com/dist/* /var/www/aaronthedev.com/dist-old
rm -rf /var/www/aaronthedev.com/dist
mkdir /var/www/aaronthedev.com/dist
mv package/projectBuild/* /var/www/aaronthedev.com/dist
echo "Finished Deploying, goodbye!"
