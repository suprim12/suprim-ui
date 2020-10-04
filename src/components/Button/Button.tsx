import React, {
  useImperativeHandle,
  PropsWithoutRef,
  RefAttributes
} from 'react'
import {
  ButtonTypes,
  NormalSizes,
  TextTransformTypes
} from '../utils/prop-types'
import { ButtonStyle } from './Button.Style'

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
  border?: string
  borderRadius: string
  borderColor: string
  borderHover: string
  borderWidth: string
  borderStyle: string
  className: string
  fontSize: string
  fontFamily: string
  fontWeight: string
  textTransform: TextTransformTypes
  textColor: string
  backgroundColor: string
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
  className: '',
  borderRadius: '5px',
  borderColor: '',
  borderHover: '1px solid inherit',
  borderStyle: 'solid',
  borderWidth: '1px',
  fontSize: '0.875rem',
  fontFamily: '',
  fontWeight: '500',
  textTransform: 'capitalize' as TextTransformTypes,
  textColor: '',
  backgroundColor: ''
}
type NativeAttrs = Omit<React.ButtonHTMLAttributes<any>, keyof Props>
export type ButtonProps = Props & typeof defaultProps & NativeAttrs

const Button = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<ButtonProps>
>((props: Props, ref: React.Ref<HTMLButtonElement | null>) => {
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
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  useImperativeHandle(ref, () => buttonRef.current)
  React.useEffect(() => {
    const { current } = buttonRef
    const rippleeffect: any = (e: any) => {
      const btn = e.target
      const x = e.pageX - btn.offsetLeft
      const y = e.pageY - btn.offsetTop

      const duration = 1000
      let animationFrame: any, animationStart: any
      const animationStep = function (timestamp: any) {
        if (!animationStart) {
          animationStart = timestamp
        }
        const frame = timestamp - animationStart
        if (frame < duration) {
          const easing = (frame / duration) * (2 - frame / duration)

          const circle = 'circle at ' + x + 'px ' + y + 'px'
          const color = 'rgba(162, 162, 162, ' + 0.5 * (1 - easing) + ')'
          const stop = 90 * easing + '%'
          btn.style.backgroundImage =
            'radial-gradient(' +
            circle +
            ', ' +
            color +
            ' ' +
            stop +
            ', transparent ' +
            stop +
            ')'
          animationFrame = window.requestAnimationFrame(animationStep)
        } else {
          btn.style.backgroundImage = 'none'
          window.cancelAnimationFrame(animationFrame)
        }
      }
      animationFrame = window.requestAnimationFrame(animationStep)
    }
    current !== null && current.addEventListener('click', rippleeffect)
    return () => {
      current !== null && current.removeEventListener('click', rippleeffect)
    }
  }, [])
  return (
    <ButtonStyle
      ref={buttonRef}
      type={type}
      disabled={disabled}
      className={`
          suprim-ui-btn
          ${ghost ? 'ghost ' : ''}  
          ${disabled ? 'disabled ' : ''}    
          ${shadow ? 'shadow ' : ''} 
          ${loading ? 'loading ' : ''} 
          ${auto ? 'auto ' : ''}
          ${effect ? ' effect ' : ''}
          ${size ? `suprim-ui-btn-size-${size} ` : ''}
          ${variation ? `suprim-ui-btn-variation-${variation} ` : ''}
          ${className ? className : ''}
        `}
      {...rest}
    >
      {icon} {children} {iconRight}
    </ButtonStyle>
  )
})

type ButtonComponent<T, P = {}> = React.ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
>
type ComponentProps = Partial<typeof defaultProps> &
  Omit<Props, keyof typeof defaultProps> &
  NativeAttrs

Button.defaultProps = defaultProps
export default React.memo(Button) as ButtonComponent<
  HTMLButtonElement,
  ComponentProps
>
