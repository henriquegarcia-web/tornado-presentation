import { useNavigate } from 'react-router-dom'

import * as S from './styles'

import { Button, Radio } from 'antd'

import { useForm, Controller, SubmitHandler } from 'react-hook-form'

import { questionsData } from '@/data/questions'
interface FormValues {
  [key: string]: string
}

interface IFormScreen {}

const FormScreen = ({}: IFormScreen) => {
  const { control, handleSubmit } = useForm<FormValues>()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
    // navigate('/resultado')
  }

  return (
    <S.FormScreen>
      <S.FormHeader>Barra de Progresso Aqui</S.FormHeader>
      <S.Form onFinish={handleSubmit(onSubmit)}>
        {questionsData.map((question) => (
          <S.FormWrapper key={question.questionId}>
            <S.FormWrapperLabel>{question.questionLabel}</S.FormWrapperLabel>
            <Controller
              name={question.questionId}
              control={control}
              rules={{ required: 'Este campo é obrigatório' }}
              render={({ field }) => (
                <Radio.Group {...field}>
                  {question.questionOptions.map((option) => (
                    <Radio key={option.optionId} value={option.optionId}>
                      {option.optionLabel}
                    </Radio>
                  ))}
                </Radio.Group>
              )}
            />
          </S.FormWrapper>
        ))}
        <S.FormFooter>
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </S.FormFooter>
      </S.Form>
    </S.FormScreen>
  )
}

export default FormScreen
