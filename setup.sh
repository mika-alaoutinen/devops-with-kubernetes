#!/bin/bash
# Sets up a k3d cluster

k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2

kubectl create ns main
kubectl create ns todo

kubectl apply -f https://github.com/bitnami-labs/sealed-secrets/releases/download/v0.12.1/controller.yaml
