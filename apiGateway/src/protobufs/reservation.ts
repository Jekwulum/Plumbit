import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ReservationServiceClient as _reservationPackage_ReservationServiceClient, ReservationServiceDefinition as _reservationPackage_ReservationServiceDefinition } from './reservationPackage/ReservationService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  reservationPackage: {
    AppointmentInfo: MessageTypeDefinition
    CreateReservationRequest: MessageTypeDefinition
    DeleteReservationRequest: MessageTypeDefinition
    Empty: MessageTypeDefinition
    GetPlumberAppointmentsRequest: MessageTypeDefinition
    GetPlumberAppointmentsResponse: MessageTypeDefinition
    GetReservationRequest: MessageTypeDefinition
    GetReservationsRequest: MessageTypeDefinition
    PartInfo: MessageTypeDefinition
    ReservationResponse: MessageTypeDefinition
    ReservationService: SubtypeConstructor<typeof grpc.Client, _reservationPackage_ReservationServiceClient> & { service: _reservationPackage_ReservationServiceDefinition }
    ReservationsResponse: MessageTypeDefinition
    UpdateReservationRequest: MessageTypeDefinition
  }
}

