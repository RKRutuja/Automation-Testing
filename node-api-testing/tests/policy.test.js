const request = require("supertest");
const app = require("../app");

describe("Policy API", () =>{
    test("GET /api/policies should return all policies", async () => {
         
        const response =await request(app).get("/api/policies");
        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBe(2);
    });

    test("GET /api/policies should return policies", async () => {

        const response = await request(app).get("/api/policies");
        expect(response.statusCode).toBe(200);
        expect(response.body[0].name).toBe("Jeevan Labh");
    });

    test("GET /api/policies/1 should return policy", async () => {

        const response = await request(app).get("/api/policies/1");
        expect(response.statusCode).toBe(200);
        expect(response.body.id).toBe(1);
        expect(response.body.name).toBe("Jeevan Labh");
    });

    test("GET invalid policy should return 404", async () => {

        const response = await request(app).get("/api/policies/999");
        expect(response.statusCode).toBe(404);
        expect(response.body.message).toBe("Policy not found");
    });

    test("POST /api/policies should create policy", async () => {

        const newPolicy = {
              name: "Jeevan Suraksha",
              premium: 18000
              };

        const response = await request(app).post("/api/policies").send(newPolicy);
        expect(response.statusCode).toBe(201);
        expect(response.body.name).toBe("Jeevan Suraksha");
    });

    test("PUT /api/policies/1 should update policy", async () => {

        const updatedPolicy = {
            name: "Jeevan Labh Updated",
            premium: 20000
        };

        const response = await request(app).put("/api/policies/1").send(updatedPolicy);
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe("Jeevan Labh Updated");
    });

    test("DELETE /api/policies/3 should delete policy", async () => {

        const response = await request(app).delete("/api/policies/3");
        expect(response.statusCode).toBe(204);
    });

});

