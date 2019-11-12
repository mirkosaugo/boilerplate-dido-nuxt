frontend-build:
	cd website; \
	npm i; \
	npm run generate;

frontend-dev:
	cd website; \
	npm i; \
	npm run dev;

blueprint-build:
	cd blueprint; \
	npm i;

translation-build:
	cd translation; \
	npm i;

app-build:
	make blueprint-build; \
	make translation-build; \
	make frontend-build;

app-dev:
	make blueprint-build; \
	make translation-build; \
	make frontend-dev;