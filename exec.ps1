docker build --rm -t auth0-vue-aschehoug .
docker run -p 3000:3000 --pid=host auth0-vue-aschehoug
