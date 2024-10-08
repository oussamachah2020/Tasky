import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import Logo from "@/assets/images/light-logo.svg";
import { Text } from "react-native-paper";
import { fontFamily } from "@/constants/typography";

export default function LoginScreen() {
  return (
    <View style={{ position: "relative" }}>
      <View style={{ position: "relative"}}>
        {/* Background Gradient */}
        <View style={{ position: "relative" }}>
          {/* Background Gradient */}
          <LinearGradient
            colors={[
              "#1E3B70",
              "#1E3B70",
              "#1E3B70",
              "#1E3B70",
              "#1E3B70",
              "#29539B",
            ]}
            start={[0, 0]}
            end={[1, 1]}
            style={{
              height: "100%",
            }}
          >
            <View style={{ zIndex: 1, marginHorizontal: 10 }}>
              <Logo />
            </View>
              <View style={styles.caption}>
                <Text style={{fontSize: 20, color: '#fff', fontFamily: fontFamily.semiBold, fontWeight: '700'}}>Get Started Now</Text>
              <Text style={{color: '#fff', fontFamily: fontFamily.Medium, fontWeight: '400', fontSize: 16}}>Welcome to the best task manager application</Text>
              </View>
              <View style={styles.container}>
            <Text style={{
                fontFamily: "Manrope-SemiBold",
                fontWeight: '500',
                fontSize: 25,
                textAlign: 'center'
            }}>Sign In</Text>
        </View>
          </LinearGradient>
        </View>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {},
  caption: {
    justifyContent: 'flex-start',
    gap: 4,
    alignItems: 'flex-start',
    marginTop: -15,
    marginLeft: 5
  },
  container: {
    backgroundColor: '#fff',
    height: '100%',
    marginTop: 40,
    paddingTop: 20,
    paddingHorizontal: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5, // Elevation for Android
  
    // Shadow properties for iOS
    shadowColor: '#fff', 
    shadowOffset: { width: 0, height: -5 }, // This makes the shadow only on top
    shadowOpacity: 0.1, // Adjust the opacity for a softer shadow
    shadowRadius: 10,    // The radius of the blur for the shadow
  }
  
});
