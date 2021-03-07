import React, { FC } from 'react'
import { Avatar as AvatarMU, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  avatar: (size: number) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: `${size/2}px`,
    backgroundColor: 'var(--primary)',
    flexShrink: 0,
  })
})

interface Iprops {
  name: string,
  size: number,
  avatarId?: string,
}

const АvatarFC: FC<Iprops> = (props) => {
  const classes = useStyles(props.size)

  return (
    <AvatarMU
      className={classes.avatar}
      src={props.avatarId}
    >
      {props.name[0]}
    </AvatarMU>
  )
}

export const Аvatar = React.memo(АvatarFC)