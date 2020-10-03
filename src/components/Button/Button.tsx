import React from 'react'
import styled from 'styled-components/macro'
import { ButtonTypes, NormalSizes } from '../utils/prop-types'

const ButtonStyle = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
`

interface Props {
  variation: ButtonTypes
  size: NormalSizes
  children?: React.ReactNode
  ghost?: boolean
  loading?: boolean
  shadow?: boolean
  auto?: boolean
  effect?: boolean
  disabled?: boolean
  type?: React.ButtonHTMLAttributes<any>['type']
  icon?: React.ReactNode
  iconRight?: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}

const defaultProps = {
  variation: 'default' as ButtonTypes,
  size: 'medium' as NormalSizes,
  type: 'button' as React.ButtonHTMLAttributes<any>['type'],
  ghost: false,
  loading: false,
  shadow: false,
  auto: false,
  effect: true,
  disabled: false,
  className: ''
}

const Button = (props: Props) => {
  return <ButtonStyle>{props.children}</ButtonStyle>
}

Button.defaultProps = defaultProps
export default Button
