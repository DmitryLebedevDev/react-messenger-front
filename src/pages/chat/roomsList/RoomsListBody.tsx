import React, { FunctionComponent } from "react";
import { useStore } from "effector-react";
import { Button, CircularProgress } from "@material-ui/core";

import { $currentRoomsInfo } from "../../../models/rooms";
import { RoomsListCard } from "./RoomsListCard";

const RoomsListBodyFC:FunctionComponent = () => {
  const {pending, error, rooms} = useStore($currentRoomsInfo);

  return <div>{
    pending ?
      <CircularProgress />
      :
    error ?
      'ошибка'
      :
      Object
        .values(rooms)
        .map(cardRoom => <RoomsListCard key={cardRoom.id} {...cardRoom}/>)
  }</div>
}

export const RoomsListBody = React.memo(RoomsListBodyFC);