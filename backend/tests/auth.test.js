// backend/tests/auth.test.js
const request = require("supertest");
const app = require("../server");
const mongoose = require("mongoose");

describe("Auth API Tests", () => {
  it("should return 400 or 401 if missing email or password", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "", password: "" });

    // accept either 400 (bad request) or 401 (unauthorized) depending on your route
    expect([400, 401]).toContain(res.statusCode);
  });

  // close DB connection so Jest can exit cleanly
  afterAll(async () => {
    // give controllers a chance to finish
    await new Promise((r) => setTimeout(r, 50));
    if (mongoose.connection && mongoose.connection.readyState) {
      await mongoose.disconnect();
    }
  });
});
