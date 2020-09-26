import mongoose from "mongoose";

import { IExampleSchema } from "./Contracts/Example";

const ExampleSchema = new mongoose.Schema(
  {
    title: String,
    content: String
  },
  {
    timestamps: true
  }
);

const Example = mongoose.model<IExampleSchema>("Example", ExampleSchema);

export { Example };
