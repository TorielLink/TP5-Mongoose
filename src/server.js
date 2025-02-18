import Fastify from "fastify";

const port = 3000;

const fastify = Fastify({ logger: true });

fastify.listen({ port }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  fastify.log.info(`Fastify is listening on port: ${address}`);
});
