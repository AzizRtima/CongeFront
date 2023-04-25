import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import DatePicker from "@react-native-community/datetimepicker";
import MyForm from "../components/savecomponent";

const CongeRemplaceurScreen = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View
          style={{
            flex: 0.5,
            marginHorizontal: 20,
            backgroundColor: "#FFFFE8",
            padding: 20,
            borderWidth: 1,
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 5,
              marginBottom: 10,
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
              Information de remplaçant
            </Text>
          </View>
          <View>
            <View
              style={{
                flex: 1,
                justifyContent: "space-around",
                marginBottom: 20,
                marginTop: 10,
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  justifyContent: "flex-end",
                  width: "100%",
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{
                    backgroundColor: "#E0E0E0",
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    width: "50%",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  RTIMA Aziz{" "}
                </Text>
              </View>
              <View
                style={{ flex: 1, justifyContent: "center", marginBottom: 10 }}
              >
                <Text
                  style={{
                    backgroundColor: "#E0E0E0",
                    paddingVertical: 10,
                    paddingHorizontal: 30,
                    width: "50%",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 18,
                  }}
                >
                  Montage
                </Text>
              </View>
              <View
                style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
              >
                <Text style={{ paddingRight: 5, fontSize: 18 }}>
                  Date de recrutment
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
        </View>
        <View
          style={{
            flex: 0.5,
            marginHorizontal: 20,
            backgroundColor: "#FFFFE8",
            padding: 20,
            borderWidth: 1,
            justifyContent: "flex-end",
            width: "100%",

            marginTop:20
          }}
        >
<View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 5,
              marginBottom: 10,
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
              Responsable de departement
            </Text>
          </View>  
          <MyForm ></MyForm>    
              </View>
      </View>
    </ScrollView>
  );
};

export default CongeRemplaceurScreen;

const styles = StyleSheet.create({});
