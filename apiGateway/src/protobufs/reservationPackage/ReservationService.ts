// Original file: proto/reservation.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateReservationRequest as _reservationPackage_CreateReservationRequest, CreateReservationRequest__Output as _reservationPackage_CreateReservationRequest__Output } from '../reservationPackage/CreateReservationRequest';
import type { DeleteReservationRequest as _reservationPackage_DeleteReservationRequest, DeleteReservationRequest__Output as _reservationPackage_DeleteReservationRequest__Output } from '../reservationPackage/DeleteReservationRequest';
import type { Empty as _reservationPackage_Empty, Empty__Output as _reservationPackage_Empty__Output } from '../reservationPackage/Empty';
import type { GetPlumberAppointmentsRequest as _reservationPackage_GetPlumberAppointmentsRequest, GetPlumberAppointmentsRequest__Output as _reservationPackage_GetPlumberAppointmentsRequest__Output } from '../reservationPackage/GetPlumberAppointmentsRequest';
import type { GetPlumberAppointmentsResponse as _reservationPackage_GetPlumberAppointmentsResponse, GetPlumberAppointmentsResponse__Output as _reservationPackage_GetPlumberAppointmentsResponse__Output } from '../reservationPackage/GetPlumberAppointmentsResponse';
import type { GetReservationRequest as _reservationPackage_GetReservationRequest, GetReservationRequest__Output as _reservationPackage_GetReservationRequest__Output } from '../reservationPackage/GetReservationRequest';
import type { GetReservationsRequest as _reservationPackage_GetReservationsRequest, GetReservationsRequest__Output as _reservationPackage_GetReservationsRequest__Output } from '../reservationPackage/GetReservationsRequest';
import type { ReservationResponse as _reservationPackage_ReservationResponse, ReservationResponse__Output as _reservationPackage_ReservationResponse__Output } from '../reservationPackage/ReservationResponse';
import type { ReservationsResponse as _reservationPackage_ReservationsResponse, ReservationsResponse__Output as _reservationPackage_ReservationsResponse__Output } from '../reservationPackage/ReservationsResponse';
import type { UpdateReservationRequest as _reservationPackage_UpdateReservationRequest, UpdateReservationRequest__Output as _reservationPackage_UpdateReservationRequest__Output } from '../reservationPackage/UpdateReservationRequest';

export interface ReservationServiceClient extends grpc.Client {
  CreateReservation(argument: _reservationPackage_CreateReservationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reservationPackage_ReservationResponse__Output>): grpc.ClientUnaryCall;
  CreateReservation(argument: _reservationPackage_CreateReservationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reservationPackage_ReservationResponse__Output>): grpc.ClientUnaryCall;
  CreateReservation(argument: _reservationPackage_CreateReservationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reservationPackage_ReservationResponse__Output>): grpc.ClientUnaryCall;
  CreateReservation(argument: _reservationPackage_CreateReservationRequest, callback: grpc.requestCallback<_reservationPackage_ReservationResponse__Output>): grpc.ClientUnaryCall;
  createReservation(argument: _reservationPackage_CreateReservationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reservationPackage_ReservationResponse__Output>): grpc.ClientUnaryCall;
  createReservation(argument: _reservationPackage_CreateReservationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reservationPackage_ReservationResponse__Output>): grpc.ClientUnaryCall;
  createReservation(argument: _reservationPackage_CreateReservationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reservationPackage_ReservationResponse__Output>): grpc.ClientUnaryCall;
  createReservation(argument: _reservationPackage_CreateReservationRequest, callback: grpc.requestCallback<_reservationPackage_ReservationResponse__Output>): grpc.ClientUnaryCall;
  
  DeleteReservation(argument: _reservationPackage_DeleteReservationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reservationPackage_Empty__Output>): grpc.ClientUnaryCall;
  DeleteReservation(argument: _reservationPackage_DeleteReservationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reservationPackage_Empty__Output>): grpc.ClientUnaryCall;
  DeleteReservation(argument: _reservationPackage_DeleteReservationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reservationPackage_Empty__Output>): grpc.ClientUnaryCall;
  DeleteReservation(argument: _reservationPackage_DeleteReservationRequest, callback: grpc.requestCallback<_reservationPackage_Empty__Output>): grpc.ClientUnaryCall;
  deleteReservation(argument: _reservationPackage_DeleteReservationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reservationPackage_Empty__Output>): grpc.ClientUnaryCall;
  deleteReservation(argument: _reservationPackage_DeleteReservationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reservationPackage_Empty__Output>): grpc.ClientUnaryCall;
  deleteReservation(argument: _reservationPackage_DeleteReservationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reservationPackage_Empty__Output>): grpc.ClientUnaryCall;
  deleteReservation(argument: _reservationPackage_DeleteReservationRequest, callback: grpc.requestCallback<_reservationPackage_Empty__Output>): grpc.ClientUnaryCall;
  
  GetPlumberAppointments(argument: _reservationPackage_GetPlumberAppointmentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reservationPackage_GetPlumberAppointmentsResponse__Output>): grpc.ClientUnaryCall;
  GetPlumberAppointments(argument: _reservationPackage_GetPlumberAppointmentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reservationPackage_GetPlumberAppointmentsResponse__Output>): grpc.ClientUnaryCall;
  GetPlumberAppointments(argument: _reservationPackage_GetPlumberAppointmentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reservationPackage_GetPlumberAppointmentsResponse__Output>): grpc.ClientUnaryCall;
  GetPlumberAppointments(argument: _reservationPackage_GetPlumberAppointmentsRequest, callback: grpc.requestCallback<_reservationPackage_GetPlumberAppointmentsResponse__Output>): grpc.ClientUnaryCall;
  getPlumberAppointments(argument: _reservationPackage_GetPlumberAppointmentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reservationPackage_GetPlumberAppointmentsResponse__Output>): grpc.ClientUnaryCall;
  getPlumberAppointments(argument: _reservationPackage_GetPlumberAppointmentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reservationPackage_GetPlumberAppointmentsResponse__Output>): grpc.ClientUnaryCall;
  getPlumberAppointments(argument: _reservationPackage_GetPlumberAppointmentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reservationPackage_GetPlumberAppointmentsResponse__Output>): grpc.ClientUnaryCall;
  getPlumberAppointments(argument: _reservationPackage_GetPlumberAppointmentsRequest, callback: grpc.requestCallback<_reservationPackage_GetPlumberAppointmentsResponse__Output>): grpc.ClientUnaryCall;
  
  GetReservation(argument: _reservationPackage_GetReservationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reservationPackage_ReservationResponse__Output>): grpc.ClientUnaryCall;
  GetReservation(argument: _reservationPackage_GetReservationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reservationPackage_ReservationResponse__Output>): grpc.ClientUnaryCall;
  GetReservation(argument: _reservationPackage_GetReservationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reservationPackage_ReservationResponse__Output>): grpc.ClientUnaryCall;
  GetReservation(argument: _reservationPackage_GetReservationRequest, callback: grpc.requestCallback<_reservationPackage_ReservationResponse__Output>): grpc.ClientUnaryCall;
  getReservation(argument: _reservationPackage_GetReservationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reservationPackage_ReservationResponse__Output>): grpc.ClientUnaryCall;
  getReservation(argument: _reservationPackage_GetReservationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reservationPackage_ReservationResponse__Output>): grpc.ClientUnaryCall;
  getReservation(argument: _reservationPackage_GetReservationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reservationPackage_ReservationResponse__Output>): grpc.ClientUnaryCall;
  getReservation(argument: _reservationPackage_GetReservationRequest, callback: grpc.requestCallback<_reservationPackage_ReservationResponse__Output>): grpc.ClientUnaryCall;
  
  GetReservations(argument: _reservationPackage_GetReservationsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reservationPackage_ReservationsResponse__Output>): grpc.ClientUnaryCall;
  GetReservations(argument: _reservationPackage_GetReservationsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reservationPackage_ReservationsResponse__Output>): grpc.ClientUnaryCall;
  GetReservations(argument: _reservationPackage_GetReservationsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reservationPackage_ReservationsResponse__Output>): grpc.ClientUnaryCall;
  GetReservations(argument: _reservationPackage_GetReservationsRequest, callback: grpc.requestCallback<_reservationPackage_ReservationsResponse__Output>): grpc.ClientUnaryCall;
  getReservations(argument: _reservationPackage_GetReservationsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reservationPackage_ReservationsResponse__Output>): grpc.ClientUnaryCall;
  getReservations(argument: _reservationPackage_GetReservationsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reservationPackage_ReservationsResponse__Output>): grpc.ClientUnaryCall;
  getReservations(argument: _reservationPackage_GetReservationsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reservationPackage_ReservationsResponse__Output>): grpc.ClientUnaryCall;
  getReservations(argument: _reservationPackage_GetReservationsRequest, callback: grpc.requestCallback<_reservationPackage_ReservationsResponse__Output>): grpc.ClientUnaryCall;
  
  UpdateReservation(argument: _reservationPackage_UpdateReservationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reservationPackage_ReservationResponse__Output>): grpc.ClientUnaryCall;
  UpdateReservation(argument: _reservationPackage_UpdateReservationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reservationPackage_ReservationResponse__Output>): grpc.ClientUnaryCall;
  UpdateReservation(argument: _reservationPackage_UpdateReservationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reservationPackage_ReservationResponse__Output>): grpc.ClientUnaryCall;
  UpdateReservation(argument: _reservationPackage_UpdateReservationRequest, callback: grpc.requestCallback<_reservationPackage_ReservationResponse__Output>): grpc.ClientUnaryCall;
  updateReservation(argument: _reservationPackage_UpdateReservationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reservationPackage_ReservationResponse__Output>): grpc.ClientUnaryCall;
  updateReservation(argument: _reservationPackage_UpdateReservationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reservationPackage_ReservationResponse__Output>): grpc.ClientUnaryCall;
  updateReservation(argument: _reservationPackage_UpdateReservationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reservationPackage_ReservationResponse__Output>): grpc.ClientUnaryCall;
  updateReservation(argument: _reservationPackage_UpdateReservationRequest, callback: grpc.requestCallback<_reservationPackage_ReservationResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface ReservationServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateReservation: grpc.handleUnaryCall<_reservationPackage_CreateReservationRequest__Output, _reservationPackage_ReservationResponse>;
  
  DeleteReservation: grpc.handleUnaryCall<_reservationPackage_DeleteReservationRequest__Output, _reservationPackage_Empty>;
  
  GetPlumberAppointments: grpc.handleUnaryCall<_reservationPackage_GetPlumberAppointmentsRequest__Output, _reservationPackage_GetPlumberAppointmentsResponse>;
  
  GetReservation: grpc.handleUnaryCall<_reservationPackage_GetReservationRequest__Output, _reservationPackage_ReservationResponse>;
  
  GetReservations: grpc.handleUnaryCall<_reservationPackage_GetReservationsRequest__Output, _reservationPackage_ReservationsResponse>;
  
  UpdateReservation: grpc.handleUnaryCall<_reservationPackage_UpdateReservationRequest__Output, _reservationPackage_ReservationResponse>;
  
}

export interface ReservationServiceDefinition extends grpc.ServiceDefinition {
  CreateReservation: MethodDefinition<_reservationPackage_CreateReservationRequest, _reservationPackage_ReservationResponse, _reservationPackage_CreateReservationRequest__Output, _reservationPackage_ReservationResponse__Output>
  DeleteReservation: MethodDefinition<_reservationPackage_DeleteReservationRequest, _reservationPackage_Empty, _reservationPackage_DeleteReservationRequest__Output, _reservationPackage_Empty__Output>
  GetPlumberAppointments: MethodDefinition<_reservationPackage_GetPlumberAppointmentsRequest, _reservationPackage_GetPlumberAppointmentsResponse, _reservationPackage_GetPlumberAppointmentsRequest__Output, _reservationPackage_GetPlumberAppointmentsResponse__Output>
  GetReservation: MethodDefinition<_reservationPackage_GetReservationRequest, _reservationPackage_ReservationResponse, _reservationPackage_GetReservationRequest__Output, _reservationPackage_ReservationResponse__Output>
  GetReservations: MethodDefinition<_reservationPackage_GetReservationsRequest, _reservationPackage_ReservationsResponse, _reservationPackage_GetReservationsRequest__Output, _reservationPackage_ReservationsResponse__Output>
  UpdateReservation: MethodDefinition<_reservationPackage_UpdateReservationRequest, _reservationPackage_ReservationResponse, _reservationPackage_UpdateReservationRequest__Output, _reservationPackage_ReservationResponse__Output>
}
