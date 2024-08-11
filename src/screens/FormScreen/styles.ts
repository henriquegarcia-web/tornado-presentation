import styled from 'styled-components'
import { Screen } from '@/utils/styles/globals'
import { Form as FormAntd } from 'antd'

const formHeader = '80px'
const formFooter = '70px'

export const FormScreen = styled(Screen)`
  display: flex;
  align-items: center;
  padding: calc(${formHeader} + 30px) 20px calc(${formFooter} + 30px) 20px;

  font-size: 30px;
  line-height: 30px;
  font-weight: 600;
  color: white;

  background-color: #010a1a;
`

export const FormHeader = styled.header`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 8px;
  width: 100%;
  height: ${formHeader};

  background-color: #010a1a;
  border-bottom: 1px solid #020e24;

  h1 {
    font-size: 20px;
  }
`

export const FormProgressbarWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  width: 80%;
  max-width: 420px;

  span {
    font-size: 16px;
    line-height: 16px;
  }
`

export const FormProgressbar = styled.div`
  display: flex;
  width: 100%;
  height: 6px;
  border-radius: 50px;
  overflow: hidden;
  margin-top: 6px;

  background-color: rgba(255, 255, 255, 0.15);
`

export const FormProgressbarFile = styled.div<{ width: number }>`
  display: flex;
  width: ${({ width }) => `${width}%`};
  height: 100%;
  border-radius: 50px;
  transition: 0.3s;

  background-color: orangered;
`

export const Form = styled(FormAntd)`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-bottom: 25px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  .ant-radio-group {
    display: flex;
    flex-direction: column;
    row-gap: 5px;

    .ant-radio-wrapper {
      span {
        font-size: 14px;
        line-height: 14px;
        font-weight: 400;
        letter-spacing: 0.5px;

        color: rgb(230, 230, 230);
      }
    }
  }
`

export const FormWrapperLabel = styled.label`
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
  letter-spacing: 0.5px;

  color: white;
`

export const FormFooter = styled.footer`
  z-index: 1000;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${formFooter};

  background-color: #010a1a;
  border-top: 1px solid #020e24;
`

export const FormSubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 10px 20px;
  border-radius: 6px;

  font-size: 16px;
  line-height: 16px;
  font-weight: 500;

  background-color: orangered;
  color: white;
  border: 2px solid orangered;
`
