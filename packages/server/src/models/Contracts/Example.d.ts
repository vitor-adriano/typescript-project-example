import { Document, SchemaTimestampsConfig } from "mongoose";

export interface IExampleSchema extends Document, SchemaTimestampsConfig {
  title: string;
  content: string;
}
