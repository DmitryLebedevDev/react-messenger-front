import React from 'react'
import { makeStyles } from '@material-ui/core'

interface Iprops {
  variant: 'login' | 'registration' | 'quickRegistrationPage'
}
interface StyleParams {
  color: string
}

const useStyles = makeStyles({
  wrap: {
    display: 'flex',
    justifyContent: 'center',
  },
  content:({color}: {color: string}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 40,
    background: color
  })
})

export const FormHeader = ({variant}: Iprops) => {
  let stylesParams: StyleParams
  switch(variant) {
    case 'login':
      stylesParams = {
        color: '#0078CE'
      }
      break;
    case 'registration':
      stylesParams = {
        color: '#E3004E'
      }
      break;
    case 'quickRegistrationPage':
      stylesParams = {
        color: '#00c853'
      }
    break;
  }

  const classes = useStyles(stylesParams)
  return (
    <div className={classes.wrap}>
      <div className={classes.content}>
        
      </div>
    </div>
  )
}
