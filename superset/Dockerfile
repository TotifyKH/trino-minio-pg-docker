FROM apache/superset:latest
# Switching to root to install the required packages
USER root

# RUN pip install 
RUN pip install sqlalchemy-trino
RUN pip install apache-superset[cors]
# Switching back to using the `superset` user
USER superset