import { connect, ConnectOptions } from "mongoose";
import LogService from "../CoreService/LogService/LogService";
import dotenv from "dotenv";
dotenv.config();

interface MongosseOptions extends ConnectOptions {
  useNewUrlParser: boolean;
  useCreateIndex: boolean;
  useUnifiedTopology: boolean;
}

class MongoConnection {
  private url: string = process.env.MONGODB ?? "no connection";
  private async connectToAtlas() {
    const connectionParams: MongosseOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };
    await connect(this.url, connectionParams, async () => {
      try {
        LogService.logger("success", "Connected to Database");
      } catch (err) {
        LogService.logger(
          "error",
          `Error connecting to the database. \n${err}`
        );
      }
    });
  }

  async enableConnnection() {
    await this.connectToAtlas();
  }
}

export default new MongoConnection();
