# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: reservation.proto
# Protobuf Python Version: 5.26.1
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x11reservation.proto\x12\x12reservationPackage\"\xcb\x01\n\x18\x43reateReservationRequest\x12\x16\n\x0ereservation_id\x18\x01 \x01(\t\x12\x13\n\x0b\x63ustomer_id\x18\x02 \x01(\t\x12\x12\n\nplumber_id\x18\x03 \x01(\t\x12\x13\n\x0brepair_type\x18\x04 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x05 \x01(\t\x12\x0e\n\x06status\x18\x06 \x01(\t\x12\x0c\n\x04\x64\x61te\x18\x07 \x01(\t\x12\x12\n\ncreated_at\x18\x08 \x01(\t\x12\x12\n\nupdated_at\x18\t \x01(\t\"/\n\x15GetReservationRequest\x12\x16\n\x0ereservation_id\x18\x01 \x01(\t\"A\n\x16GetReservationsRequest\x12\x13\n\x0b\x63ustomer_id\x18\x01 \x01(\t\x12\x12\n\nplumber_id\x18\x02 \x01(\t\"l\n\x18UpdateReservationRequest\x12\x16\n\x0ereservation_id\x18\x01 \x01(\t\x12\x13\n\x0brepair_type\x18\x02 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x03 \x01(\t\x12\x0e\n\x06status\x18\x04 \x01(\t\"2\n\x18\x44\x65leteReservationRequest\x12\x16\n\x0ereservation_id\x18\x01 \x01(\t\"\xc6\x01\n\x13ReservationResponse\x12\x16\n\x0ereservation_id\x18\x01 \x01(\t\x12\x13\n\x0b\x63ustomer_id\x18\x02 \x01(\t\x12\x12\n\nplumber_id\x18\x03 \x01(\t\x12\x13\n\x0brepair_type\x18\x04 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x05 \x01(\t\x12\x0e\n\x06status\x18\x06 \x01(\t\x12\x0c\n\x04\x64\x61te\x18\x07 \x01(\t\x12\x12\n\ncreated_at\x18\x08 \x01(\t\x12\x12\n\nupdated_at\x18\t \x01(\t\"U\n\x14ReservationsResponse\x12=\n\x0creservations\x18\x01 \x03(\x0b\x32\'.reservationPackage.ReservationResponse\".\n\x17GetRequiredPartsRequest\x12\x13\n\x0brepair_type\x18\x01 \x01(\t\",\n\x18GetRequiredPartsResponse\x12\x10\n\x08part_ids\x18\x01 \x03(\t\"\x0f\n\rEmptyResponse2\xa1\x04\n\x12ReservationService\x12j\n\x11\x43reateReservation\x12,.reservationPackage.CreateReservationRequest\x1a\'.reservationPackage.ReservationResponse\x12\x64\n\x0eGetReservation\x12).reservationPackage.GetReservationRequest\x1a\'.reservationPackage.ReservationResponse\x12g\n\x0fGetReservations\x12*.reservationPackage.GetReservationsRequest\x1a(.reservationPackage.ReservationsResponse\x12j\n\x11UpdateReservation\x12,.reservationPackage.UpdateReservationRequest\x1a\'.reservationPackage.ReservationResponse\x12\x64\n\x11\x44\x65leteReservation\x12,.reservationPackage.DeleteReservationRequest\x1a!.reservationPackage.EmptyResponseb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'reservation_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  DESCRIPTOR._loaded_options = None
  _globals['_CREATERESERVATIONREQUEST']._serialized_start=42
  _globals['_CREATERESERVATIONREQUEST']._serialized_end=245
  _globals['_GETRESERVATIONREQUEST']._serialized_start=247
  _globals['_GETRESERVATIONREQUEST']._serialized_end=294
  _globals['_GETRESERVATIONSREQUEST']._serialized_start=296
  _globals['_GETRESERVATIONSREQUEST']._serialized_end=361
  _globals['_UPDATERESERVATIONREQUEST']._serialized_start=363
  _globals['_UPDATERESERVATIONREQUEST']._serialized_end=471
  _globals['_DELETERESERVATIONREQUEST']._serialized_start=473
  _globals['_DELETERESERVATIONREQUEST']._serialized_end=523
  _globals['_RESERVATIONRESPONSE']._serialized_start=526
  _globals['_RESERVATIONRESPONSE']._serialized_end=724
  _globals['_RESERVATIONSRESPONSE']._serialized_start=726
  _globals['_RESERVATIONSRESPONSE']._serialized_end=811
  _globals['_GETREQUIREDPARTSREQUEST']._serialized_start=813
  _globals['_GETREQUIREDPARTSREQUEST']._serialized_end=859
  _globals['_GETREQUIREDPARTSRESPONSE']._serialized_start=861
  _globals['_GETREQUIREDPARTSRESPONSE']._serialized_end=905
  _globals['_EMPTYRESPONSE']._serialized_start=907
  _globals['_EMPTYRESPONSE']._serialized_end=922
  _globals['_RESERVATIONSERVICE']._serialized_start=925
  _globals['_RESERVATIONSERVICE']._serialized_end=1470
# @@protoc_insertion_point(module_scope)
