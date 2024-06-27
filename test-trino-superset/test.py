import trino
import time
from trino.auth import BasicAuthentication

# Trino connection details
TRINO_HOST = 'localhost'
TRINO_PORT = 8080
TRINO_USER = 'admin'  # Replace with your Trino username if different
TRINO_CATALOG = 'minio'
TRINO_SCHEMA = 'test'
TRINO_TABLE = 'informal'

def query_trino():
    # Create a Trino connection
    conn = trino.dbapi.connect(
        host=TRINO_HOST,
        port=TRINO_PORT,
        user=TRINO_USER,
        catalog=TRINO_CATALOG,
        schema=TRINO_SCHEMA,
        http_scheme='http',  # or 'https' if you have SSL configured
        # authentication=BasicAuthentication(TRINO_USER, 'password')  # Uncomment if using basic auth
    )

    # Create a cursor
    cur = conn.cursor()

    # Execute the query and measure the time taken
    query = f'SELECT * FROM {TRINO_TABLE}'
    
    start_time = time.time()
    cur.execute(query)
    rows = cur.fetchall()
    end_time = time.time()
    
    # Calculate the number of rows and the time taken
    num_customers = len(rows)
    time_taken = end_time - start_time

    # Print the results
    print(f'Number of rows: {num_customers}')
    print(f'Time taken to query: {time_taken:.5f} seconds')

    # Close the cursor and connection
    cur.close()
    conn.close()

if __name__ == '__main__':
    query_trino()
