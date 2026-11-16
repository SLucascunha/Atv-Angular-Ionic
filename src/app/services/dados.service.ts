import { Injectable } from '@angular/core';

export interface Noticia { id: number; titulo: string; data: string; resumo: string; }
export interface Acordo {
  id: number; titulo: string; vigencia: string;
  status: 'Vigente' | 'Em negociação'; clausulas: string[];
}

@Injectable({ providedIn: 'root' })
export class DadosService {
  private readonly USUARIO = 'associado@sindados.org.br';
  private readonly SENHA = '123456';
  private autenticado = false;

  noticias: Noticia[] = [
    { id: 1, titulo: 'Assembleia define pauta da campanha salarial 2026',
      data: '10/11/2026', resumo: 'Trabalhadores de TI da Bahia aprovaram as principais reivindicações para a nova data-base.' },
    { id: 2, titulo: 'SINDADOS-BA lança canal mobile para associados',
      data: '03/11/2026', resumo: 'Aplicativo permitirá acompanhar notícias e consultar ACTs e CCTs de forma rápida.' },
    { id: 3, titulo: 'Home office: sindicato debate regras de teletrabalho',
      data: '25/10/2026', resumo: 'Encontro reuniu empresas e representantes para discutir auxílio de internet e jornada.' },
  ];

  acordos: Acordo[] = [
    { id: 1, titulo: 'CCT SINDADOS-BA / SINEPD 2025-2026', vigencia: '2025/2026', status: 'Vigente',
      clausulas: ['Reajuste salarial: 5,2%', 'Vale-alimentação: R$ 45,00/dia', 'Auxílio home office: R$ 100,00/mês'] },
    { id: 2, titulo: 'ACT Empresa X Tecnologia', vigencia: '2025/2026', status: 'Vigente',
      clausulas: ['Reajuste salarial: INPC + 1%', 'Vale-alimentação: R$ 50,00/dia', 'PLR: 2 salários'] },
    { id: 3, titulo: 'ACT Empresa Y Software', vigencia: '2026/2027', status: 'Em negociação',
      clausulas: ['Reajuste proposto: 6%', 'Vale-alimentação proposto: R$ 55,00/dia', 'Banco de horas em discussão'] },
  ];

  login(usuario: string, senha: string): boolean {
    this.autenticado = usuario.trim() === this.USUARIO && senha === this.SENHA;
    return this.autenticado;
  }

  logout(): void { this.autenticado = false; }

  get isAutenticado(): boolean { return this.autenticado; }
}
