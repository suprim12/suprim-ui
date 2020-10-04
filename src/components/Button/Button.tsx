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

const Button = (props: Props) => {
  const {
    children,
    type,
    ghost,
    loading,
    shadow,
    disabled,
    size,
    variation,
    icon,
    iconRight,
    auto,
    effect,
    className,
    ...rest
  } = props
  return (
    <ButtonStyle
      type={type}
      disabled={disabled}
      className={`
        ${ghost ? 'ghost' : ''}  
        ${disabled ? 'disabled' : ''}    
        ${shadow ? 'shadow' : ''} 
        ${loading ? 'loading' : ''} 
        ${auto ? 'auto' : ''}
        ${effect ? 'effect' : ''}
        ${size ? `suprim-ui-btn-size-${size}` : ''}
        ${variation ? `suprim-ui-btn-${variation}` : ''}
        ${className ? className : ''}
      `}
      {...rest}
    >
      {icon} {children} {iconRight}
    </ButtonStyle>
  )
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

Button.defaultProps = defaultProps
export default Button
