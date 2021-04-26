import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface MessagesAttributes {
  id: number;
  from?: number;
  target_id?: number;
  media?: number;
  message?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type MessagesPk = "id";
export type MessagesId = Messages[MessagesPk];
export type MessagesCreationAttributes = Optional<MessagesAttributes, MessagesPk>;

export class Messages extends Model<MessagesAttributes, MessagesCreationAttributes> implements MessagesAttributes {
  id!: number;
  from?: number;
  target_id?: number;
  media?: number;
  message?: string;
  createdAt!: Date;
  updatedAt!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Messages {
    Messages.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    from: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    target_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    media: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    message: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Messages',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return Messages;
  }
}
