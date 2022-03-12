# Tv-Shows
Angular + dotnet

## Launch frontend

```sh
cd tv-shows-angular\
```
```sh
ng serve
```

## Launch backend

```sh
cd tv-shows-backend\
```
```sh
dotnet run
```

## Setup docker database
```sh
docker pull mariadb
```
```sh
docker run -d --name mariadb --env MARIADB_USER=root --env MARIADB_ROOT_PASSWORD=password -p 127.0.0.1:3306:3306 mariadb:latest
```
