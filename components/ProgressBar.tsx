import { useEffect, useState,  } from "react";
import { View,StyleSheet } from "react-native";


const ProgressBar = ({ progress, width, height, color }) => {
    const [progressWidth, setProgressWidth] = useState(0);
  
    useEffect(() => {
      setProgressWidth(progress * width);
    }, [progress, width]);
  
    return (
      <View style={[styles.progressBar, { width, height, backgroundColor: color }]}>
        <View style={[styles.progress, { width: progressWidth, backgroundColor: color }]} />
      </View>
    );
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    progressBar: {
      borderWidth: 1,
      borderColor: 'lightgrey',
      borderRadius: 5,
      overflow: 'hidden',
    },
    progress: {
      height: '100%',
    },
  });
  
export default ProgressBar;