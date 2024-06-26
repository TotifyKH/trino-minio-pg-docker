## minio + trino + postgresql + hive set up 
```docker compose up -d --build```

## run superset init.sh and example.sh(Optional)

### Run Trino CLI from container
```docker container exec -it ${TRINO_CONTAINER_NAME} trino```