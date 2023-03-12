import {StyleSheet} from 'react-native';
import theme from '../../includes/styles/theme.style';

export default StyleSheet.create({
  accordion: {
    justifyContent: 'flex-start',
  },
  background: {
    backgroundColor: theme.COLOR_BINANCE_1ST_BLACK,
  },
  bankAccount: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  container: {
    paddingTop : theme.SPACING_L,
    flex: 1,
  },
  padding0: {
    padding: 0,
  },
  row: {
    flexDirection: 'row',
  },
  textRight: {
    textAlign: 'right',
  },
  textWhite: {
    color: theme.COLOR_WHITE_LIGHT,
  },
  textYellow: {
    color: theme.COLOR_GOLDEN_YELLOW,
  },
});
