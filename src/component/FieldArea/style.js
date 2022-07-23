import styled from 'styled-components'

export const FieldTextContainer = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
  font-family: 'Geomanist', sans-serif;
  &:focus-within {
    label {
      color: ${({ theme }) => theme.accent};
    }
  }
`

export const FieldTextLabel = styled.label`
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.secondaryText};
  transition: color 0.25s;
`

export const FieldTextAreaInput = styled.textarea`
  max-width: 328px;
  resize: vertical;
  height: 108px;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #afafaf;
  background-color: #fbfbfb;
  color: ${({ theme }) => theme.secondaryText};
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.25s, background-color 0.25s;

  &:placeholder {
    color: ${({ theme }) => theme.colorField};
    opacity: 1;
  }

  &:focus {
    background-color: ${({ theme }) => theme.colorField};
    border-color: ${({ theme }) => theme.secondaryText};
  }
  &:hover {
    border-color: ${({ theme }) => theme.secondaryText};
  }
`

export const FieldTextErrorMessage = styled.p`
  margin-top: 4px;
  background-color: ${({ theme }) => theme.error};
  font-size: 14px;
`
