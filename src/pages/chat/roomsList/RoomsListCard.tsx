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
    textAlign: 'start',
    textTransform: 'none',
    height: '100%',
    overflow: 'hidden',
  },
  cardInfoTop: {
    alignItems: 'center',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },
  cardInfoTopIcon: {
    marginRight: '2px',
    marginBottom: '-5px'
  },
  cardInfoBottom: {
    color: 'var(--secondaryText)',
    fontSize: '14px',
    fontWeight: 400,
    alignItems: 'center',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  creatorMessage: {
    color: 'var(--activeText)',
    marginRight: '2px',
  },
  textMessage: {}
})


const RoomsListCardFC:FC<IcardRoom> = (props) => {
  const lastMessage = props.messages[props.messages.length-1]

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
      {lastMessage &&
       <div className={classes.cardInfoBottom}>
          <span className={classes.creatorMessage}>{lastMessage.userId}</span>
          <span className={classes.textMessage}>{lastMessage.text}</span>
       </div>
      }
    </div>
  </Button>
}

export const RoomsListCard = React.memo(RoomsListCardFC)