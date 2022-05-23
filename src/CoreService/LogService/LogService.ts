import chalk from 'chalk'
import { ErrorEnums } from '../types/enums';

class LogService {

  static logMessages = {
    INIT: "Init",
    END_SUCCESS: "End Succes",
  };

  static getChalkStyle(reference:string, log:string) {
    switch (reference) {
      case ErrorEnums.ERROR:
        return chalk.bgRed(chalk.white(log));
      case ErrorEnums.WARN:
        return chalk.bgYellow(chalk.black(log));
      default:
        return chalk.bgGreen(chalk.black(log));
    }
  }

  static logger(reference:string, log:string) {
    console.warn(this.getChalkStyle(reference, log));
  }
}

export default LogService
