import styled from 'styled-components'
import { Screen } from '@/utils/styles/globals'

const formHeader = '100px'
const formFooter = '90px'

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
    line-height: 20px;
  }

  h2 {
    font-size: 12px;
    line-height: 12px;
    font-weight: 300;

    b {
      font-weight: 600;
      color: cornflowerblue;
    }
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

export const Form = styled.form`
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
  position: fixed;
  z-index: 900;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
  width: 100%;
  height: ${formFooter};

  background-color: #010a1a;
  border-top: 1px solid #020e24;
`

export const FormFooterLegend = styled.div`
  width: 100%;
  height: fit-content;
  padding-top: 10px;
  text-align: center;

  border-top: 1px solid #020e24;

  &,
  a {
    font-size: 10px;
    line-height: 10px;
    font-weight: 400;
    letter-spacing: 0.5px;

    color: white;
  }

  a {
    font-weight: 600;
  }
`

export const FormSubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  padding: 10px 20px;
  border-radius: 6px;
  transition: 0.3s;
  cursor: pointer;

  font-size: 16px;
  line-height: 16px;
  font-weight: 500;

  background-color: orangered;
  color: white;
  border: 2px solid orangered;

  &:disabled {
    cursor: default;

    background-color: rgb(40, 40, 40);
  }
`

export const FormResultModal = styled.div`
  position: fixed;
  z-index: 1200;

  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const ModalHeaderClose = styled.button`
  position: absolute;
  z-index: 1200;

  bottom: 100%;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
  border-radius: 8px;
  cursor: pointer;

  background-color: rgba(255, 255, 255, 1);

  svg {
    font-size: 20px;

    color: rgba(0, 0, 0, 1);
  }
`

export const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  max-width: 340px;
  height: fit-content;
  padding: 40px 30px;
  border-radius: 8px;

  background-color: rgba(255, 255, 255, 1);
`

export const ModalResultMessageTitle = styled.h2`
  font-size: 28px;
  line-height: 28px;
  font-weight: 700;

  color: rgba(0, 0, 0, 0.8);
`

export const ModalResultMessage = styled.p`
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;

  color: rgba(0, 0, 0, 0.8);

  b {
    font-weight: 600;
  }
`

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: fit-content;
  margin-top: 15px;

  button {
    background-color: orangered;
    color: white;
    border: 2px solid orangered;
  }
`

export const ModalSubmitButton = styled(FormSubmitButton)`
  font-size: 14px;
  line-height: 14px;
`

export const ModalBackdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1100;
  display: flex;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);
`
