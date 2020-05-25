import { Request, Response } from 'express';

import CreateCustomerService from '@modules/customers/services/CreateCustomerService';

import { container } from 'tsyringe';

export default class CustomersController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email } = request.body;

      const CreateCostumer = container.resolve(CreateCustomerService);

      const costumer = await CreateCostumer.execute({
        name,
        email,
      });

      return response.json(costumer);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
