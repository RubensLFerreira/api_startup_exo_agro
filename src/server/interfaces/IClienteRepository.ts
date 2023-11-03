// import { cliente } from '@prisma/client';

export interface IClienteRepository {
  getAll(propriedade: number, cultivo: string, problema: string, notificacao: string, usuario_id: number, usuario: string, visita: string): Promise<{ id: number; propriedade: number | null; cultivo: string | null; problema: string | null; notificacao: string | null; usuario_id: number; }[]>;
}