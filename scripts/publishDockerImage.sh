#!/bin/bash

docker login -u ${DOCKER_HUB_USERNAME} -p ${DOCKER_HUB_PASSWORD}
docker push ${APP_NAMESPACE}:${APP_VERSION}
