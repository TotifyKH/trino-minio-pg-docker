### Install Trino Client
```pip install trino```

### Set up Minio
- Create a bucket in minio using minio client
- Create a folder
- Upload a file in that folder
### Creating Schema in Trino
```CREATE SCHEMA minio.test WITH (location = 's3a://test/');```
This is where your newly created schema will be located. 
### Create a table from file
```
CREATE TABLE minio.test.exchange_rate (
    "Date" VARCHAR,
    "Purchase" VARCHAR,
    "Sale" VARCHAR,
    "Midpoint" VARCHAR,
    "Exchange Rate" VARCHAR,
    "Spread Market day(X-1)over OER day X (midpoint)" VARCHAR
)
WITH (
    external_location = 's3a://test/nbc_exchange_rate',
    format = 'CSV'
);
```
Create a table with the external_location pointing to your file path in minio.

