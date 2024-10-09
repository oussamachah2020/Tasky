import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, View } from "react-native";
import Logo from "@/assets/images/light-logo.svg";
import { Button, Text, TextInput } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

const formSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  password: z.string().min(1).max(16),
});

export default function RegisterScreen() {
  const { control, formState, handleSubmit } = useForm<
    z.infer<typeof formSchema>
  >({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [visible, setVisible] = useState(false);
  const { errors, isValid, isSubmitting } = formState;

  function togglePasswordVisibility() {
    setVisible((prev) => !prev);
  }

  function submit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <View style={{ position: "relative" }}>
      <LinearGradient
        colors={["#192f6a", "#3b5998"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: "100%" }}
      >
        <View style={{ zIndex: 1, marginHorizontal: 10 }}>
          <Logo />
        </View>
        <View style={styles.caption}>
          <Text style={{ fontSize: 20, color: "#fff", fontWeight: "700" }}>
            Get Started Now
          </Text>
          <Text style={{ color: "#fff", fontWeight: "400", fontSize: 16 }}>
            Welcome to the best task manager application
          </Text>
        </View>
        <View style={styles.container}>
          <Text
            style={{
              fontFamily: "Manrope-SemiBold",
              fontWeight: "500",
              fontSize: 25,
              textAlign: "center",
            }}
          >
            Sign Up
          </Text>
          <View style={styles.form}>
              <View style={styles.field}>
                <Text>First Name</Text>
                <Controller
                  control={control}
                  name="first_name"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Enter your first name"
                      mode="outlined"
                      style={styles.input}
                      outlineStyle={{
                        borderRadius: 10,
                        borderColor: "rgba(0,0,0,0.2)",
                      }}
                      onBlur={onBlur}
                      onChangeText={(text) => onChange(text.toLowerCase())} // Converts to lowercase
                      value={value}
                    />
                  )}
                />
                {errors?.email && (
                  <Text style={{ color: "red" }}>{errors.email.message}</Text>
                )}
              </View>
              <View style={styles.field}>
                <Text>Last Name</Text>
                <Controller
                  control={control}
                  name="last_name"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Enter your last name"
                      mode="outlined"
                      style={styles.input}
                      outlineStyle={{
                        borderRadius: 10,
                        borderColor: "rgba(0,0,0,0.2)",
                      }}
                      onBlur={onBlur}
                      onChangeText={(text) => onChange(text.toLowerCase())}
                      value={value}
                    />
                  )}
                />
                {errors?.email && (
                  <Text style={{ color: "red" }}>{errors.first_name?.message}</Text>
                )}
              </View>
            <View style={styles.field}>
              <Text>E-mail</Text>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Enter your e-mail"
                    mode="outlined"
                    style={styles.input}
                    outlineStyle={{
                      borderRadius: 10,
                      borderColor: "rgba(0,0,0,0.2)",
                    }}
                    onBlur={onBlur}
                    onChangeText={(text) => onChange(text.toLowerCase())} // Converts to lowercase
                    value={value}
                  />
                )}
              />
              {errors?.email && (
                <Text style={{ color: "red" }}>{errors.last_name?.message}</Text>
              )}
            </View>

            <View style={styles.field}>
              <Text>Password</Text>
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder="Enter your password"
                    mode="outlined"
                    style={styles.input}
                    outlineStyle={{
                      borderRadius: 10,
                      borderColor: "rgba(0,0,0,0.2)",
                    }}
                    secureTextEntry={!visible}
                    right={
                      <TextInput.Icon
                        icon={visible ? "eye" : "eye-off"}
                        onPress={togglePasswordVisibility}
                      />
                    }
                    onBlur={onBlur}
                    onChangeText={(text) => onChange(text.toLowerCase())} // Converts to lowercase
                    value={value}
                  />
                )}
              />
              {errors?.password && (
                <Text style={{ color: "red" }}>{errors.password.message}</Text>
              )}
            </View>

            <Button
              mode="contained"
              style={{
                borderRadius: 10,
                height: 52,
                justifyContent: "center",
                backgroundColor: "#1E3B70",
                marginTop: 10,
              }}
              disabled={!isValid || isSubmitting}
              onPress={handleSubmit(submit)}
            >
              <Text
                style={{
                  fontWeight: "600",
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                Register
              </Text>
            </Button>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  caption: {
    justifyContent: "flex-start",
    gap: 4,
    alignItems: "flex-start",
    marginTop: -15,
    marginLeft: 15,
  },
  container: {
    backgroundColor: "#fff",
    height: "100%",
    marginTop: 40,
    paddingTop: 30,
    paddingHorizontal: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  form: {
    marginTop: 30,
    marginHorizontal: 10,
    gap: 20,
  },
  field: {
    gap: 10,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 10,
  },
});
