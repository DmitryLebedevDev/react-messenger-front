import React from 'react'
import { CircularProgress, makeStyles } from '@material-ui/core'
import { Lock } from '@material-ui/icons'
import AddIcon from '@material-ui/icons/Add'

interface Iprops {
  variant: 'login' | 'registration' | 'quickRegistrationPage',
  pending: boolean
}
interface StyleParams {
  color: string,
  iconColor?: string,
  spinerColor: string
}

const useStyles = makeStyles({
  wrap: {
    position: 'relative',
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
  }),
  spiner:({spinerColor}: StyleParams) => ({
    position: 'absolute',
    top: -4,
    zIndex: 1,
    color: spinerColor
  })
})

export const FormHeader = ({variant, pending}: Iprops) => {
  let stylesParams: StyleParams
  switch(variant) {
    case 'login':
      stylesParams = {
        color: '#3f51b5',
        spinerColor: '#f50057',
      }
      break;
    case 'registration':
      stylesParams = {
        color: '#3f51b5',
        spinerColor: '#f50057',
      }
      break;
    case 'quickRegistrationPage':
      stylesParams = {
        color: '#4caf50',
        spinerColor: '#303f9f'
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
      {
        pending &&
        <CircularProgress
          className={classes.spiner}
          size="48px"
        />
      }
    </div>
  )
}
