# Devops With Kubernetes

A University of Helsinki [MOOC](https://devopswithkubernetes.com/).

---

## Local environment info
I am running Kubernetes with WSL2, which means that probably the most convenient way is to use Kubernetes via Docker Desktop. The course material instructs to use k3d instead.

To use Kubernetes with Docker Desktop, make sure that the Kubernetes context is set up correctly. For me, it should point to `docker-desktop`. Check and set the context like this:

```
kubectl config get-contexts
kubectl config use-context docker-desktop
```

## Troubleshooting
I've had issues with port forwarding not working correctly. After some fiddling around, I got it working. Things I did to make port-forwarding work:
  1. Switch from k3d to Docker Desktop.
  2. Ran `wsl --shutdown` in Powershell.
  3. `Reset Kubernetes Cluster` in Docker Desktop settings.
  4. Reboot PC.

I Don't know which of the above did the trick, but port-forwarding works for now.

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
