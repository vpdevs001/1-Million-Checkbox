import Redis from "ioredis";

function makeConnection() {
  return new Redis(process.env.REDIS_URL ?? "redis://localhost:6379");
}

export const redis = makeConnection();
export const publisher = makeConnection();
export const subscriber = makeConnection();
