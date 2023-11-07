import { Model, Table, Column, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import ClientsModel from '../../../clients/infraestructure/models/clientsModel';
import ProductsModel from '../../../products/infraestructure/models/ProductsModel';

@Table({
  tableName: 'orders',
  timestamps: true
})
export class OrderModel extends Model {

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  })
  public id!: number;

  @ForeignKey(() => ClientsModel)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false
  })
  public clientId!: number;

  @BelongsTo(() => ClientsModel)
  public client!: ClientsModel;

  @ForeignKey(() => ProductsModel)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false
  })
  public productId!: number;

  @BelongsTo(() => ProductsModel)
  public product!: ProductsModel;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  public status!: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false
  })
  public totalPrice!: number;

}
