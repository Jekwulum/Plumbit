// Original file: proto/notification.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateNotificationRequest as _notificationPackage_CreateNotificationRequest, CreateNotificationRequest__Output as _notificationPackage_CreateNotificationRequest__Output } from '../notificationPackage/CreateNotificationRequest';
import type { DeleteNotificationResponse as _notificationPackage_DeleteNotificationResponse, DeleteNotificationResponse__Output as _notificationPackage_DeleteNotificationResponse__Output } from '../notificationPackage/DeleteNotificationResponse';
import type { GetNotificationRequest as _notificationPackage_GetNotificationRequest, GetNotificationRequest__Output as _notificationPackage_GetNotificationRequest__Output } from '../notificationPackage/GetNotificationRequest';
import type { GetNotificationsRequest as _notificationPackage_GetNotificationsRequest, GetNotificationsRequest__Output as _notificationPackage_GetNotificationsRequest__Output } from '../notificationPackage/GetNotificationsRequest';
import type { GetNotificationsResponse as _notificationPackage_GetNotificationsResponse, GetNotificationsResponse__Output as _notificationPackage_GetNotificationsResponse__Output } from '../notificationPackage/GetNotificationsResponse';
import type { NotificationResponse as _notificationPackage_NotificationResponse, NotificationResponse__Output as _notificationPackage_NotificationResponse__Output } from '../notificationPackage/NotificationResponse';

export interface NotificationServiceClient extends grpc.Client {
  CreateNotification(argument: _notificationPackage_CreateNotificationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  CreateNotification(argument: _notificationPackage_CreateNotificationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  CreateNotification(argument: _notificationPackage_CreateNotificationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  CreateNotification(argument: _notificationPackage_CreateNotificationRequest, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  createNotification(argument: _notificationPackage_CreateNotificationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  createNotification(argument: _notificationPackage_CreateNotificationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  createNotification(argument: _notificationPackage_CreateNotificationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  createNotification(argument: _notificationPackage_CreateNotificationRequest, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteNotification(argument: _notificationPackage_GetNotificationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_DeleteNotificationResponse__Output>): grpc.ClientUnaryCall;
  DeleteNotification(argument: _notificationPackage_GetNotificationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notificationPackage_DeleteNotificationResponse__Output>): grpc.ClientUnaryCall;
  DeleteNotification(argument: _notificationPackage_GetNotificationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_DeleteNotificationResponse__Output>): grpc.ClientUnaryCall;
  DeleteNotification(argument: _notificationPackage_GetNotificationRequest, callback: grpc.requestCallback<_notificationPackage_DeleteNotificationResponse__Output>): grpc.ClientUnaryCall;
  deleteNotification(argument: _notificationPackage_GetNotificationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_DeleteNotificationResponse__Output>): grpc.ClientUnaryCall;
  deleteNotification(argument: _notificationPackage_GetNotificationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notificationPackage_DeleteNotificationResponse__Output>): grpc.ClientUnaryCall;
  deleteNotification(argument: _notificationPackage_GetNotificationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_DeleteNotificationResponse__Output>): grpc.ClientUnaryCall;
  deleteNotification(argument: _notificationPackage_GetNotificationRequest, callback: grpc.requestCallback<_notificationPackage_DeleteNotificationResponse__Output>): grpc.ClientUnaryCall;
  
  GetNotification(argument: _notificationPackage_GetNotificationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  GetNotification(argument: _notificationPackage_GetNotificationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  GetNotification(argument: _notificationPackage_GetNotificationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  GetNotification(argument: _notificationPackage_GetNotificationRequest, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  getNotification(argument: _notificationPackage_GetNotificationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  getNotification(argument: _notificationPackage_GetNotificationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  getNotification(argument: _notificationPackage_GetNotificationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  getNotification(argument: _notificationPackage_GetNotificationRequest, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  
  GetNotifications(argument: _notificationPackage_GetNotificationsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_GetNotificationsResponse__Output>): grpc.ClientUnaryCall;
  GetNotifications(argument: _notificationPackage_GetNotificationsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notificationPackage_GetNotificationsResponse__Output>): grpc.ClientUnaryCall;
  GetNotifications(argument: _notificationPackage_GetNotificationsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_GetNotificationsResponse__Output>): grpc.ClientUnaryCall;
  GetNotifications(argument: _notificationPackage_GetNotificationsRequest, callback: grpc.requestCallback<_notificationPackage_GetNotificationsResponse__Output>): grpc.ClientUnaryCall;
  getNotifications(argument: _notificationPackage_GetNotificationsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_GetNotificationsResponse__Output>): grpc.ClientUnaryCall;
  getNotifications(argument: _notificationPackage_GetNotificationsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notificationPackage_GetNotificationsResponse__Output>): grpc.ClientUnaryCall;
  getNotifications(argument: _notificationPackage_GetNotificationsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_GetNotificationsResponse__Output>): grpc.ClientUnaryCall;
  getNotifications(argument: _notificationPackage_GetNotificationsRequest, callback: grpc.requestCallback<_notificationPackage_GetNotificationsResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateNotification(argument: _notificationPackage_GetNotificationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  UpdateNotification(argument: _notificationPackage_GetNotificationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  UpdateNotification(argument: _notificationPackage_GetNotificationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  UpdateNotification(argument: _notificationPackage_GetNotificationRequest, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  updateNotification(argument: _notificationPackage_GetNotificationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  updateNotification(argument: _notificationPackage_GetNotificationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  updateNotification(argument: _notificationPackage_GetNotificationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  updateNotification(argument: _notificationPackage_GetNotificationRequest, callback: grpc.requestCallback<_notificationPackage_NotificationResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface NotificationServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateNotification: grpc.handleUnaryCall<_notificationPackage_CreateNotificationRequest__Output, _notificationPackage_NotificationResponse>;
  
  DeleteNotification: grpc.handleUnaryCall<_notificationPackage_GetNotificationRequest__Output, _notificationPackage_DeleteNotificationResponse>;
  
  GetNotification: grpc.handleUnaryCall<_notificationPackage_GetNotificationRequest__Output, _notificationPackage_NotificationResponse>;
  
  GetNotifications: grpc.handleUnaryCall<_notificationPackage_GetNotificationsRequest__Output, _notificationPackage_GetNotificationsResponse>;
  
  UpdateNotification: grpc.handleUnaryCall<_notificationPackage_GetNotificationRequest__Output, _notificationPackage_NotificationResponse>;
  
}

export interface NotificationServiceDefinition extends grpc.ServiceDefinition {
  CreateNotification: MethodDefinition<_notificationPackage_CreateNotificationRequest, _notificationPackage_NotificationResponse, _notificationPackage_CreateNotificationRequest__Output, _notificationPackage_NotificationResponse__Output>
  DeleteNotification: MethodDefinition<_notificationPackage_GetNotificationRequest, _notificationPackage_DeleteNotificationResponse, _notificationPackage_GetNotificationRequest__Output, _notificationPackage_DeleteNotificationResponse__Output>
  GetNotification: MethodDefinition<_notificationPackage_GetNotificationRequest, _notificationPackage_NotificationResponse, _notificationPackage_GetNotificationRequest__Output, _notificationPackage_NotificationResponse__Output>
  GetNotifications: MethodDefinition<_notificationPackage_GetNotificationsRequest, _notificationPackage_GetNotificationsResponse, _notificationPackage_GetNotificationsRequest__Output, _notificationPackage_GetNotificationsResponse__Output>
  UpdateNotification: MethodDefinition<_notificationPackage_GetNotificationRequest, _notificationPackage_NotificationResponse, _notificationPackage_GetNotificationRequest__Output, _notificationPackage_NotificationResponse__Output>
}
