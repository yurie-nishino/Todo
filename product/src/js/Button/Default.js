import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button 
      variant="contained"
      //2つ以上イベントが重なるときはclickFuncで共通化する
      onClick={props.clickFunc}
      >
      {props.buttonTitle}
      </Button>
    </div>
  );
}
