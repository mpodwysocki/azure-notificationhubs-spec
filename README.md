# Azure Notification Hubs Data Plane Spec

This holds the data plane specification for Azure Notification Hubs.  This is the first attempt to document the Azure Notification Hubs data plane to cover the minimal send operations and installation support.

To generate the TypeScript from Swagger, ensure that AutoRest is installed.

```bash
npm install -g autorest
```

Then the SDK can be generated using the following command.

```bash
autorest --typescript \
  --input-file=spec.json\
  --output-folder=lib\
  --license-header=MICROSOFT_MIT_NO_VERSION \
  --package-name=@azure/notificationhubs \
  --package-version=7.0.0
```

## LICENSE

[MIT](LICENSE)
