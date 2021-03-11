import { StyleRules } from "@material-ui/core/styles/withStyles"

const css = {
  form: {
    '& > * + *': {
      marginTop: '10px'
    }
  },
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
    '& div + div': {
      marginTop: 10
    }
  },
  formError: {
    color: 'red',
    textAlign: 'center'
  },
  greenButton: {
    background:'#43a047',
    color: 'white',
    '&:hover': {
      background: '#419145'
    }
  }
} as const // for compile

export const commonAuthStyles: StyleRules<keyof typeof css> = css