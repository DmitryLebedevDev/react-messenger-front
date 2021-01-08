import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import cn from 'classnames'

const useStyles = makeStyles({
  inputWrap: {
    position: 'relative',
  },
  input: {
    height: 38,
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 37,
    outline: 'none',
    border: '2px solid var(--background-inpit)',
    backgroundColor: 'var(--background-inpit)',
    borderRadius: 3,
    transition: '.2s',
    '&::placeholder': {
      color: 'var(--color-input)',
    },
    '&:active': {
      borderColor: '#39C3F0',
    },
    '&:focus': {
      border: '2px solid var(--outline-input)',
      backgroundColor: 'var(--background-inpit-active)',
    },
    '&:focus::placeholder': {
      color: 'var(--color-input-active)',
    },
  },
  closeIcon: {
    position: 'absolute',
    top: '50%',
    right: 6,
    fontSize: 28,
    color: 'var(--icon)',
    cursor: 'pointer',
    transform: 'translateY(-50%) rotate(90deg) scale(0)',
    transition: '.2s',
    '&:hover': {
      color: 'var(--icon-active)'
    }
  },
  closeIconOn: {
    transform: 'translateY(-50%) rotate(0deg) scale(1)'
  },
  placeholder: {
    position: 'absolute',
    left: 20,
    top: '50%',
    fontSize: 16,
    color: 'var(--color-input)',
    transform: 'translateY(-50%)',
    transition: '.2s',
    userSelect: 'none',
    cursor: 'text'
  },
  placeholderOff: {
    opacity: 0,
    transform: 'translateY(-50%) translateX(100%)',
  },
  placeholderDisplayNone: {
    zIndex: -1,
  }
})

interface Iprops {
  className?: string
}

export const SearchInput:FunctionComponent<Iprops> = ({className}) => {
  const inputRef = useRef<HTMLInputElement|null>(null);
  const [value, setValue] = useState('');
  const [isHidePlaseholder, setIsHidePlaseholder] = useState(false);

  useEffect(() => {!value && setIsHidePlaseholder(false)}, [value])

  const classes = useStyles();

  return (
    <div className={classes.inputWrap}>
      <input
        ref={inputRef}
        value={value}
        onChange={e => setValue(e.target.value)}
        className={cn(classes.input, className)}
      />
      <div className={cn(
          classes.placeholder,
        {[classes.placeholderOff]: !!value,
         [classes.placeholderDisplayNone]: isHidePlaseholder
        })}
        onTransitionEndCapture={e => !!value && setIsHidePlaseholder(true)}
        onMouseDown={(e) => {inputRef.current?.focus(); e.preventDefault()}}
      >
        Поиск
      </div>
      <div onClick={(e) => setValue('')}>
        <CloseIcon
          className={
            cn(
              classes.closeIcon,
              {[classes.closeIconOn]: !!value}
            )
          }
        />
      </div>
    </div>
  )
}
