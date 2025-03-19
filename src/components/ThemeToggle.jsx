/* eslint-disable react/prop-types */
import styled from 'styled-components'

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme === 'light' ? '#f0f0f0' : '#4CAF50'};
  border: 2px solid ${({ theme }) => theme === 'light' ? '#d9d9d9' : '#3d8b40'};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.5rem;
  margin: 0;
  overflow: hidden;
  padding: 0.2rem;
  position: relative;
  width: 50px;
  height: 24px;
  outline: none;
`

const ToggleCircle = styled.span`
  position: absolute;
  left: ${({ theme }) => theme === 'light' ? '2px' : '26px'};
  width: 45%;
  height: 100%;
  border-radius: 50%;
  background-color: ${({ theme }) => theme === 'light' ? '#000' : '#fff'};
  transition: all 0.3s ease;
`

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <ToggleContainer onClick={toggleTheme} theme={theme}>
      <ToggleCircle theme={theme} />
    </ToggleContainer>
  )
}

export default ThemeToggle