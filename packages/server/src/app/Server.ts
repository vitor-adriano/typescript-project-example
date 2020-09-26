import cors from "cors";
import express from "express";
import http from "http";

import "@App/Database";
import { applicationRoutes } from "@Routes/application";

class Server {
  protected app: express.Application;

  protected http: http.Server;

  constructor() {
    this.app = express();
    this.http = http.createServer(this.app);

    this.setGlobalMiddlewares();
    this.setRoutes();
  }

  protected setGlobalMiddlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  protected setRoutes(): void {
    this.app.use("/api/example", applicationRoutes);
  }

  public run(port: any): void {
    this.http.listen(port);
  }
}

export { Server };
