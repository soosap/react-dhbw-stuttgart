#!/bin/bash

docker build --no-cache -t ${APP_NAMESPACE}:${APP_VERSION} .
