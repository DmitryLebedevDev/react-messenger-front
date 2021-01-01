import { StyleRules } from "@material-ui/core/styles/withStyles";

const css = {
  formButtons: {
    display: 'flex',
    flexDirection: 'column',
    '& button': {
      width: '100%'
    },
    '& > * + *': {
      marginTop: '10px'
    }
  },
  formFields: {
    padding: '10px 0px',
    '& div + div': {
      marginTop: 10
    }
  }
} as const // for compile

export const commonAuthStyles: StyleRules<keyof typeof css> = css