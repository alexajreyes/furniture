import styled from 'styled-components'

export const Wrapper = styled.div`
  @media (min-width: 420px) {
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  }
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(232px, 1fr));
  gap: 20px;
  margin: 72px 0;
`
