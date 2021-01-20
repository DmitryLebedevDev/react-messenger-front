import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import cn from 'classnames'

import mountainsImage from '../../../images/mountain-3351654_1920.jpg'

interface Iprops {
  content?: 'center'
}

const useStyles = makeStyles({
  bgImage: ({urlImage}:{urlImage:string}) => ({
    width: '100%',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${urlImage})`
  }),
  contentCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export const AuthBg:FunctionComponent<Iprops> = ({children, content}) => {
  const classes = useStyles({urlImage: mountainsImage})

  const wrapClasses = cn([
    classes.bgImage,
    {[classes.contentCenter]: Boolean(content)}
  ])

  return (
    <div className={wrapClasses}>
      {children}
    </div>
  )
}
