import { useEffect, useState } from 'react'
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
  const { control, handleSubmit, watch } = useForm<FormValues>()
  const navigate = useNavigate()

  const [filledQuestionsCount, setFilledQuestionsCount] = useState(0)

  const formValues = watch()

  useEffect(() => {
    const filledCount = Object.values(formValues).filter(Boolean).length
    setFilledQuestionsCount(filledCount)
  }, [formValues])

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
    // navigate('/resultado');
  }

  const progressPercentage = (filledQuestionsCount / questionsData.length) * 100

  return (
    <S.FormScreen>
      <S.FormHeader>
        <h1>Questionário sobre Vulcões</h1>

        <S.FormProgressbarWrapper>
          <span>🗻</span>
          <S.FormProgressbar>
            <S.FormProgressbarFile width={progressPercentage} />
          </S.FormProgressbar>
          <span>🌋</span>
        </S.FormProgressbarWrapper>
      </S.FormHeader>
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
          <S.FormSubmitButton type="submit">
            Enviar 🔥 e ver resultado ✅
          </S.FormSubmitButton>
        </S.FormFooter>
      </S.Form>
    </S.FormScreen>
  )
}

export default FormScreen
