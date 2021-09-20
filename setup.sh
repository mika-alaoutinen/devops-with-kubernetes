#!/bin/bash

# Set up k3d cluster
k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2

# Create namespaces
kubectl create ns main
kubectl create ns todo
kubectl create ns argo-rollouts

# Add sealed secrets
kubectl apply -f https://github.com/bitnami-labs/sealed-secrets/releases/download/v0.12.1/controller.yaml

# Add Argo Rollouts
kubectl apply -n argo-rollouts -f https://raw.githubusercontent.com/argoproj/argo-rollouts/stable/manifests/install.yaml
