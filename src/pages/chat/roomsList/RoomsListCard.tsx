import React, { FC } from 'react'
import { Button, makeStyles } from '@material-ui/core'
import PeopleIcon from '@material-ui/icons/People'

import { Аvatar } from '../../../common/components/Аvatar'
import { IcardRoom } from '../../../models/rooms/intarface'

const useStyles = makeStyles({
  card: {
    height: '64px',
    padding: '6px',
    borderRadius: 'unset',
    '& .MuiButton-label': {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      justifyContent: 'start',
      gridColumnGap: '8px',
      height: '100%',
      width: '100%'
    },
  },
  cardInfo: {
    display: 'flex',
    alignItems: 'start',
    height: '100%',
    overflow: 'hidden'
  },
  cardInfoTop: {
    alignItems: 'center',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  cardInfoTopIcon: {
    marginBottom: -5
  }
})


const RoomsListCardFC:FC<IcardRoom> = (props) => {
  const classes = useStyles()

  return <Button className={classes.card} fullWidth>
    <Аvatar
      name={props.name}
      avatarId={props.avatarId}
      size={52}
    />
    <div className={classes.cardInfo}>
      <div className={classes.cardInfoTop}>
        <PeopleIcon className={classes.cardInfoTopIcon}/>{props.name}
      </div>
    </div>
  </Button>
}

export const RoomsListCard = React.memo(RoomsListCardFC)