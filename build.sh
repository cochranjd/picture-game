#!/bin/bash
# Found at https://gist.github.com/abuiles/5c281123fc41e6b988e3 - thanks to abuiles
# Only modification was to overwrite index.html.erb rather than application.erb
# Based on https://github.com/knomedia/ember-cli-rails/blob/master/build.sh

# for (( i = 0; i < 17; i++ )); do echo "$(tput setaf $i)This is ($i) $(tput sgr0)"; done

function printMessage {
  color=$(tput setaf $1)
  message=$2
  reset=$(tput sgr0)
  echo -e "${color}${message}${reset}"
}

function boldMessage {
  color=$(tput setaf $1)
  message=$2
  reset=$(tput sgr0)
  echo -e "${color}*************************************${reset}"
  echo -e "${color}${message}${reset}"
  echo -e "${color}*************************************${reset}"
}

#echo -e "${color}Building Ember app${reset}"
boldMessage 4 "Building Ember app"
cd client
ember build --environment production
cd ../

rm -rf public/ember-assets

printMessage 4 "Copying ember build files to rails"
cp -r client/dist/* public/

printMessage 4 "Swaping assets dir for ember-assets"
mv public/assets public/ember-assets

printMessage 4 "Replacing references s/assets/ember-assets/ in public/index.html"
sed -i s/assets/ember-assets/ public/index.html

printMessage 4 "inserting csrf_meta_tags in head"
sed -i 's/<\/head>/<%= csrf_meta_tags %>&/' public/index.html

printMessage 4 "inserting yield in body"
sed -i 's/<body>/&<%= yield %>/' public/index.html

printMessage 4 "Replacing application.html.erb with index.html"
mv public/index.html app/views/application/index.html.erb

printMessage 4 "Cleaning Up"
rm -rf public_bk/
rm public/index.html.bck

boldMessage 4 "Done"
