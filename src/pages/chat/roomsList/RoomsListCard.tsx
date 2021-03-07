import React, { FC } from "react";
import { useStore } from "effector-react";
import { Button, CircularProgress } from "@material-ui/core";

import { IcardRoom } from "../../../models/rooms/intarface";

const RoomsListCardFC:FC<IcardRoom> = (props) => {
  return <div>
    {props.name}
  </div>
}

export const RoomsListCard = React.memo(RoomsListCardFC);