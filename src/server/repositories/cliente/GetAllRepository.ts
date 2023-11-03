import { prisma } from '@/server/database';
import { IClienteRepository } from '@/server/interfaces/IClienteRepository';
import { cliente } from '@prisma/client';

class getAllRepository implements IClienteRepository {
  public async getAll(): Promise<cliente[]> {
    const allclientes = await prisma.cliente.findMany();
    return allclientes;
  }
}

export { getAllRepository };
