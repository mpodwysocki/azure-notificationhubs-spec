/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const NotificationHubEntryModel: coreClient.CompositeMapper = {
  serializedName: "NotificationHubEntryModel",
  xmlName: "entry",
  xmlNamespace: "http://www.w3.org/2005/Atom",
  type: {
    name: "Composite",
    className: "NotificationHubEntryModel",
    modelProperties: {
      content: {
        serializedName: "content",
        xmlName: "content",
        type: {
          name: "Composite",
          className: "NotificationHubContentModel"
        }
      }
    }
  }
};

export const NotificationHubContentModel: coreClient.CompositeMapper = {
  serializedName: "NotificationHubContentModel",
  type: {
    name: "Composite",
    className: "NotificationHubContentModel",
    modelProperties: {
      type: {
        defaultValue: "application/xml",
        isConstant: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      notificationHubDescription: {
        serializedName: "NotificationHubDescription",
        xmlName: "NotificationHubDescription",
        xmlNamespace:
          "http://schemas.microsoft.com/netservices/2010/10/servicebus/connect",
        type: {
          name: "Composite",
          className: "NotificationHubDescriptionModel"
        }
      }
    }
  }
};

export const NotificationHubDescriptionModel: coreClient.CompositeMapper = {
  serializedName: "NotificationHubDescriptionModel",
  xmlNamespace:
    "http://schemas.microsoft.com/netservices/2010/10/servicebus/connect",
  type: {
    name: "Composite",
    className: "NotificationHubDescriptionModel",
    modelProperties: {
      xmlnsI: {
        defaultValue: "http://www.w3.org/2001/XMLSchema-instance",
        isConstant: true,
        serializedName: "xmlns:i",
        type: {
          name: "String"
        }
      },
      registrationTtl: {
        serializedName: "RegistrationTtl",
        xmlName: "RegistrationTtl",
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "Location",
        xmlName: "Location",
        type: {
          name: "String"
        }
      },
      apnsCredential: {
        serializedName: "ApnsCredential",
        xmlName: "Properties",
        xmlIsWrapped: true,
        xmlElementName: "Property",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PropertyBagModelItem"
            }
          }
        }
      },
      gcmCredential: {
        serializedName: "GcmCredential",
        xmlName: "Properties",
        xmlIsWrapped: true,
        xmlElementName: "Property",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PropertyBagModelItem"
            }
          }
        }
      },
      wnsCredential: {
        serializedName: "WnsCredential",
        xmlName: "Properties",
        xmlIsWrapped: true,
        xmlElementName: "Property",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PropertyBagModelItem"
            }
          }
        }
      },
      authorizationRules: {
        serializedName: "AuthorizationRules",
        xmlName: "AuthorizationRules",
        xmlIsWrapped: true,
        xmlElementName: "AuthorizationRule",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NotificationHubDescriptionModelAuthorizationRulesItem"
            }
          }
        }
      }
    }
  }
};

export const PropertyBagModelItem: coreClient.CompositeMapper = {
  serializedName: "PropertyBagModelItem",
  xmlName: "Property",
  type: {
    name: "Composite",
    className: "PropertyBagModelItem",
    modelProperties: {
      name: {
        serializedName: "Name",
        xmlName: "Name",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "Value",
        xmlName: "Value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NotificationHubDescriptionModelAuthorizationRulesItem: coreClient.CompositeMapper = {
  serializedName: "NotificationHubDescriptionModelAuthorizationRulesItem",
  xmlName: "AuthorizationRule",
  type: {
    name: "Composite",
    className: "NotificationHubDescriptionModelAuthorizationRulesItem",
    modelProperties: {
      iType: {
        defaultValue: "http://www.w3.org/2001/XMLSchema-instance",
        isConstant: true,
        serializedName: "i:type",
        type: {
          name: "String"
        }
      },
      claimType: {
        defaultValue: "SharedAccessAuthorizationRule",
        isConstant: true,
        serializedName: "ClaimType",
        type: {
          name: "String"
        }
      },
      claimValue: {
        serializedName: "ClaimValue",
        xmlName: "ClaimValue",
        type: {
          name: "String"
        }
      },
      rights: {
        serializedName: "Rights",
        xmlName: "Rights",
        xmlElementName: "AccessRights",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      createdTime: {
        serializedName: "CreatedTime",
        xmlName: "CreatedTime",
        type: {
          name: "String"
        }
      },
      modifiedTime: {
        serializedName: "ModifiedTime",
        xmlName: "ModifiedTime",
        type: {
          name: "String"
        }
      },
      keyName: {
        serializedName: "KeyName",
        xmlName: "KeyName",
        type: {
          name: "String"
        }
      },
      primaryKey: {
        serializedName: "PrimaryKey",
        xmlName: "PrimaryKey",
        type: {
          name: "String"
        }
      },
      secondaryKey: {
        serializedName: "SecondaryKey",
        xmlName: "SecondaryKey",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RegistrationEntryModel: coreClient.CompositeMapper = {
  serializedName: "RegistrationEntryModel",
  xmlName: "entry",
  xmlNamespace: "http://www.w3.org/2005/Atom",
  type: {
    name: "Composite",
    className: "RegistrationEntryModel",
    modelProperties: {
      content: {
        serializedName: "content",
        xmlName: "content",
        type: {
          name: "Composite",
          className: "NotificationHubContentModel"
        }
      },
      xmlnsM: {
        defaultValue:
          "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
        isConstant: true,
        serializedName: "xmlns:m",
        type: {
          name: "String"
        }
      },
      mEtag: {
        serializedName: "m:etag",
        xmlName: "m:etag",
        xmlIsAttribute: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const InstallationModel: coreClient.CompositeMapper = {
  serializedName: "InstallationModel",
  type: {
    name: "Composite",
    className: "InstallationModel",
    modelProperties: {
      installationId: {
        serializedName: "installationId",
        required: true,
        xmlName: "installationId",
        type: {
          name: "String"
        }
      },
      userId: {
        serializedName: "userId",
        xmlName: "userId",
        type: {
          name: "String"
        }
      },
      lastActiveOn: {
        serializedName: "lastActiveOn",
        readOnly: true,
        xmlName: "lastActiveOn",
        type: {
          name: "String"
        }
      },
      lastUpdate: {
        serializedName: "lastUpdate",
        readOnly: true,
        xmlName: "lastUpdate",
        type: {
          name: "String"
        }
      },
      platform: {
        serializedName: "platform",
        required: true,
        xmlName: "platform",
        type: {
          name: "String"
        }
      },
      pushChannel: {
        serializedName: "pushChannel",
        required: true,
        xmlName: "pushChannel",
        type: {
          name: "String"
        }
      },
      expiredPushChannel: {
        serializedName: "expiredPushChannel",
        readOnly: true,
        xmlName: "expiredPushChannel",
        type: {
          name: "Boolean"
        }
      },
      tags: {
        serializedName: "tags",
        xmlName: "tags",
        xmlElementName: "InstallationModelTagsItem",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      templates: {
        serializedName: "templates",
        xmlName: "templates",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "InstallationTemplateModel" }
          }
        }
      },
      secondaryTiles: {
        serializedName: "secondaryTiles",
        xmlName: "secondaryTiles",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Composite",
              className: "InstallationSecondaryTileModel"
            }
          }
        }
      }
    }
  }
};

export const InstallationTemplateModel: coreClient.CompositeMapper = {
  serializedName: "InstallationTemplateModel",
  type: {
    name: "Composite",
    className: "InstallationTemplateModel",
    modelProperties: {
      body: {
        serializedName: "body",
        required: true,
        xmlName: "body",
        type: {
          name: "String"
        }
      },
      headers: {
        serializedName: "headers",
        xmlName: "headers",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      expiry: {
        serializedName: "expiry",
        xmlName: "expiry",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        xmlName: "tags",
        xmlElementName: "InstallationTemplateModelTagsItem",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const InstallationSecondaryTileModel: coreClient.CompositeMapper = {
  serializedName: "InstallationSecondaryTileModel",
  type: {
    name: "Composite",
    className: "InstallationSecondaryTileModel",
    modelProperties: {
      pushChannel: {
        serializedName: "pushChannel",
        required: true,
        xmlName: "pushChannel",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        xmlName: "tags",
        xmlElementName: "InstallationSecondaryTileModelTagsItem",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      templates: {
        serializedName: "templates",
        xmlName: "templates",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "InstallationTemplateModel" }
          }
        }
      }
    }
  }
};

export const InstallationPatchModelItem: coreClient.CompositeMapper = {
  serializedName: "InstallationPatchModelItem",
  type: {
    name: "Composite",
    className: "InstallationPatchModelItem",
    modelProperties: {
      op: {
        serializedName: "op",
        required: true,
        xmlName: "op",
        type: {
          name: "String"
        }
      },
      path: {
        serializedName: "path",
        required: true,
        xmlName: "path",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        xmlName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RegistrationContentModel: coreClient.CompositeMapper = {
  serializedName: "RegistrationContentModel",
  type: {
    name: "Composite",
    className: "RegistrationContentModel",
    modelProperties: {
      type: {
        defaultValue: "application/xml",
        isConstant: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      appleRegistrationDescription: {
        serializedName: "AppleRegistrationDescription",
        xmlName: "AppleRegistrationDescription",
        xmlNamespace:
          "http://schemas.microsoft.com/netservices/2010/10/servicebus/connect",
        type: {
          name: "Composite",
          className: "AppleRegistrationContentModel"
        }
      },
      appleTemplateRegistrationDescription: {
        serializedName: "AppleTemplateRegistrationDescription",
        xmlName: "AppleTemplateRegistrationDescription",
        xmlNamespace:
          "http://schemas.microsoft.com/netservices/2010/10/servicebus/connect",
        type: {
          name: "Composite",
          className: "AppleTemplateRegistrationContentModel"
        }
      },
      baiduRegistrationDescription: {
        serializedName: "BaiduRegistrationDescription",
        xmlName: "BaiduRegistrationDescription",
        xmlNamespace:
          "http://schemas.microsoft.com/netservices/2010/10/servicebus/connect",
        type: {
          name: "Composite",
          className: "BaiduRegistrationContentModel"
        }
      },
      baiduTemplateRegistrationDescription: {
        serializedName: "BaiduTemplateRegistrationDescription",
        xmlName: "BaiduTemplateRegistrationDescription",
        xmlNamespace:
          "http://schemas.microsoft.com/netservices/2010/10/servicebus/connect",
        type: {
          name: "Composite",
          className: "BaiduTemplateRegistrationContentModel"
        }
      },
      gcmRegistrationDescription: {
        serializedName: "GcmRegistrationDescription",
        xmlName: "GcmRegistrationDescription",
        xmlNamespace:
          "http://schemas.microsoft.com/netservices/2010/10/servicebus/connect",
        type: {
          name: "Composite",
          className: "GcmRegistrationContentModel"
        }
      },
      gcmTemplateRegistrationDescription: {
        serializedName: "GcmTemplateRegistrationDescription",
        xmlName: "GcmTemplateRegistrationDescription",
        xmlNamespace:
          "http://schemas.microsoft.com/netservices/2010/10/servicebus/connect",
        type: {
          name: "Composite",
          className: "GcmTemplateRegistrationContentModel"
        }
      },
      windowsRegistrationDescription: {
        serializedName: "WindowsRegistrationDescription",
        xmlName: "WindowsRegistrationDescription",
        xmlNamespace:
          "http://schemas.microsoft.com/netservices/2010/10/servicebus/connect",
        type: {
          name: "Composite",
          className: "WindowsRegistrationContentModel"
        }
      },
      windowsTemplateRegistrationDescription: {
        serializedName: "WindowsTemplateRegistrationDescription",
        xmlName: "WindowsTemplateRegistrationDescription",
        xmlNamespace:
          "http://schemas.microsoft.com/netservices/2010/10/servicebus/connect",
        type: {
          name: "Composite",
          className: "WindowsTemplateRegistrationContentModel"
        }
      }
    }
  }
};

export const AppleRegistrationContentModel: coreClient.CompositeMapper = {
  serializedName: "AppleRegistrationContentModel",
  xmlName: "AppleRegistrationDescription",
  xmlNamespace:
    "http://schemas.microsoft.com/netservices/2010/10/servicebus/connect",
  type: {
    name: "Composite",
    className: "AppleRegistrationContentModel",
    modelProperties: {
      xmlnsI: {
        defaultValue: "http://www.w3.org/2001/XMLSchema-instance",
        isConstant: true,
        serializedName: "xmlns:i",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "Tags",
        xmlName: "Tags",
        type: {
          name: "String"
        }
      },
      deviceToken: {
        serializedName: "DeviceToken",
        required: true,
        xmlName: "DeviceToken",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppleTemplateRegistrationContentModel: coreClient.CompositeMapper = {
  serializedName: "AppleTemplateRegistrationContentModel",
  xmlName: "AppleTemplateRegistrationDescription",
  xmlNamespace:
    "http://schemas.microsoft.com/netservices/2010/10/servicebus/connect",
  type: {
    name: "Composite",
    className: "AppleTemplateRegistrationContentModel",
    modelProperties: {
      xmlnsI: {
        defaultValue: "http://www.w3.org/2001/XMLSchema-instance",
        isConstant: true,
        serializedName: "xmlns:i",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "Tags",
        xmlName: "Tags",
        type: {
          name: "String"
        }
      },
      deviceToken: {
        serializedName: "DeviceToken",
        required: true,
        xmlName: "DeviceToken",
        type: {
          name: "String"
        }
      },
      bodyTemplate: {
        serializedName: "BodyTemplate",
        required: true,
        xmlName: "BodyTemplate",
        type: {
          name: "String"
        }
      },
      expiry: {
        serializedName: "Expiry",
        xmlName: "Expiry",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BaiduRegistrationContentModel: coreClient.CompositeMapper = {
  serializedName: "BaiduRegistrationContentModel",
  xmlName: "BaiduRegistrationDescription",
  xmlNamespace:
    "http://schemas.microsoft.com/netservices/2010/10/servicebus/connect",
  type: {
    name: "Composite",
    className: "BaiduRegistrationContentModel",
    modelProperties: {
      xmlnsI: {
        defaultValue: "http://www.w3.org/2001/XMLSchema-instance",
        isConstant: true,
        serializedName: "xmlns:i",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "Tags",
        xmlName: "Tags",
        type: {
          name: "String"
        }
      },
      baiduUserId: {
        serializedName: "BaiduUserId",
        required: true,
        xmlName: "BaiduUserId",
        type: {
          name: "String"
        }
      },
      baiduChannelId: {
        serializedName: "BaiduChannelId",
        required: true,
        xmlName: "BaiduChannelId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BaiduTemplateRegistrationContentModel: coreClient.CompositeMapper = {
  serializedName: "BaiduTemplateRegistrationContentModel",
  xmlName: "BaiduTemplateRegistrationDescription",
  xmlNamespace:
    "http://schemas.microsoft.com/netservices/2010/10/servicebus/connect",
  type: {
    name: "Composite",
    className: "BaiduTemplateRegistrationContentModel",
    modelProperties: {
      xmlnsI: {
        defaultValue: "http://www.w3.org/2001/XMLSchema-instance",
        isConstant: true,
        serializedName: "xmlns:i",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "Tags",
        xmlName: "Tags",
        type: {
          name: "String"
        }
      },
      baiduUserId: {
        serializedName: "BaiduUserId",
        required: true,
        xmlName: "BaiduUserId",
        type: {
          name: "String"
        }
      },
      baiduChannelId: {
        serializedName: "BaiduChannelId",
        required: true,
        xmlName: "BaiduChannelId",
        type: {
          name: "String"
        }
      },
      bodyTemplate: {
        serializedName: "BodyTemplate",
        required: true,
        xmlName: "BodyTemplate",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GcmRegistrationContentModel: coreClient.CompositeMapper = {
  serializedName: "GcmRegistrationContentModel",
  xmlName: "GcmRegistrationDescription",
  xmlNamespace:
    "http://schemas.microsoft.com/netservices/2010/10/servicebus/connect",
  type: {
    name: "Composite",
    className: "GcmRegistrationContentModel",
    modelProperties: {
      xmlnsI: {
        defaultValue: "http://www.w3.org/2001/XMLSchema-instance",
        isConstant: true,
        serializedName: "xmlns:i",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "Tags",
        xmlName: "Tags",
        type: {
          name: "String"
        }
      },
      gcmRegistrationId: {
        serializedName: "GcmRegistrationId",
        xmlName: "GcmRegistrationId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GcmTemplateRegistrationContentModel: coreClient.CompositeMapper = {
  serializedName: "GcmTemplateRegistrationContentModel",
  xmlName: "GcmTemplateRegistrationDescription",
  xmlNamespace:
    "http://schemas.microsoft.com/netservices/2010/10/servicebus/connect",
  type: {
    name: "Composite",
    className: "GcmTemplateRegistrationContentModel",
    modelProperties: {
      xmlnsI: {
        defaultValue: "http://www.w3.org/2001/XMLSchema-instance",
        isConstant: true,
        serializedName: "xmlns:i",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "Tags",
        xmlName: "Tags",
        type: {
          name: "String"
        }
      },
      gcmRegistrationId: {
        serializedName: "GcmRegistrationId",
        required: true,
        xmlName: "GcmRegistrationId",
        type: {
          name: "String"
        }
      },
      bodyTemplate: {
        serializedName: "BodyTemplate",
        required: true,
        xmlName: "BodyTemplate",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WindowsRegistrationContentModel: coreClient.CompositeMapper = {
  serializedName: "WindowsRegistrationContentModel",
  xmlName: "WindowsRegistrationDescription",
  xmlNamespace:
    "http://schemas.microsoft.com/netservices/2010/10/servicebus/connect",
  type: {
    name: "Composite",
    className: "WindowsRegistrationContentModel",
    modelProperties: {
      xmlnsI: {
        defaultValue: "http://www.w3.org/2001/XMLSchema-instance",
        isConstant: true,
        serializedName: "xmlns:i",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "Tags",
        xmlName: "Tags",
        type: {
          name: "String"
        }
      },
      channelUri: {
        serializedName: "ChannelUri",
        required: true,
        xmlName: "ChannelUri",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WindowsTemplateRegistrationContentModel: coreClient.CompositeMapper = {
  serializedName: "WindowsTemplateRegistrationContentModel",
  xmlName: "WindowsTemplateRegistrationDescription",
  xmlNamespace:
    "http://schemas.microsoft.com/netservices/2010/10/servicebus/connect",
  type: {
    name: "Composite",
    className: "WindowsTemplateRegistrationContentModel",
    modelProperties: {
      xmlnsI: {
        defaultValue: "http://www.w3.org/2001/XMLSchema-instance",
        isConstant: true,
        serializedName: "xmlns:i",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "Tags",
        xmlName: "Tags",
        type: {
          name: "String"
        }
      },
      channelUri: {
        serializedName: "ChannelUri",
        required: true,
        xmlName: "ChannelUri",
        type: {
          name: "String"
        }
      },
      bodyTemplate: {
        serializedName: "BodyTemplate",
        required: true,
        xmlName: "BodyTemplate",
        type: {
          name: "String"
        }
      },
      wnsHeaders: {
        serializedName: "WnsHeaders",
        xmlName: "WnsHeaders",
        xmlIsWrapped: true,
        xmlElementName: "WnsHeader",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "WindowsTemplateRegistrationContentModelWnsHeadersItem"
            }
          }
        }
      }
    }
  }
};

export const WindowsTemplateRegistrationContentModelWnsHeadersItem: coreClient.CompositeMapper = {
  serializedName: "WindowsTemplateRegistrationContentModelWnsHeadersItem",
  xmlName: "WnsHeader",
  type: {
    name: "Composite",
    className: "WindowsTemplateRegistrationContentModelWnsHeadersItem",
    modelProperties: {
      header: {
        serializedName: "Header",
        xmlName: "Header",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "Value",
        xmlName: "Value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NotificationHubsClientGetRegistrationsByTagHeaders: coreClient.CompositeMapper = {
  serializedName: "NotificationHubsClient_getRegistrationsByTagHeaders",
  type: {
    name: "Composite",
    className: "NotificationHubsClientGetRegistrationsByTagHeaders",
    modelProperties: {
      xMSContinuationToken: {
        serializedName: "x-ms-continuationtoken",
        xmlName: "x-ms-continuationtoken",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NotificationHubsClientCreateRegistrationIdHeaders: coreClient.CompositeMapper = {
  serializedName: "NotificationHubsClient_createRegistrationIdHeaders",
  type: {
    name: "Composite",
    className: "NotificationHubsClientCreateRegistrationIdHeaders",
    modelProperties: {
      contentLocation: {
        serializedName: "content-location",
        xmlName: "content-location",
        type: {
          name: "String"
        }
      },
      eTag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NotificationHubsClientGetRegistrationsHeaders: coreClient.CompositeMapper = {
  serializedName: "NotificationHubsClient_getRegistrationsHeaders",
  type: {
    name: "Composite",
    className: "NotificationHubsClientGetRegistrationsHeaders",
    modelProperties: {
      xMSContinuationToken: {
        serializedName: "x-ms-continuationtoken",
        xmlName: "x-ms-continuationtoken",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NotificationHubsClientCreateRegistrationHeaders: coreClient.CompositeMapper = {
  serializedName: "NotificationHubsClient_createRegistrationHeaders",
  type: {
    name: "Composite",
    className: "NotificationHubsClientCreateRegistrationHeaders",
    modelProperties: {
      eTag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NotificationHubsClientGetRegistrationHeaders: coreClient.CompositeMapper = {
  serializedName: "NotificationHubsClient_getRegistrationHeaders",
  type: {
    name: "Composite",
    className: "NotificationHubsClientGetRegistrationHeaders",
    modelProperties: {
      eTag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NotificationHubsClientCreateOrUpdateRegistrationHeaders: coreClient.CompositeMapper = {
  serializedName: "NotificationHubsClient_createOrUpdateRegistrationHeaders",
  type: {
    name: "Composite",
    className: "NotificationHubsClientCreateOrUpdateRegistrationHeaders",
    modelProperties: {
      eTag: {
        serializedName: "etag",
        xmlName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NotificationHubsClientGetInstallationHeaders: coreClient.CompositeMapper = {
  serializedName: "NotificationHubsClient_getInstallationHeaders",
  type: {
    name: "Composite",
    className: "NotificationHubsClientGetInstallationHeaders",
    modelProperties: {
      contentLocation: {
        serializedName: "content-location",
        xmlName: "content-location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NotificationHubsClientSendMessageHeaders: coreClient.CompositeMapper = {
  serializedName: "NotificationHubsClient_sendMessageHeaders",
  type: {
    name: "Composite",
    className: "NotificationHubsClientSendMessageHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        xmlName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};
