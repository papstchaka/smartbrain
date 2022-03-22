import { createGlobalStyle } from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    background-image: linear-gradient(89deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.secondary} 100%);
    color: ${({ theme }) => theme.text};
  }
  
  & .modal-big {
    background-image: linear-gradient(89deg, ${({ theme }) => theme.modal1} 0%, ${({ theme }) => theme.modal2} 100%);
  }

  & .modal-body {    
    text-shadow: 0 5px ${({ theme }) => theme.shadow};
  }

  & .cta-btn--hero {
    background: linear-gradient(89deg, ${({ theme }) => theme.modal1} 0%, ${({ theme }) => theme.modal2} 100%);
  }

  & .cta-btn--modal {
    &:hover {
      background: linear-gradient(89deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.secondary} 100%);
    }
  }

  & .backgroundwhite {
    background: linear-gradient(89deg, ${({ theme }) => theme.modal1} 0%, ${({ theme }) => theme.modal2} 100%);
    color: ${({ theme }) => theme.text};
  }

  & .Tilt {
    background: linear-gradient(89deg, ${({ theme }) => theme.primary} 0%, ${({ theme }) => theme.tertiary} 100%);
  }

  & .wrg-toggle-container {
    background-color: ${({ theme }) => theme.ctnbackground};
  }

  & .wrg-toggle-circle {
    background-color: ${({ theme }) => theme.btnbackground};
    border: 1px solid ${({ theme }) => theme.ctnbackground};
  }

  & .mycopyright {
    color: ${({ theme }) => theme.text};
  }

  & .mysignin {
    color: ${({ theme }) => theme.text};
  }
  `