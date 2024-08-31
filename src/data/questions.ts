export interface IQuestionOption {
  optionId: string
  optionLabel: string
}

export interface IQuestion {
  questionId: string
  questionLabel: string
  questionOptions: IQuestionOption[]
  questionAnswer: string
}

const questionsData: IQuestion[] = [
  {
    questionId: 'q1',
    questionLabel: 'O que são furacões?',
    questionOptions: [
      { optionId: 'q1_o1', optionLabel: 'Ventos giratórios com tempestades.' },
      { optionId: 'q1_o2', optionLabel: 'Tremores de terra.' },
      { optionId: 'q1_o3', optionLabel: 'Ventos lineares.' },
      { optionId: 'q1_o4', optionLabel: 'Tempestades de areia.' }
    ],
    questionAnswer: 'q1_o1'
  },
  {
    questionId: 'q2',
    questionLabel: 'Como os furacões se formam?',
    questionOptions: [
      { optionId: 'q2_o1', optionLabel: 'Evaporação de rios.' },
      { optionId: 'q2_o2', optionLabel: 'Baixa pressão e água quente.' },
      { optionId: 'q2_o3', optionLabel: 'Alta pressão e água fria.' },
      { optionId: 'q2_o4', optionLabel: 'Encontro de ventos frios e quentes.' }
    ],
    questionAnswer: 'q2_o2'
  },
  {
    questionId: 'q3',
    questionLabel: 'Quais são os danos causados por furacões?',
    questionOptions: [
      { optionId: 'q3_o1', optionLabel: 'Derrubar prédios.' },
      { optionId: 'q3_o2', optionLabel: 'Apenas chuvas leves.' },
      { optionId: 'q3_o3', optionLabel: 'Molhar ruas.' },
      {
        optionId: 'q3_o4',
        optionLabel: 'Quebrar galhos e danificar telhados.'
      }
    ],
    questionAnswer: 'q3_o4'
  },
  {
    questionId: 'q4',
    questionLabel: 'Onde os furacões ocorrem mais?',
    questionOptions: [
      { optionId: 'q4_o1', optionLabel: 'Atlântico e Pacífico Tropicais.' },
      { optionId: 'q4_o2', optionLabel: 'Oceano Índico.' },
      { optionId: 'q4_o3', optionLabel: 'Regiões desérticas.' },
      { optionId: 'q4_o4', optionLabel: 'Pólos Norte e Sul.' }
    ],
    questionAnswer: 'q4_o1'
  },
  {
    questionId: 'q5',
    questionLabel: 'O que provoca os furacões?',
    questionOptions: [
      { optionId: 'q5_o1', optionLabel: 'Evaporação de lagos.' },
      { optionId: 'q5_o2', optionLabel: 'Ventos em regiões temperadas.' },
      { optionId: 'q5_o3', optionLabel: 'Água do mar quente.' },
      { optionId: 'q5_o4', optionLabel: 'Atividade vulcânica.' }
    ],
    questionAnswer: 'q5_o3'
  },
  {
    questionId: 'q6',
    questionLabel: 'Por que não há furacões no Brasil?',
    questionOptions: [
      { optionId: 'q6_o1', optionLabel: 'Linha do Equador impede furacões.' },
      { optionId: 'q6_o2', optionLabel: 'Brasil está longe dos oceanos.' },
      { optionId: 'q6_o3', optionLabel: 'Atividade sísmica impede furacões.' },
      {
        optionId: 'q6_o4',
        optionLabel: 'Água do mar não é quente o suficiente.'
      }
    ],
    questionAnswer: 'q6_o4'
  },
  {
    questionId: 'q7',
    questionLabel: 'Como sobreviver a um furacão?',
    questionOptions: [
      { optionId: 'q7_o1', optionLabel: 'Observe o furacão na janela.' },
      { optionId: 'q7_o2', optionLabel: 'Fique longe de janelas.' },
      { optionId: 'q7_o3', optionLabel: 'Saia de casa.' },
      { optionId: 'q7_o4', optionLabel: 'Suba no telhado.' }
    ],
    questionAnswer: 'q7_o2'
  },
  {
    questionId: 'q8',
    questionLabel: 'Quais itens são essenciais durante um furacão?',
    questionOptions: [
      { optionId: 'q8_o1', optionLabel: 'Comida, água e lanternas.' },
      { optionId: 'q8_o2', optionLabel: 'Livros e revistas.' },
      { optionId: 'q8_o3', optionLabel: 'Brinquedos e jogos.' },
      { optionId: 'q8_o4', optionLabel: 'Roupas elegantes.' }
    ],
    questionAnswer: 'q8_o1'
  }
]

export { questionsData }
