import type { Sequelize, Model } from "sequelize";
import { Messages } from "./Messages";
import type { MessagesAttributes, MessagesCreationAttributes } from "./Messages";
import { SequelizeMeta } from "./SequelizeMeta";
import type { SequelizeMetaAttributes, SequelizeMetaCreationAttributes } from "./SequelizeMeta";

export {
  Messages,
  SequelizeMeta,
};

export type {
  MessagesAttributes,
  MessagesCreationAttributes,
  SequelizeMetaAttributes,
  SequelizeMetaCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  Messages.initModel(sequelize);
  SequelizeMeta.initModel(sequelize);


  return {
    Messages: Messages,
    SequelizeMeta: SequelizeMeta,
  };
}
