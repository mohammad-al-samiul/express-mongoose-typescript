import app from "./app";
import mongoose from "mongoose";
import config from "./config";

async function main() {
  try {
    await mongoose.connect(config.database_uri as string);

    app.listen(config.port, () => {
      console.log(`server listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();