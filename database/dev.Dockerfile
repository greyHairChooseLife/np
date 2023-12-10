FROM "mariadb:latest"

COPY initSQL/*.sql /docker-entrypoint-initdb.d/
