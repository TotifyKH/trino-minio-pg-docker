## minio + trino + postgresql + hive set up 
```docker compose up -d --build```

### Run Trino CLI from container
```docker container exec -it ${TRINO_CONTAINER_NAME} trino```