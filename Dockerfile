FROM node:7.2.0
MAINTAINER Prasath Soosaithasan <prasath.soosaithasan@gmail.com>

# Place app inside container
COPY . /var/www
WORKDIR /var/www

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
