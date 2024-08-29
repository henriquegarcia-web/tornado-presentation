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
  const { control, handleSubmit, watch, reset, formState } =
    useForm<FormValues>()
  const navigate = useNavigate()

  const [filledQuestionsCount, setFilledQuestionsCount] = useState(0)

  const formValues = watch()

  const { isValid } = formState

  useEffect(() => {
    const filledCount = Object.values(formValues).filter(Boolean).length
    setFilledQuestionsCount(filledCount)
  }, [formValues])

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    let correctAnswersCount = 0

    questionsData.forEach((question) => {
      if (data[question.questionId] === question.questionAnswer) {
        correctAnswersCount++
      }
    })

    const totalQuestions = questionsData.length
    alert(`Você acertou ${correctAnswersCount}/${totalQuestions} questões.`)
    reset()

    console.log(data)
  }

  const progressPercentage = (filledQuestionsCount / questionsData.length) * 100

  const submitDisabled = !isValid

  return (
    <S.FormScreen>
      <S.FormHeader>
        <h1>Questionário sobre Furacões</h1>

        <S.FormProgressbarWrapper>
          <span>🗻</span>
          <S.FormProgressbar>
            <S.FormProgressbarFile width={progressPercentage} />
          </S.FormProgressbar>
          <span>🌪</span>
        </S.FormProgressbarWrapper>
      </S.FormHeader>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
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
          <S.FormSubmitButton type="submit" disabled={submitDisabled}>
            Enviar 🌪 e ver resultado ✅🎉
          </S.FormSubmitButton>
        </S.FormFooter>
      </S.Form>
    </S.FormScreen>
  )
}

export default FormScreen
