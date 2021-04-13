import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { IOrder } from 'modules/database/interfaces/order';
import { Order } from 'modules/database/models/order';

import { OrderRepository } from '../repositories/order';
import { OrderService } from '../services/order';

@ApiTags('Admin: Order')
@Controller('/order')
export class OrderController {
  constructor(private orderRepository: OrderRepository, private orderService: OrderService) {}

  @Post()
  @ApiResponse({ status: 200, type: Order })
  public async create(@Body() model: IOrder) {
    return this.orderService.create(model);
  }

  @Get()
  @ApiResponse({ status: 200, type: [Order] })
  public async list() {
    return this.orderRepository.list();
  }
}
