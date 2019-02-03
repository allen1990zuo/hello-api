# hello-api
## Environment Requirement
1. docker --version 1.12.3
2. docker-compose --version version 1.81
## Run
1. cd root path
2. docker-compose up -d
## Check database
1. docker ps get the mongo container id
2. run docker exec -it {container-id} bash
3. run mongo
4. run use hello-app
5. run db.users.find()
## Unit test
1. start mongo process
2. cd root path
3. run npm test
