import { test, beforeAll, afterAll } from "vitest";
import request from "supertest";
import { app } from "../src/app";

beforeAll(async () => {
  await app.ready();
});

afterAll(async () => {
  await app.close();
});

test("user can crate a new transaction", async () => {
  await request(app.server)
    .post("/transactions")
    .send({
      title: "New Transaction",
      amount: 500,
      type: "credit",
    })
    .expect(201);
});
