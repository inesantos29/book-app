import { Paper, Card, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff'
    },
    header:{
        padding:theme.spacing(3),
        display:'flex',
        marginTop:'64px',
        marginBottom:theme.spacing(2)
        
    },
    icon:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#3c44b1'
    },
    title:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        }
    }
}))


function Header({
  title,
  subTitle,
  icon,
}) {

  const classes = useStyles()

  return (
    <Paper elevation={0} square className={classes.root}>
        <div className={classes.header}>
            <Card className={classes.icon}>
                {icon}
            </Card>
            <div className={classes.title}>
              <Typography
                  variant="h6"
                  component="div">
                  {title}
              </Typography>
              <Typography
                variant="subtitle2"
                component="div">
                {subTitle}
              </Typography>
            </div>
        </div>
    </Paper>
  )
}

export default Header
