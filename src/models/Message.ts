import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface MessageAttributes {
  id: number;
  from?: number;
  target_id?: number;
  media?: string;
  message?: string;
}

export type MessagePk = "id";
export type MessageId = Message[MessagePk];
export type MessageCreationAttributes = Optional<MessageAttributes, MessagePk>;

export class Message extends Model<MessageAttributes, MessageCreationAttributes> implements MessageAttributes {
  id!: number;
  from?: number;
  target_id?: number;
  media?: string;
  message?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Message {
    Message.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
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
      type: DataTypes.STRING(255),
      allowNull: true
    },
    message: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Message',
    timestamps: false,
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
  return Message;
  }
}
