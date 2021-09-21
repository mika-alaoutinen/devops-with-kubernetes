#!/bin/bash
# Installs Prometheus stack on namespace "prometheus"

# Add Prometheus repository
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

# Install Prometheus stack as "prometheus-stack"
helm install prometheus-stack prometheus-community/kube-prometheus-stack -n prometheus

# Port forward Grafana to 3000 on localhost. The service pod has to be ready for this to work.
kubectl -n prometheus port-forward svc/prometheus-stack-grafana 3000:80
