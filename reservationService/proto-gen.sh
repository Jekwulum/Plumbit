#!/bin/bash

python -m grpc_tools.protoc -I. --python_out=src/protobufs --grpc_python_out=src/protobufs *.proto

# python -m grpc_tools.protoc -I. --python_out=src/protobufs --grpc_python_out=src/protobufs inventory.proto
