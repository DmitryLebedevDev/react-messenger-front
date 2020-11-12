import React, { PropsWithChildren } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import mountainsImage from '../../../images/mountain-3351654_1920.jpg';

const useStyles = makeStyles({
  bgImage: ({urlImage}:{urlImage:string}) => ({
    width: '100%',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${urlImage})`
  })
})
export default function AuthBg({children}: PropsWithChildren<any>) {
  const classes = useStyles({urlImage: mountainsImage});

  return (
    <div className={classes.bgImage}>
      {children}
    </div>
  )
}
