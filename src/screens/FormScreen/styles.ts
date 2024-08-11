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
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${formHeader};

  font-size: 24px;

  background-color: #010a1a;
  border-bottom: 1px solid #020e24;
`

export const Form = styled(FormAntd)`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  .ant-radio-group {
    display: flex;
    flex-direction: column;
    row-gap: 5px;

    .ant-radio-wrapper {
      span {
        font-size: 14px;
        line-height: 14px;
        font-weight: 400;

        color: rgb(230, 230, 230);
      }
    }
  }
`

export const FormWrapperLabel = styled.label`
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;

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
