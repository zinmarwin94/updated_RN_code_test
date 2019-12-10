import React from 'react';
import { StyleSheet } from 'react-native';
import { Root } from "native-base";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppContainer from "./src/config/router";
import AppReducer from "./src/store/reducers";

let composeEnhancers = compose;
const store = createStore(AppReducer, composeEnhancers(applyMiddleware(thunk)));

const App: () => React$Node = () => {
  return (
    <>
     <Provider store={store}>
        <Root>
          <AppContainer />
        </Root>
      </Provider> 
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
