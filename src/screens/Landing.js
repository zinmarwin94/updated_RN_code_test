import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import { connect } from "react-redux";
import Axios from "axios";
import { Header } from "native-base";
import { Colors } from 'react-native/Libraries/NewAppScreen';


import { setPopularMoviesData } from "../store/actions";

class Landing extends Component { 
  state = {
    popular_movies: [],
    top_rated_movies: []
  }

  getPopular = async () => {
    let response = await Axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=961277648f1e28c74788bade62b3b24c&language=en-US&page=1", 
        { headers: { "Content-Type": "application/json" } 
      }
    );  
    if(response.data){
      this.props.onSetPopularMoviesData(response.data.results) 
      this.setState({
        popular_movies: response.data.results
      })
    }
  }

  getTopRated = async () => {
    let response = await Axios.get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=961277648f1e28c74788bade62b3b24c&language=en-US&page=1", 
        { headers: { "Content-Type": "application/json" } 
      }
    );  
    if(response.data){
      this.props.onSetPopularMoviesData(response.data.results) 
      this.setState({
        top_rated_movies: response.data.results
      })
    }
  }

  async componentDidMount () {
   this.getPopular();
   this.getTopRated();
  }

  render() { 
    return (
      <>
        <Header style={{backgroundColor: "#ea3222"}}>  
          <StatusBar backgroundColor={"#ea3222"} /> 
          <Text style={{ color: "#FAFAFA", fontSize: 18 }}>Home</Text>
        </Header>  
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}
          > 
             <Image 
              source={{ uri: "https://jooinn.com/images/view-10.jpg" }} 
              style={{ height: 200, width: "100%" }} 
            />

            <View style={{ margin: 10 }}>
              <Text style={{ fontSize: 18,  }}>Popular Movies</Text>
                <ScrollView horizontal>
                  {this.state.popular_movies.map((item, index) =>{
                    return (
                    <View key={index} style={{ width: 200, borderWidth: 0.5, margin: 10 }}>
                      <Image 
                        source={{ uri: "http://image.tmdb.org/t/p/w185" + item.poster_path }} 
                        style={{ height: 150, width: "100%", borderWidth: 0.5 }} 
                      />
                      <Text numberOfLines={1} style={{ backgroundColor: "#333333", color: "#FAFAFA", padding: 5, fontSize: 16 }}>{item.title}</Text>
                    </View>
                  );
                })}
              </ScrollView> 
            </View>

            <View style={{ margin: 10 }}>
              <Text style={{ fontSize: 18,  }}>Latest Movies</Text>
              <ScrollView horizontal>
                  {this.state.top_rated_movies.map((item, index) =>{
                    return (
                    <View key={index} style={{ width: 200, borderWidth: 0.5, margin: 10 }}>
                      <Image 
                        source={{ uri: "http://image.tmdb.org/t/p/w185" + item.poster_path }} 
                        style={{ height: 150, width: "100%", borderWidth: 0.5 }} 
                      />
                      <Text numberOfLines={1} style={{ backgroundColor: "#333333", color: "#FAFAFA", padding: 5, fontSize: 16 }}>{item.title}</Text>
                    </View>
                  );
                })}
              </ScrollView> 
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
 
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

const mapStateToProps = state => {
  return {
    popular_movies: state.popular_movies, 
  };
};

const mapDispatchToProps = dispatch => ({
  onSetPopularMoviesData: (movies) => dispatch(setPopularMoviesData(movies)), 
});

export default connect( mapStateToProps, mapDispatchToProps)(Landing);
