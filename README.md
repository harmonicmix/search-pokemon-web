# search-pokemon-web
This is a search-pokemon-web Frontend using Nextjs and Material ui.

# How to run project
- make sure search-pokemon-api backend and database is running [search-pokemon-api](https://github.com/harmonicmix/search-pokemon-api).
- install dependency
```
yarn install 
```
- config .env.local for project
```
API_ENDPOINT=<YOUR API BACKEND ENDPOINT> 
NEXT_PUBLIC_API_ENDPOINT=<YOUR API BACKEND ENDPOINT> 
```
- run project
```
yarn dev 
```

# Run by Docker
- config Dockerfile
```
ENV API_ENDPOINT=<YOUR API BACKEND ENDPOINT> 
ENV NEXT_PUBLIC_API_ENDPOINT=<YOUR API BACKEND ENDPOINT>
```
- create docker build
```
docker build -t search-pokemons-web .
```
- run docker
```
docker run -d -p 3000:3000 --name search-pokemons-web search-pokemons-web
```


