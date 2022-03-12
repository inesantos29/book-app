import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import Header from './components/Header'
import BookEngine from './components/BookEngine'

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#f4f5fd"
    },
  }
})

const useStyles = makeStyles((theme) => ({ 
  content: {
    padding: theme.spacing(3), 
  },
}))

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar>
         <Toolbar>
        <Typography variant="h6" noWrap>
          GetGround - Inês Catana 🥷
        </Typography>
      </Toolbar>
      </AppBar>
     
      <Header
        title="Library"
        subTitle="GetGround | Book Application"
        icon={
          <LibraryBooksIcon fontSize="large" />
        }
      />
      <main className={classes.content}>
        <BookEngine />
      </main>
    </ThemeProvider>
  )
}

export default App