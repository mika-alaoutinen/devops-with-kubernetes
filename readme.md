# Devops With Kubernetes

A University of Helsinki [MOOC](https://devopswithkubernetes.com/).

---

## k3d commands

Creating a cluster with 2 agents:
```
k3d cluster create -a 2
```

### Managing a cluster
```
k3d cluster start
k3d cluster stop
k3d cluster delete
```

---

## Kubernetes commands

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
