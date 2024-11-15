import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { loginSchema, RegisterSchema } from "../schemas";



const app = new Hono()
    .post("/login",
        zValidator("json", loginSchema),
        (c) => {
            const { email, password } = c.req.valid("json");
            return c.json({ email, password });
        })
    .post("/register",
        zValidator("json", RegisterSchema),
        (c) => {
            const { name, email, password } = c.req.valid("json");
            return c.json({
                name,
                email,
                password,
            })
        }
    )

export default app;