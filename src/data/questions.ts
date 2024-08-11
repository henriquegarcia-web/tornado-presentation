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
      { optionId: 'q2_o1', optionLabel: 'Baixa pressão e água quente.' },
      { optionId: 'q2_o2', optionLabel: 'Alta pressão e água fria.' },
      { optionId: 'q2_o3', optionLabel: 'Evaporação de rios.' },
      { optionId: 'q2_o4', optionLabel: 'Encontro de ventos frios e quentes.' }
    ],
    questionAnswer: 'q2_o1'
  },
  {
    questionId: 'q3',
    questionLabel: 'Quais são os danos causados por furacões?',
    questionOptions: [
      {
        optionId: 'q3_o1',
        optionLabel: 'Quebrar galhos e danificar telhados.'
      },
      { optionId: 'q3_o2', optionLabel: 'Derrubar prédios.' },
      { optionId: 'q3_o3', optionLabel: 'Apenas chuvas leves.' },
      { optionId: 'q3_o4', optionLabel: 'Molhar ruas.' }
    ],
    questionAnswer: 'q3_o1'
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
      { optionId: 'q5_o1', optionLabel: 'Água do mar quente.' },
      { optionId: 'q5_o2', optionLabel: 'Evaporação de lagos.' },
      { optionId: 'q5_o3', optionLabel: 'Ventos em regiões temperadas.' },
      { optionId: 'q5_o4', optionLabel: 'Atividade vulcânica.' }
    ],
    questionAnswer: 'q5_o1'
  },
  {
    questionId: 'q6',
    questionLabel: 'Por que não há furacões no Brasil?',
    questionOptions: [
      {
        optionId: 'q6_o1',
        optionLabel: 'Água do mar não é quente o suficiente.'
      },
      { optionId: 'q6_o2', optionLabel: 'Linha do Equador impede furacões.' },
      { optionId: 'q6_o3', optionLabel: 'Brasil está longe dos oceanos.' },
      { optionId: 'q6_o4', optionLabel: 'Atividade sísmica impede furacões.' }
    ],
    questionAnswer: 'q6_o1'
  },
  {
    questionId: 'q7',
    questionLabel: 'Quanto tempo os furacões duram?',
    questionOptions: [
      { optionId: 'q7_o1', optionLabel: '30 a 60 km de diâmetro.' },
      { optionId: 'q7_o2', optionLabel: '10 a 20 km de diâmetro.' },
      { optionId: 'q7_o3', optionLabel: '1 a 2 km de diâmetro.' },
      { optionId: 'q7_o4', optionLabel: 'Indefinidamente.' }
    ],
    questionAnswer: 'q7_o1'
  },
  {
    questionId: 'q8',
    questionLabel: 'Como sobreviver a um furacão?',
    questionOptions: [
      { optionId: 'q8_o1', optionLabel: 'Fique longe de janelas.' },
      { optionId: 'q8_o2', optionLabel: 'Observe o furacão na janela.' },
      { optionId: 'q8_o3', optionLabel: 'Saia de casa.' },
      { optionId: 'q8_o4', optionLabel: 'Suba no telhado.' }
    ],
    questionAnswer: 'q8_o1'
  },
  {
    questionId: 'q9',
    questionLabel: 'Quais itens são essenciais durante um furacão?',
    questionOptions: [
      { optionId: 'q9_o1', optionLabel: 'Comida, água e lanternas.' },
      { optionId: 'q9_o2', optionLabel: 'Livros e revistas.' },
      { optionId: 'q9_o3', optionLabel: 'Brinquedos e jogos.' },
      { optionId: 'q9_o4', optionLabel: 'Roupas elegantes.' }
    ],
    questionAnswer: 'q9_o1'
  }
]

export { questionsData }
