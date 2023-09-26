# NodeTestServer1

To deploy in Openshift

1. At the Console select Add and from Git Repository
2. Complete "Import from Git" form with defaults except for:
   - Resource Type: Deployment
   - Create Route (ensure it's selected)
   - TLS: Edge

It creates the following items in OpenShift:

- A Deployment (with a Replica Set and a Pod)
- A BuildConfig (may create a few ConfigMaps)
- A Service
- A Route
- A couple of Secrets (used by the Route Edge TLS)

To see it in action:

1. Navigate to the route and the browser will display Hello World with a timestamp
2. Look at the logs of the Pod and it will show the message New connection with a timestamp
3. Each time you refresh the browser, the timestap is updated both in the browser and the logs
