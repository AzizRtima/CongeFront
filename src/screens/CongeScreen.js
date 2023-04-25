import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CongeRechercheScreen from "./CongeRechercheScreen";
import DatePicker from "@react-native-community/datetimepicker";
import Icon from "react-native-vector-icons/FontAwesome";
import CheckBox, { Checkbox } from "expo-checkbox";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

const CongeScreen = ({navigation}) => {
  const [current, setCurrent] = useState("test");

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  
  const handleRemp = () => {
  // handle login logic here
  navigation.navigate('CongeRemplaceurScreen');
};

  const handleOptionPress = (option) => {
    setSelectedOption(option);
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };
  const [isChecked, setChecked] = useState(false);
  const [textInputValue, setTextInputValue] = useState("");

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <CongeRechercheScreen />
        <View
          style={{
            flex: 0.5,
            marginHorizontal: 20,
            backgroundColor: "#FFFFE8",
            padding: 20,
            borderWidth: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                backgroundColor: "#fff",
                color: "red",
                textDecorationLine: "underline",
                fontSize: 20,
              }}
            >
              Information Du Bénéficier
            </Text>
          </View>
          <View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around",
                marginBottom: 20,
                marginTop: 10,
              }}
            >
              <View style={{ flex: 1, justifyContent: "center" }}>
                <Text
                  style={{
                    backgroundColor: "#E0E0E0",
                    paddingVertical: 10,
                    paddingHorizontal: 30,
                    width: "80%",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  RTIMA Aziz{" "}
                </Text>
              </View>
              <View
                style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
              >
                <Text style={{ paddingRight: 5, fontSize: 18 }}>
                  {" "}
                  Date de recrutment{" "}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    borderWidth: 1,
                    justifyContent: "center",
                    paddingRight: 5,
                  }}
                >
                  <Text style={{ paddingVertical: 10, paddingHorizontal: 30 }}>
                    {date.toDateString()}
                  </Text>
                  <Icon
                    name="calendar"
                    size={24}
                    color="black"
                    onPress={showDatePicker}
                  />
                </View>
                {show && (
                  <DatePicker
                    value={date}
                    mode="date"
                    display="spinner"
                    onChange={onChange}
                  />
                )}
              </View>
            </View>
          </View>
          <View>
            <View style={{ flex: 1, width: "40%" }}>
              <Text
                style={{
                  backgroundColor: "#E0E0E0",
                  paddingVertical: 10,
                  paddingHorizontal: 30,
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Informatique
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 20,
              marginRight: 10,
            }}
          >
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Text style={{ paddingRight: 5, fontSize: 18 }}>
                {" "}
                1er jour de conge{" "}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  justifyContent: "center",
                  paddingRight: 5,
                }}
              >
                <Text style={{ paddingVertical: 10, paddingHorizontal: 30 }}>
                  {date.toDateString()}
                </Text>
                <Icon
                  name="calendar"
                  size={24}
                  color="black"
                  onPress={showDatePicker}
                />
              </View>
              {show && (
                <DatePicker
                  value={date}
                  mode="date"
                  display="spinner"
                  onChange={onChange}
                />
              )}
            </View>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <Text style={{ paddingRight: 5, fontSize: 18 }}>
                {" "}
                Dernier jour de conge{" "}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  justifyContent: "center",
                  paddingRight: 5,
                }}
              >
                <Text style={{ paddingVertical: 10, paddingHorizontal: 30 }}>
                  {date.toDateString()}
                </Text>
                <Icon
                  name="calendar"
                  size={24}
                  color="black"
                  onPress={showDatePicker}
                />
              </View>
              {show && (
                <DatePicker
                  value={date}
                  mode="date"
                  display="spinner"
                  onChange={onChange}
                />
              )}
            </View>
          </View>
          <View style={styles.ForceView}>
            <View style={styles.checkboxContainer}>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "red" : undefined}
              />
            </View>
            <Text style={styles.label}>Force la modification</Text>
            <TextInput
              value={textInputValue}
              onChangeText={setTextInputValue}
              placeholder="Ajouter une note"
              multiline={true}
              style={styles.textInput}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                style={{ flex: 1, justifyContent: "center" }}
                onPress={() => console.log("Libele button pressed")}
              >
                <Text
                  style={{
                    backgroundColor: "#E0E0E0",
                    paddingVertical: 10,
                    paddingHorizontal: 30,
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  Libele
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => console.log("Jour button pressed")}
              >
                <Text
                  style={{
                    backgroundColor: "#E0E0E0",
                    paddingVertical: 10,
                    paddingHorizontal: 30,
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  Jour
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 0.4 }} />
            <View
              style={{
                flex: 1,
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#000",
                  borderWidth: 1,
                  marginRight: 10,
                  backgroundColor: "#fff",
                }}
              >
                <Text
                  style={{
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    textAlign: "center",
                    fontSize: 18,
                  }}
                >
                  55.6
                </Text>
              </View>
              <TouchableOpacity
                style={{ flex: 1, justifyContent: "center" }}
                onPress={() => console.log("Heurs button pressed")}
              >
                <Text
                  style={{
                    backgroundColor: "#E0E0E0",
                    paddingVertical: 10,
                    paddingHorizontal: 30,
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  Heurs
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", paddingRight: 10 }}
            >
              Motif
            </Text>
            <TextInput
              value={textInputValue}
              onChangeText={setTextInputValue}
              placeholder="Ajouter une note"
              multiline={true}
              numberOfLines={2}
              style={styles.motifInput}
            />
          </View>
        </View>
        <View
          style={{
            flex: 0.5,
            marginHorizontal: 20,
            backgroundColor: "#FFFFE8",
            padding: 20,
            borderWidth: 1,
            marginTop: 20,
            flexDirection: "row",
          }}
        >
        
          <View style={{flex:0.45,flexDirection:'row',alignItems:"center",justifyContent:"space-between",marginRight:20}}>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", paddingRight: 10 }}
            >
              {" "}
              Solde Congé{" "}
            </Text>
            <Text style={{ fontSize: 16,backgroundColor:"#fff", paddingVertical: 10,paddingLeft:10,paddingRight:25,marginHorizontal:5,borderWidth:1 }}>44.55</Text>
            <Text style={{ fontSize: 18, fontWeight: "bold", paddingRight: 10 }}>Heurs</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              backgroundColor: "red",
              borderRadius: 20,
              paddingVertical: 20,
              paddingVertical: 20,
            }}
          >
            <RadioButtonGroup
              containerStyle={{
                marginBottom: 10,
                flex: 1,
                flexDirection: "row",
              }}
              selected={current}
              onSelected={(value) => setCurrent(value)}
              radioBackground="green"
              radioStyle={{ backgroundColor: "#fff" }}
            >
              <RadioButtonItem
                style={{ marginHorizontal: 10 }}
                value="test2"
                label={
                  <Text style={{ color: "#fff" }}>Example with string</Text>
                }
              />
              <RadioButtonItem
                style={{ marginHorizontal: 10 }}
                value="test"
                label={
                  <Text style={{ color: "#fff" }}>
                    Example passing React Element
                  </Text>
                }
              />
            </RadioButtonGroup>
          </View>
        </View>
        <View style={ {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20
  }}>
        <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8}  onPress={handleRemp}>
      <Text style={styles.buttonText}>Suivant</Text>
    </TouchableOpacity>
    </View>
      </View>

    </ScrollView>
  );
};

export default CongeScreen;
const styles = StyleSheet.create({
  buttonContainer: {
    flex:1,
    width:300,

    backgroundColor: '#007bff', // Button background color
    borderRadius: 20, // Button border radius
    paddingVertical: 10, // Button vertical padding
    paddingHorizontal: 20, // Button horizontal padding
    borderWidth: 2, // Button border width
    borderColor: '#fff', // Button border color
    opacity: 0.8, // Button opacity
  },
  buttonText: {
    color: '#fff', // Button text color
    textAlign: 'center', // Button text alignment
    fontSize:18,
  },
  ForceView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
    marginRight: 40,
    marginTop: 20,
  },
  checkboxContainer: {
    width: 24,
    height: 24,
    marginHorizontal: 10,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
    marginLeft: 10,
    marginRight: 5,
  },
  textInput: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "55%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
  },
  motifInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});
