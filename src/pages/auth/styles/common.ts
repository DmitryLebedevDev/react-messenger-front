import { Styles } from "@material-ui/core/styles/withStyles";

export const commonAuthStyles: Styles<any,any> = {
  formFields: {
    padding: '10px 0px',
    '& div + div': {
      marginTop: 10
    }
  },
}