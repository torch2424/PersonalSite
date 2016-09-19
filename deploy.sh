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
mkdir package
echo "Lisiting Directory contents before untar into folder package..."
ls
tar -xzf package.tgz -C package
echo "Lisiting Directory contents after untar into folder package..."
ls
rm package.tgz
echo "Lisiting Directory contents, after complete untar and clean up, of project and tar results..."
ls
ls package
ls package/projectBuild

# Copy any file we want to keep from build to build
# Such as keys, etc...
# cp www/app/config/parameters.yml build/app/config/parameters.yml

# Swap it all around, keeping the previous version aside in case something goes wrong
echo "Backing up and deploying!"
rm -rf /var/www/aaronthedev.com/dist-old
mkdir /var/www/aaronthedev.com/dist-old
mv /var/www/aaronthedev.com/dist /var/www/aaronthedev.com/dist-old
rm -rf /var/www/aaronthedev.com/dist
mkdir /var/www/aaronthedev.com/dist
mv package/projectBuild/dist /var/www/aaronthedev.com/dist
echo "Finished Deploying, goodbye!"
