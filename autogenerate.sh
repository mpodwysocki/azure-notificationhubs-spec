#!/bin/sh

autorest --typescript \
  --input-file=spec.json \
  --output-folder=lib \
  --license-header=MICROSOFT_MIT_NO_VERSION \
  --package-name=@azure/notificationhubs \
  --package-version=7.0.0
