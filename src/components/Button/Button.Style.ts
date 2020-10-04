import styled from 'styled-components/macro'
import { TextTransformTypes } from '../utils/prop-types'
interface ButtonProps {
  borderRadius: string
  borderColor: string
  borderHover: string
  borderWidth: string
  borderStyle: string
  fontSize: string
  fontFamily: string
  fontWeight: string
  textTransform: TextTransformTypes
  textColor: string
  backgroundColor: string
}
const DefaulButtonStyle = styled.button<ButtonProps>`
  -webkit-box-pack: center;
  align-items: center;
  background-color: ${(props) =>
    props.backgroundColor !== ''
      ? props.backgroundColor
      : props.theme.color.background};
  border-color: ${(props) => props.theme.color.border};
  border-image: initial;
  border-radius: ${(props) => props.borderRadius};
  border-style: ${(props) => props.borderStyle};
  border-width: ${(props) => props.borderWidth};
  box-shadow: none;
  color: ${(props) =>
    props.textColor !== '' ? props.textColor : props.theme.color.accent5};
  cursor: pointer;
  display: inline-flex;
  font-family: ${(props) =>
    props.fontFamily !== ''
      ? props.fontFamily
      : props.theme.typography.buttonFont};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  justify-content: center;
  letter-spacing: 0.2px;
  min-height: 2.5rem;
  min-width: 10.5rem;
  outline: none;
  overflow: hidden;
  padding: 0.75rem 2rem;
  pointer-events: auto;
  position: relative;
  text-align: center;
  text-transform: ${(props) => props.textTransform};
  transition: background-color 200ms ease 0ms, box-shadow 200ms ease 0ms,
    border 200ms ease 0ms, color 200ms ease 0ms;
  user-select: none;
  white-space: nowrap;
  width: max-content;

  &:hover {
    border-color: ${(props) => props.theme.color.borderhover};
    border: ${(props) => props.borderHover};
    color: ${(props) =>
      props.textColor !== '' ? props.textColor : props.theme.color.foreground};
  }

  &.leadingicon,
  &.trailingicon {
    svg,
    i {
      height: 16px;
    }
  }
  &.leadingicon {
    svg,
    i {
      margin-right: 0.5rem;
    }
  }
  &.trailingicon {
    svg,
    i {
      margin-left: 0.5rem;
    }
  }

  &:disabled {
    background-color: ${(props) => props.theme.color.accent2};
    color: ${(props) => props.theme.color.accent8};
    cursor: not-allowed;
    pointer-events: auto;
    user-select: none;
  }

  &.shadow {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
    cursor: pointer;
    pointer-events: auto;
    transform: translate3d(0px, -1px, 0px);
  }
`

export const ButtonStyle = styled(DefaulButtonStyle)`
  &.suprim-ui-btn-size-auto {
    min-width: auto;
  }
  &.suprim-ui-btn-size-mini {
    font-size: 0.65rem;
    min-height: 0.875rem;
    min-width: auto;
    padding: 0.4rem;
  }
  &.suprim-ui-btn-size-small {
    font-size: 0.75rem;
    min-height: 1rem;
    min-width: auto;
    padding: 0.5rem;
  }
  &.suprim-ui-btn-size-medium {
    min-height: 2.5rem;
    min-width: 10.5rem;
    padding: 0.75rem 2rem;
  }
  &.suprim-ui-btn-size-large {
    font-size: 1rem;
    min-width: 12.5rem;
  }
  &.suprim-ui-btn-size-fluid {
    display: flex;
    font-size: 1rem;
    min-width: auto;
    width: 100%;
  }
  &.suprim-ui-btn-variation-primary {
    background-color: ${(props) => props.theme.color.primary.default};
    border-color: ${(props) => props.theme.color.primary.default};
    color: ${(props) => props.theme.color.white};
    &:hover {
      background-color: ${(props) => props.theme.color.primary.default};
      border-color: ${(props) => props.theme.color.primary.default};
      color: #fff;
    }
    &.ghost {
      background-color: transparent;
      color: ${(props) => props.theme.color.primary.default};
      &:hover {
        background-color: ${(props) => props.theme.color.primary.default};
        border-color: ${(props) => props.theme.color.primary.default};
        color: #fff;
      }
    }
    &.disabled {
      opacity: 0.5;
      overflow: hidden;
      filter: blur(0.5px);
    }
  }
  &.suprim-ui-btn-variation-success {
    background-color: ${(props) => props.theme.color.success.default};
    border-color: ${(props) => props.theme.color.success.default};
    color: ${(props) => props.theme.color.white};
    &:hover {
      background-color: ${(props) => props.theme.successdarkColor};
      border-color: ${(props) => props.theme.successdarkColor};
      color: #fff;
    }
    &.ghost {
      background-color: transparent;
      color: ${(props) => props.theme.color.success.default};
      &:hover {
        background-color: ${(props) => props.theme.color.success.dark};
        border-color: ${(props) => props.theme.color.success.dark};
        color: #fff;
      }
    }
    &.disabled {
      opacity: 0.5;
      overflow: hidden;
      filter: blur(0.5px);
    }
  }
  &.suprim-ui-btn-variation-error {
    background-color: ${(props) => props.theme.color.error.default};
    border-color: ${(props) => props.theme.color.error.default};
    color: ${(props) => props.theme.color.white};
    &:hover {
      background-color: ${(props) => props.theme.color.error.dark};
      border-color: ${(props) => props.theme.color.error.dark};
      color: #fff;
    }
    &.ghost {
      background-color: transparent;
      color: ${(props) => props.theme.color.error.default};
      &:hover {
        background-color: ${(props) => props.theme.color.error.dark};
        border-color: ${(props) => props.theme.color.error.dark};
        color: #fff;
      }
    }
    &.disabled {
      opacity: 0.5;
      overflow: hidden;
      filter: blur(0.5px);
    }
  }

  &.suprim-ui-btn-variation-warning {
    background-color: ${(props) => props.theme.color.warning.default};
    border-color: ${(props) => props.theme.color.warning.default};
    color: ${(props) => props.theme.color.white};
    &:hover {
      background-color: ${(props) => props.theme.color.warning.dark};
      border-color: ${(props) => props.theme.color.warning.dark};
      color: #fff;
    }
    &.ghost {
      background-color: transparent;
      color: ${(props) => props.theme.color.warning.default};
      &:hover {
        background-color: ${(props) => props.theme.color.warning.dark};
        border-color: ${(props) => props.theme.color.warning.dark};
        color: #fff;
      }
    }
    &.disabled {
      opacity: 0.5;
      overflow: hidden;
      filter: blur(0.5px);
    }
  }

  &.suprim-ui-btn-variation-secondary {
    background-color: ${(props) => props.theme.color.foreground};
    border-color: ${(props) => props.theme.color.foreground};
    color: ${(props) => props.theme.color.background};
    &:hover {
      background-color: ${(props) => props.theme.color.foreground};
      border-color: ${(props) => props.theme.color.foreground};
    }
    &.ghost {
      background-color: transparent;
      color: ${(props) => props.theme.color.foreground};
      &:hover {
        background-color: ${(props) => props.theme.color.foreground};
        border-color: ${(props) => props.theme.color.foreground};
        color: #fff;
      }
    }
    &.disabled {
      opacity: 0.5;
      overflow: hidden;
      filter: blur(0.5px);
    }
  }
`

export const ButtonGroupStyle = styled.div`
  display: inline-flex;
  border-color: ${(props) => props.theme.color.border};
  border-image: initial;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  overflow: hidden;
  .suprim-ui-btn-variation {
    border-radius: 0px;
    border: none;
    border-right: 1px solid ${(props) => props.theme.color.border};
    &:last-child {
      border-right: none;
    }
  }

  &.vertical {
    flex-direction: column;
    .suprim-btn {
      display: block;
      border-bottom: 1px solid ${(props) => props.theme.color.border};
      &:last-child {
        border-bottom: none;
      }
    }
  }
`
export const ButtonLinkStyle = styled(ButtonStyle)`
  text-decoration: none;
`
