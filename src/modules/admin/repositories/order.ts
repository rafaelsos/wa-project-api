import { Injectable } from '@nestjs/common';
import { IOrder } from 'modules/database/interfaces/order';
import { Order } from 'modules/database/models/order';
import { Transaction } from 'objection';

@Injectable()
export class OrderRepository {
  public async insert(data: IOrder, transaction?: Transaction): Promise<Order> {
    return Order.query(transaction).insert(data);
  }

  public async findById(id: number, transaction?: Transaction): Promise<Order> {
    return Order.query(transaction)
      .where({ id })
      .first();
  }

  public async list(transaction?: Transaction): Promise<Order[]> {
    const orders = await Order.query(transaction);

    return orders;
  }
}
