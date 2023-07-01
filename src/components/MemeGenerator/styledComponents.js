// Style your components here
import styled from '../../../node_modules/styled-components'

export const BgContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #eb5534;
  padding: 30px;
`
export const ChildContainer = styled.div`
  min-height: auto;
  display: flex;
  flex-direction: column;
  width: 48%;
  background-color: #3495eb;
  align-items: center;
`
export const Input = styled.input`
  width: 200px;
  height: 40px;
  margin-bottom: 30px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
`
