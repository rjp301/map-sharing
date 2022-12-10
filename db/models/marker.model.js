import { DataTypes } from "sequelize";

export default (sequelize) => {
  sequelize.define("marker", {
    geometry: { type: DataTypes.GEOMETRY, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    description: DataTypes.STRING,
    complete: DataTypes.BOOLEAN,
  });
};
