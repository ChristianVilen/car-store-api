up:
	docker-compose up -d mongo
	docker-compose up api
# Up silent
upd:
	docker-compose up -d

down:
	docker-compose down

taild:
	docker logs -f --tail 10 car-store-api_mongo_1

tail:
	docker logs -f --tail 10 car-store-api_api_1

status:
	docker ps

inapi:
	docker exec -it car-store-api_api_1 sh

indb:
	docker exec -it car-store-api_mongo_1 bash
