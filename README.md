# hello-api
## Environment Requirement
1. docker --version 1.12.3
2. docker-compose --version version 1.81
## Run
1. cd root path
2. docker-compose up -d
## Unit test
1. docker ps get the container id
2. run docker exec -it {container-id} bash
3. cd /usr/src/app
4. run npm test
## Check database
1. docker ps get the mongo container id
2. run docker exec -it {container-id} bash
3. run mongo
4. run use hello-app
5. run db.users.find()
