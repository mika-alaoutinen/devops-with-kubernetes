#!/bin/bash
# Installs Loki stack on namespace "loki"

# Add Grafana repository
helm repo add grafana https://grafana.github.io/helm-charts
helm repo update

# Install Loki stack with custom values as "loki-stack"
helm install loki-stack grafana/loki-stack -f ./loki-stack-values.yaml -n loki

# Get Grafana password and print it to terminal
kubectl get secret -n loki loki-stack-grafana -o jsonpath="{.data.admin-password}" | base64 --decode ; echo

# Port forward Grafana to 3000 on localhost. The service pod has to be ready for this to work.
kubectl port-forward -n loki service/loki-stack-grafana 3000:80
