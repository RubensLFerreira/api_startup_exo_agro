import { IClienteRepository } from '@/server/interfaces/IClienteRepository';

class GetAllService {
  constructor(
    private GetAllRepository: IClienteRepository
  ) {}

  public async execute(propriedade: number, cultivo: string, problema: string, notificacao: string, usuario_id: number, usuario: string, visita: string) {
    const getAll = await this.GetAllRepository(propriedade, cultivo, problema, notificacao, usuario_id, usuario, visita);
    return getAll;
  }
}

export { GetAllService };