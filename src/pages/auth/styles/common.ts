import { StyleRules } from "@material-ui/core/styles/withStyles";

const css = {
  formFields: {
    padding: '10px 0px',
    '& div + div': {
      marginTop: 10
    }
  },
}

export const commonAuthStyles: StyleRules<keyof typeof css> = css