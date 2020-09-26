import mongoose from "mongoose";

const host = "localhost";
const port = "27017";
const db = "example";

mongoose.connect(`mongodb://${host}:${port}/${db}`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
});
