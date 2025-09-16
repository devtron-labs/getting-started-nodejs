# getting-started-nodejs
Hii
> Check out this video on Youtube which demonstrates how to deploy this node.js microservice on a Kubernetes cluster using Devtron:
> 
> [![Demo Video](https://user-images.githubusercontent.com/71125043/162990352-93313d53-0b06-4565-9ed6-a55750002942.png)](https://www.youtube.com/watch?v=9u-pKiWV-tM&t=2s)


This application uses the `node` container image obtained from the [Docker Hub](https://hub.docker.com/_/node/)

## Setup

Clone this repo and cd into the directory:

```
git clone https://github.com/devtron-labs/getting-started-nodejs
cd getting-started-nodejs
```

You can run the sample app while executing this command -

```
node app.js
```

Now point your browser at `http://localhost:8080` to see:

```
{"cities":["Amsterdam","Berlin","New York","San Francisco","Tokyo"]}
```

## Getting started with deploying application through Devtron

Lets see how to deploy a custom nodejs app through Devtron.
Make sure Global Configurations are successfully saved and validated before deploying your application.

**STEP 1**
Login into your Devtron Dashboard, Go to >> Applications >> Create new App. Give an appropriate name to this App, choose the project in which you want to keep the app, and create it.

**STEP 2**
After creating the app, setup the configurations. Copy the repo URL https://github.com/devtron-labs/getting-started-nodejs and paste it the Git repo section of your App. Click save and move to next config.

**STEP 3**
Now choose your Docker build config, the repository where you want to keep your CI build image. Select the container registry from the drop-down.



**STEP 4**
Coming up next is configuring the deployment template. As this is a very simple nodejs application we will be only covering the required the configs.

```
ContainerPort :
    port : 8080
    servicePort : 80
```

`8080` is the port number on which my nodejs application is running.

Set the resource limits & requests as given below -

```
resources:
    limits:
        cpu: "0.5"
        memory: 50Mi
    requests:
        cpu: "0.1"
        memory: 10Mi
```

Now, select the serviceType, keep it as `LoadBalancer`.

```
service:
    type: LoadBalancer
```

**STEP 5**
Now, create a CI/CD workflow for deploying this application. Select the type of pipeline & you can also add “Pre-build” “Post-build” & "Docker build" stages as well. Next add your CD pipeline, by choosing in which environment you want to deploy your app in.

**STEP 6**
You can add or create secrets or configmaps as per your requirement. These values will be automatically mounted with pods and made available as volumes or as env variables as per your selection.

**STEP 7**
That’s it, now trigger your CI pipeline by selecting the latest image and deploy it on your chosen project.

**STEP 8**
After the successful deployment, check out your service manifest for fetching the LoadBalancer URL from the dashboard present in the App Details section.

![](/gifs/fetching_loadbalancer.gif)

**STEP 9**
Use this URL on your browser and you can get the output as.

```
{"cities":["Amsterdam","Berlin","New York","San Francisco","Tokyo"]}
```

Find out a detailed documentation about the configurations from here - https://docs.devtron.ai/devtron/user-guide/creating-application

---


