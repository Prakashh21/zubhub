const styles = theme => ({
  marginTop1em: {
    marginTop: '1em',
  },
  marginBottom1em: {
    marginBottom: '1em',
  },
  marginLeft1em: {
    marginLeft: '1em',
  },
  marginRight1em: {
    marginRight: '1em',
  },
  colorRed: {
    color: 'red',
  },
  displayInlineBlock: {
    display: 'inline-block',
  },
  displayInlineFlex: {
    display: 'inline-flex',
  },
  displayFlex: {
    display: 'flex',
  },
  alignCenter: {
    alignItems: 'center',
  },
  addOnSmallScreen: {
    [theme.breakpoints.up('530')]: {
      display: 'none',
    },
  },
  removeOnSmallScreen: {
    [theme.breakpoints.down('530')]: {
      display: 'none',
    },
  },
  topMinus20PX: {
    top: '-20px',
  },
  left15PX: {
    left: '15px',
  },
  width100Percent: {
    width: '100%',
  },
});

export default styles;
