// Original file: proto/reservation.proto

import type { PartInfo as _reservationPackage_PartInfo, PartInfo__Output as _reservationPackage_PartInfo__Output } from '../reservationPackage/PartInfo';

export interface AppointmentInfo {
  'reservationId'?: (string);
  'customerId'?: (string);
  'plumberId'?: (string);
  'repairType'?: (string);
  'description'?: (string);
  'status'?: (string);
  'date'?: (string);
  'availableParts'?: (_reservationPackage_PartInfo)[];
  'unavailableParts'?: (_reservationPackage_PartInfo)[];
}

export interface AppointmentInfo__Output {
  'reservationId'?: (string);
  'customerId'?: (string);
  'plumberId'?: (string);
  'repairType'?: (string);
  'description'?: (string);
  'status'?: (string);
  'date'?: (string);
  'availableParts'?: (_reservationPackage_PartInfo__Output)[];
  'unavailableParts'?: (_reservationPackage_PartInfo__Output)[];
}
