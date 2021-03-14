import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#080A0C",
    alignItems: "stretch",
    color: "#ffffff",
    fontFamily: "Cochin"
  },
  main: {
    color: "#ffffff",
    fontFamily: "Cochin",
    fontSize: 20,
  },
  choice: {
    fontSize:20,
    color: "#fff",
    fontFamily: "Cochin",
  },
  rowItem: {
    flexDirection: 'row',
    margin: 5
  },
  rowDetails: {
    flex: 2,
    color: '#fff',
  }
});

export default styles
