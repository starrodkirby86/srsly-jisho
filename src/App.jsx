import React, { Component } from 'react';
import 'typeface-roboto';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        background: theme.palette.background.paper,
    },
});

class App extends Component {
  render() {
    return (
        <Paper elevation={4}>
            <Typography type="headline" component="h1">
                Hello World!
            </Typography>
            <Typography type="body1" component="p">
                Stay tuned for more content. At 11.
            </Typography>
        </Paper>
    );
  }
}

export default withStyles(styles)(App);
