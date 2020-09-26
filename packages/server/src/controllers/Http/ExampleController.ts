import { Request, Response } from "express";

import { Example } from "@Models/Example";

class ExampleController {
  public async index(req: Request, res: Response): Promise<Response> {
    const data = await Example.find();

    return res.json({
      success: true,
      message: "An example method.",
      data
    });
  }
}

export { ExampleController };
