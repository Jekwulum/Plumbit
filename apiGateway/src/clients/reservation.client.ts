import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../protobufs/reservation';

const RESERVATION_SERVICE_PORT = process.env.RESERVATION_SERVICE_PORT || 4002;

const RESERVATION_PROTO_PATH = path.resolve(__dirname, '../../proto/reservation.proto');

const reservationPackageDefinition = protoLoader.loadSync(RESERVATION_PROTO_PATH);
const reservationGrpcObject = (grpc.loadPackageDefinition(reservationPackageDefinition) as unknown) as ProtoGrpcType;

const ReservationClient = new reservationGrpcObject.reservationPackage.ReservationService(`localhost:${RESERVATION_SERVICE_PORT}`, grpc.credentials.createInsecure());

export default { ReservationClient };