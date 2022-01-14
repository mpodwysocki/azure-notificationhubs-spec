/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationURLParameter,
  OperationParameter,
  OperationQueryParameter
} from "@azure/core-client";
import { InstallationModel as InstallationModelMapper } from "../models/mappers";

export const namespaceBaseUrl: OperationURLParameter = {
  parameterPath: "namespaceBaseUrl",
  mapper: {
    serializedName: "namespaceBaseUrl",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const hubName: OperationURLParameter = {
  parameterPath: "hubName",
  mapper: {
    serializedName: "hubName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const xMsVersion: OperationParameter = {
  parameterPath: "xMsVersion",
  mapper: {
    serializedName: "x-ms-version",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2020-06-01",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const installationId: OperationURLParameter = {
  parameterPath: "installationId",
  mapper: {
    serializedName: "installationId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const authorization: OperationParameter = {
  parameterPath: "authorization",
  mapper: {
    serializedName: "Authorization",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json-patch+json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const body: OperationParameter = {
  parameterPath: "body",
  mapper: {
    serializedName: "body",
    required: true,
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Composite",
          className: "InstallationPatchModelItem"
        }
      }
    }
  }
};

export const contentType1: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const body1: OperationParameter = {
  parameterPath: "body",
  mapper: InstallationModelMapper
};

export const contentType2: OperationParameter = {
  parameterPath: "contentType",
  mapper: {
    defaultValue: "application/octet-stream",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const body2: OperationParameter = {
  parameterPath: "body",
  mapper: {
    serializedName: "body",
    required: true,
    type: {
      name: "Stream"
    }
  }
};

export const contentType3: OperationParameter = {
  parameterPath: "contentType",
  mapper: {
    defaultValue: "application/json;charset=utf-8",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const body3: OperationParameter = {
  parameterPath: "body",
  mapper: {
    serializedName: "body",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const serviceBusNotificationDeviceHandle: OperationParameter = {
  parameterPath: "serviceBusNotificationDeviceHandle",
  mapper: {
    serializedName: "ServiceBusNotification-DeviceHandle",
    type: {
      name: "String"
    }
  }
};

export const serviceBusNotificationFormat: OperationParameter = {
  parameterPath: "serviceBusNotificationFormat",
  mapper: {
    serializedName: "ServiceBusNotification-Format",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const serviceBusNotificationTags: OperationParameter = {
  parameterPath: "serviceBusNotificationTags",
  mapper: {
    serializedName: "ServiceBusNotification-Tags",
    type: {
      name: "String"
    }
  }
};

export const direct: OperationQueryParameter = {
  parameterPath: "direct",
  mapper: {
    serializedName: "direct",
    type: {
      name: "Boolean"
    }
  }
};

export const apnsTopic: OperationParameter = {
  parameterPath: "apnsTopic",
  mapper: {
    serializedName: "apns-topic",
    type: {
      name: "String"
    }
  }
};

export const apnsPriority: OperationParameter = {
  parameterPath: "apnsPriority",
  mapper: {
    serializedName: "apns-priority",
    type: {
      name: "String"
    }
  }
};

export const apnsPushType: OperationParameter = {
  parameterPath: "apnsPushType",
  mapper: {
    serializedName: "apns-push-type",
    type: {
      name: "String"
    }
  }
};

export const xWNSCachePolicy: OperationParameter = {
  parameterPath: "xWNSCachePolicy",
  mapper: {
    serializedName: "X-WNS-Cache-Policy",
    type: {
      name: "String"
    }
  }
};

export const xWNSPriority: OperationParameter = {
  parameterPath: "xWNSPriority",
  mapper: {
    serializedName: "X-WNS-PRIORITY",
    type: {
      name: "String"
    }
  }
};

export const xWNSRequestForStatus: OperationParameter = {
  parameterPath: "xWNSRequestForStatus",
  mapper: {
    serializedName: "X-WNS-RequestForStatus",
    type: {
      name: "String"
    }
  }
};

export const xWNSTag: OperationParameter = {
  parameterPath: "xWNSTag",
  mapper: {
    serializedName: "X-WNS-Tag",
    type: {
      name: "String"
    }
  }
};

export const xWnsttl: OperationParameter = {
  parameterPath: "xWnsttl",
  mapper: {
    serializedName: "X-WNS-TTL",
    type: {
      name: "String"
    }
  }
};

export const xWNSType: OperationParameter = {
  parameterPath: "xWNSType",
  mapper: {
    serializedName: "X-WNS-Type",
    type: {
      name: "String"
    }
  }
};
