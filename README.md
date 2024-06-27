## minio + trino + postgresql + hive set up 
### If you have access to Docker Registry, go ahead and do this command:
```docker compose up -d --build```
### If you don't have access, do this:
- comment out the pre-build images for superset and hive-metastore 
- uncomment the build command in docker compose since you have to build these images yourself
```docker compose up -d --build```

### Initialize Superset
Run the init shell script to initialize your superset
```sh ./superset/init.sh```
Run the example shell script to get example datasets
```sh ./superset/example.sh```

### Log into superset web client on port 8088
- username: admin, password: admin
- Connect to a database, select trino
- Paste this into the SQL Alchemy URI
```trino://admin@trino:8080/minio```
- Click test connection, and click connect

You're all done

### Run Trino CLI from container
```docker container exec -it ${TRINO_CONTAINER_NAME} trino```