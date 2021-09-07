# Devops With Kubernetes

A University of Helsinki [MOOC](https://devopswithkubernetes.com/).

---

## Local environment info
```
kubectl config get-contexts
kubectl config use-context docker-desktop
```

## Troubleshooting

### Running Kubernetes with Windows PC with WSL2 and Docker Desktop

I've had issues with port forwarding not working correctly. It seems to be a common problem [link](https://github.com/microsoft/WSL/issues/4199). The following band-aid fix has worked for me so far:
  1. Exit Docker Desktop.
  2. Run `wsl --shutdown` in Windows Terminal.
  4. Start Docker Desktop again.

Might also want to try out [this script](https://github.com/microsoft/WSL/issues/4150#issuecomment-504209723) to fix it..?

### Misc commands for debugging

Enter a running pod and run Shell
```
kubectl exec --stdin --tty main-app-dep-7b4695544c-czg4z -c main-app-reader -- /bin/sh
wget -qO - http://google.fi
```

---

## Kubernetes commands

### Basic information about a running cluster
```
kubectl cluster-info
```

### Creating a deployment
```
kubectl create deployment deployment-name --image=image-tag
kubectl apply -f manifests/deployment.yaml
```

### Use `get` to read information
```
kubectl get deployments
kubectl get pods
```

### Use `delete` to delete resources
```
kubectl delete deployments.apps deployment-name
kubectl delete pod pod-id
```

### Read logs
```
kubectl logs -f deployment-id
```

---

## k3d commands

Creating a cluster with 2 agents:
```
k3d cluster create -a 2
k3d cluster create --port '8082:30080@agent[0]' -p 8081:80@loadbalancer --agents 2
```

### Managing a cluster
```
k3d cluster start
k3d cluster stop
k3d cluster delete
```

---

## Helm commands
```
helm ls --all-namespaces
helm install chart --generate-name -n namespace
helm uninstall chart
```

Note: the course material uses deprecated `helm delete`. The correct command is `uninstall`.

---

## Sealed secrets

```
kubectl apply -f https://github.com/bitnami-labs/sealed-secrets/releases/download/v0.12.1/controller.yaml
```
