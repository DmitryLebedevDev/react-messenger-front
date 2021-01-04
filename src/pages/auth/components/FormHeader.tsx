import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Lock } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';

interface Iprops {
  variant: 'login' | 'registration' | 'quickRegistrationPage'
}
interface StyleParams {
  color: string,
  iconColor?: string
}

const useStyles = makeStyles({
  wrap: {
    display: 'flex',
    justifyContent: 'center',
  },
  content:({color,iconColor='white'}: StyleParams) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 40,
    background: color,
    color: iconColor
  })
})

export const FormHeader = ({variant}: Iprops) => {
  let stylesParams: StyleParams
  switch(variant) {
    case 'login':
      stylesParams = {
        color: '#3f51b5',
      }
      break;
    case 'registration':
      stylesParams = {
        color: '#3f51b5',
      }
      break;
    case 'quickRegistrationPage':
      stylesParams = {
        color: '#4caf50'
      }
    break;
  }

  const classes = useStyles(stylesParams)
  return (
    <div className={classes.wrap}>
      <div className={classes.content}>
        {variant === 'login' ?
         <Lock/>
         :
         <AddIcon/>
        }
      </div>
    </div>
  )
}
