# Devops With Kubernetes

A University of Helsinki [MOOC](https://devopswithkubernetes.com/).

---

## k3d commands

Creating a cluster with 2 agents:
> k3d cluster create -a 2

Stopping a cluster
> k3d cluster stop

Deleting a cluster
> k3d cluster delete

---

## Kubernetes commands

Creating a deployment
> kubectl create deployment deployment-name --image=image-tag

Creating a deployment with a yaml file
> kubectl apply -f manifests/deployment.yaml

Checking deployments:
> kubectl get deployments

Checking pods:
> kubectl get pods

Checking logs:
> kubectl logs -f deployment-id

Delete a deployment
> kubectl delete deployments.apps deployment-name
