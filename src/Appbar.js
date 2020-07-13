import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, Divider, Button } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import CallEndIcon from '@material-ui/icons/CallEnd';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  biodata: {
      diplay:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'end',
      backgroundColor:'#8345C8',
      height:120,
      color:'#FCFCFC',
      
  },
  details: {
      minHeight:'100%',
      margin:30
  }
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#8345C8' }}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6"  color="inherit">
            Stockist Biodata Scanner
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={0}>
          <Grid item xs={12}>
            <div className={classes.biodata}>
            <Typography style={{textAlign:'center', paddingTop:30}} variant="h6" > Timi Balogun </Typography>
            <Typography style={{textAlign:'center'}} variant="body1" color="inherit">Stockist </Typography>
            </div>
          </Grid>

          <Grid item xs={1}></Grid>
          <Grid item xs={10} className={classes.details}>
              <Typography color="textSecondary" variant="body1"><b>Membership Code:</b> NG000001</Typography>
              <Typography color="textSecondary" variant="body1"><b>Address: </b> 12 Balogun street, Ikeja Lagos</Typography>
              <Typography color="textSecondary" variant="body1"><b>Stockist Code: </b> NGXXXX01</Typography>
              <Typography color="textSecondary" variant="body1"><b>Year of joining:</b> 2019</Typography>
              <Typography color="textSecondary" variant="body1" style={{marginBottom:20}}><b>Staff/Contact name: </b> Victoria Abu</Typography>

              <Divider />
              <Grid item container style={{marginTop:20}}>
              <Grid item xs={1}>
                <PhoneIcon fontSize="small" style={{marginTop:10, paddingRight:50}} />
              </Grid>
              <Grid item xs={11}>
                <Typography variant="body1" style={{ marginBottom:0, fontWeight:400}}>  08023008263</Typography>
                <Typography color="textSecondary" variant="body2" style={{ marginBottom:20}}> Mobile </Typography>
              </Grid>
            </Grid>

            <Divider />
              <Grid item container style={{marginTop:20}}>
              <Grid item xs={1}>
                <CallEndIcon fontSize="small" style={{marginTop:10, paddingRight:50}} />
              </Grid>
              <Grid item xs={11}>
                <Typography variant="body1" style={{ marginBottom:0, fontWeight:400}}>  2341-27065330</Typography>
                <Typography color="textSecondary" variant="body2" style={{ marginLeft:0}}> Telephone</Typography>
              </Grid>
            </Grid>
            <br></br><br></br>
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<PhoneIcon />}
                style={{backgroundColor:'#8345C8'}}
            >
                Call
            </Button>

          </Grid>
          <Grid item xs={1}></Grid>

      </Grid>
    </div>
  );
}
