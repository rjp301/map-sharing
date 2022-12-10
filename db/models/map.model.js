import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define("map", {
    name: { type: DataTypes.STRING, allowNull: false },
    description: DataTypes.STRING,
  });
};
