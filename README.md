This repo contains the assets and code for the pdxgraphs.me site. The site is built using next.js

## Starting the server

To run the program simply type:

```bash
docker-compose up --build
# or
docker build -t pdx-graph .
docker run -p 3000:3000 pdx-graph
```

This will run the server on localhost port 3000.
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

Current deployment is on an ec2 instance which pulls the git repo and follows the steps above.
The site can then be accesed using the domain address pdxgraphs.me
