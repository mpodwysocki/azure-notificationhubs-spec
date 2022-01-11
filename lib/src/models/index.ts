/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Known values of {@link Enum0} that the service accepts. */
export enum KnownEnum0 {
  TwoThousandFifteen04 = "2015-04",
  TwoThousandTwenty06 = "2020-06"
}

/**
 * Defines values for Enum0. \
 * {@link KnownEnum0} can be used interchangeably with Enum0,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **2015-04** \
 * **2020-06**
 */
export type Enum0 = string;

/** Known values of {@link Enum1} that the service accepts. */
export enum KnownEnum1 {
  Apple = "apple",
  Baidu = "baidu",
  Gcm = "gcm",
  Windows = "windows"
}

/**
 * Defines values for Enum1. \
 * {@link KnownEnum1} can be used interchangeably with Enum1,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **apple** \
 * **baidu** \
 * **gcm** \
 * **windows**
 */
export type Enum1 = string;

/** Known values of {@link Enum2} that the service accepts. */
export enum KnownEnum2 {
  TwoThousandFifteen04 = "2015-04",
  TwoThousandTwenty06 = "2020-06"
}

/**
 * Defines values for Enum2. \
 * {@link KnownEnum2} can be used interchangeably with Enum2,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **2015-04** \
 * **2020-06**
 */
export type Enum2 = string;

/** Optional parameters. */
export interface SendMessage$binaryOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface SendMessage$jsonOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface NotificationHubsClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Device handle for the PNS */
  serviceBusNotificationDeviceHandle?: string;
  /** Notification message tags for targeting */
  serviceBusNotificationTags?: string;
  /** Api Version */
  apiVersion?: string;
  /** Direct Send */
  direct?: boolean;
  /** Overrides client endpoint. */
  endpoint?: string;
}