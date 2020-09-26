import { Router } from "express";

import { ExampleController } from "@Controllers/Http/ExampleController";

const route = Router();

const exampleController = new ExampleController();

route.get("/", exampleController.index);

export { route as applicationRoutes };
