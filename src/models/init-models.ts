import type { Sequelize, Model } from "sequelize";
import { Message } from "./Message";
import type { MessageAttributes, MessageCreationAttributes } from "./Message";

export {
  Message,
};

export type {
  MessageAttributes,
  MessageCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  Message.initModel(sequelize);


  return {
    Message: Message,
  };
}
