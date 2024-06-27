### Set up Minio
- Create a bucket ('test') in minio using minio web-client
- Create a folder or path ('informal')
- Upload a file ('informal_by_occupation_2019.csv') in that folder

### Creating Schema in Trino using Trino CLI or DBeaver
```CREATE SCHEMA minio.test WITH (location = 's3a://test/');```
This is where your newly created schema will be located. 

### Create a table from file
```
CREATE TABLE minio.test.informal_occupation (
    "Occupation" VARCHAR,
    "Informal Employment" VARCHAR,
    "Formal Employment" VARCHAR,
    "Total" VARCHAR,
    "Informal Employment (%)" VARCHAR,
    "Formal Employment (%)" VARCHAR
)
WITH (
    external_location = 's3a://test/informal',
    format = 'CSV',
    skip_header_line_count = 1
);
```
This will create a table with the external_location pointing to your file path in minio.

### Create View from the table for superset
Since Trino only supports VARCHAR type for CSV, we need to create a view that cast these fields to integer for superset to do visualization.
```
CREATE VIEW minio.test.informal_occupation_cleaned AS
SELECT
    "Occupation" AS "Occupation",
    CAST("Informal Employment"AS INT) AS "Informal Employment",
    CAST("Formal Employment" AS INT) AS "Formal Employment",
    CAST("Total" AS INT) AS "Total",
    CAST("Informal Employment (%)" AS DOUBLE) AS "Informal Employment (%)",
    CAST("Formal Employment (%)" AS DOUBLE) AS "Formal Employment (%)"
FROM minio.test.informal_occupation;
```

### Log into superset web client on port 8088
- username: admin, password: admin
- Connect to a database, select trino
- Paste this into the SQL Alchemy URI
```trino://admin@trino:8080/minio```
- Click test connection, and click connect

### Now you can create a datasets and chart using your newly created dataset
- Create a new dataset, select trino, test, and so on.
### Install Trino Client
```pip install trino```
