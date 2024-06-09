// Original file: proto/inventory.proto


export interface ReservePartsRequest {
  'reservationId'?: (string);
  'partsToReserve'?: ({[key: string]: number});
}

export interface ReservePartsRequest__Output {
  'reservationId'?: (string);
  'partsToReserve'?: ({[key: string]: number});
}
