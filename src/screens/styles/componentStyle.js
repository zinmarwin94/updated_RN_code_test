import { StyleSheet } from 'react-native'
import { Colors } from '../../themes/'

export default StyleSheet.create({ 
  dot: {
    borderRadius: 50,
    marginRight: 14
  },
  photoContent: { 
    backgroundColor: Colors.mediumGray
  },
  photoView: {
    width: "100%",
    height: "100%", 
    flex: 1 
  },
  photoCaptionView: { 
    bottom: 0, 
    height: 85, 
    backgroundColor: "transparent",
    width: '100%', 
    position: 'absolute', 
    justifyContent: 'center' 
  },
  photoCaption: { 
    textAlign: 'center', 
    color: 'white', 
    fontSize: 15 
  },
  gallery: { 
    backgroundColor: Colors.mediumGray 
  },
  txt: { color: Colors.white },
  flxZero: { flex: 0 },
  resizeMode: {
    resizeMode: 'cover'
  },
  logoStyle: { 
    width: 120,
    height: 100, 
    resizeMode: 'center'
  },
  center: {
    flex: 1, 
    flexDirection: "column", 
    justifyContent: 'center', 
    alignItems:'center' 
  },
  introText: {
    color: Colors.darkGray, 
    marginTop: 20, 
    fontSize: 20
  },
  tryBtn: {
    padding: 10, 
    borderColor: Colors.darkGray, 
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 4
  }
})
