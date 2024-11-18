import { LegalDocument, Analysis } from './types';

export const mockAnalysis: Analysis = {
  summary: "Processo trabalhista envolvendo reclamação de horas extras não pagas e assédio moral. O reclamante alega jornada excessiva sem compensação adequada durante período de 2 anos, além de tratamento degradante por parte da supervisão direta. Documentação apresentada inclui registros de ponto inconsistentes e testemunhas do ambiente de trabalho hostil.",
  riskLevel: "high",
  successProbability: 75,
  keyPoints: [
    "Horas extras não registradas nem pagas durante 24 meses",
    "Assédio moral sistemático por parte da supervisão",
    "Ausência de intervalo intrajornada documentada",
    "Documentação de ponto com indícios de adulteração",
    "Múltiplas testemunhas disponíveis",
    "Evidências de adoecimento ocupacional"
  ],
  recommendations: [
    "Solicitar perícia técnica nos registros de ponto eletrônico",
    "Reunir depoimentos de outros funcionários sobre o assédio",
    "Apresentar emails e mensagens que comprovem as exigências de horas extras",
    "Requerer danos morais com base na conduta abusiva documentada",
    "Solicitar perícia médica para comprovar o nexo causal do adoecimento",
    "Apresentar registros de câmeras de segurança do período"
  ],
  relevantLaws: [
    {
      reference: "CLT Art. 59",
      description: "Regulamentação de horas extras e sua remuneração",
      articles: ["§1º", "§2º", "§3º"]
    },
    {
      reference: "CLT Art. 71",
      description: "Obrigatoriedade do intervalo intrajornada",
      articles: ["caput", "§4º"]
    },
    {
      reference: "CLT Art. 223-C",
      description: "Dano extrapatrimonial e honra do trabalhador",
      articles: ["caput"]
    }
  ],
  precedents: [
    {
      case: "TST-RR-1234-56.2019.5.01.0001",
      court: "TST - 3ª Turma",
      date: "2023-08-15",
      relevance: "Estabelece jurisprudência sobre caracterização de assédio moral organizacional",
      decision: "Condenação por danos morais mantida. Valor majorado para R$ 50.000,00"
    },
    {
      case: "TST-AIRR-7890-12.2018.5.02.0003",
      court: "TST - 5ª Turma",
      date: "2023-06-22",
      relevance: "Define parâmetros para indenização por horas extras habituais não pagas",
      decision: "Mantida condenação ao pagamento de horas extras com adicional de 50% e reflexos"
    },
    {
      case: "TRT2-RO-0001234-12.2022.5.02.0043",
      court: "TRT-2 - 4ª Turma",
      date: "2023-11-30",
      relevance: "Caso similar com mesma empresa ré",
      decision: "Procedência dos pedidos de horas extras e danos morais"
    }
  ],
  suggestedDocuments: [
    "Ata de audiência inicial",
    "Contestação da reclamada",
    "Relatório de perícia técnica",
    "Termo de depoimento das testemunhas",
    "Laudo médico pericial",
    "Cálculos de liquidação"
  ],
  estimatedTimeframe: "12 a 18 meses até sentença de 1º grau",
  estimatedCosts: [
    {
      description: "Honorários periciais técnicos",
      value: 3000
    },
    {
      description: "Honorários periciais médicos",
      value: 2500
    },
    {
      description: "Custas processuais estimadas",
      value: 1500
    }
  ]
};