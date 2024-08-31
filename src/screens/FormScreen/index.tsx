import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

import { Button, Radio } from 'antd'

import { useForm, Controller, SubmitHandler } from 'react-hook-form'

import { questionsData } from '@/data/questions'
import { FiX } from 'react-icons/fi'
interface FormValues {
  [key: string]: string
}

interface IFormScreen {}

const FormScreen = ({}: IFormScreen) => {
  const [isResultModalOpen, setIsResultModalOpen] = useState(false)
  const [currentResult, setCurrentResult] = useState<number | null>(null)
  const [filledQuestionsCount, setFilledQuestionsCount] = useState(0)

  const { control, handleSubmit, watch, reset, formState } =
    useForm<FormValues>()

  const navigate = useNavigate()
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

    reset()
    setCurrentResult(correctAnswersCount)
    setIsResultModalOpen(true)
  }

  const progressPercentage = (filledQuestionsCount / questionsData.length) * 100

  const submitDisabled = !isValid

  return (
    <S.FormScreen>
      <S.FormHeader>
        <h1>Questionário sobre Furacões</h1>
        <h2>
          Trabalho de <b>Alice Dutra</b> e <b>Lauren Lorenz</b>
        </h2>

        <S.FormProgressbarWrapper>
          <span>💨</span>
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
            Enviar 💨 e ver resultado ✅🎉
          </S.FormSubmitButton>
          <S.FormFooterLegend>
            Desenvolvido por{' '}
            <a href="https://www.instagram.com/henrique.jsx/" target="_blank">
              henrique.jsx
            </a>
          </S.FormFooterLegend>
        </S.FormFooter>
      </S.Form>

      {isResultModalOpen && (
        <FormResultModal
          result={currentResult || 0}
          handleCloseModal={() => setIsResultModalOpen(false)}
        />
      )}
    </S.FormScreen>
  )
}

export default FormScreen

// ========================================== MODAL

interface IFormResultModal {
  result: number
  handleCloseModal: () => void
}

const FormResultModal = ({ result, handleCloseModal }: IFormResultModal) => {
  return (
    <>
      <S.FormResultModal>
        <S.ModalWrapper>
          {/* <S.ModalHeaderClose onClick={handleCloseModal}>
            <FiX />
          </S.ModalHeaderClose> */}
          <S.ModalResultMessageTitle>
            {result >= 7
              ? 'Parabéns! 🥳'
              : result >= 5
              ? 'Muito bem! 😊'
              : 'Ok, tudo bem 😉'}
          </S.ModalResultMessageTitle>
          <S.ModalResultMessage>
            Você acertou <b>{result}</b> de <b>8 perguntas</b>
          </S.ModalResultMessage>
          {/* <S.ModalFooter>
          </S.ModalFooter> */}
          <S.ModalSubmitButton onClick={handleCloseModal}>
            Fazer questionário novamente
          </S.ModalSubmitButton>
        </S.ModalWrapper>
      </S.FormResultModal>

      <S.ModalBackdrop />
    </>
  )
}
