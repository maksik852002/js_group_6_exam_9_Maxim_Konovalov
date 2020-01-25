import React, { useEffect } from "react";
import { ScrollView, View, Text, Modal, TouchableOpacity } from "react-native";
import { getContacts, modalShow } from "../../store/action";
import styles from "../../styles";
import { connect } from "react-redux";

import Contact from "../../components/Contact";
import Spinner from "../../components/Spinner";
import ContactData from "../../components/ContactData";

import { FontAwesome } from "@expo/vector-icons";

const Dishes = ({
  loading,
  contacts,
  modal,
  id,
  getContacts,
  modalShow,
  error
}) => {
  useEffect(() => {
    getContacts();
  }, []);

  return (
    <View style={styles.container}>
      <Modal
        style={{ width: "90%" }}
        animationType="slide"
        transparent={false}
        visible={modal}
      >
        <TouchableOpacity
          style={{ paddingTop: 20, paddingLeft: 20 }}
          onPress={() => modalShow("")}
        >
          <FontAwesome name="arrow-circle-left" size={80} />
        </TouchableOpacity>
        {id.length > 0 && <ContactData id={id} contacts={contacts} />}
      </Modal>
      {loading ? (
        <Spinner />
      ) : (
        <View style={styles.dishesContainer}>
          <Text
            style={{
              textAlign: "center",
              paddingBottom: 10,
              borderBottomWidth: 3,
              borderBottomColor: "#fff",
              marginBottom: 10
            }}
          >
            {error.length > 0 ? "Ups!" : "Contacts:"}
          </Text>
          <ScrollView style={styles.list}>
            {error.length > 0 ? (
              <Text style={{ textAlign: "center" }}>{error}</Text>
            ) : (
              Object.keys(contacts).map(
                id =>
                  contacts[id] && (
                    <Contact
                      key={id}
                      id={id}
                      name={contacts[id].name}
                      photo={contacts[id].photo}
                      press={() => modalShow(id)}
                    />
                  )
              )
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = state => ({
  loading: state.loading,
  contacts: state.contacts,
  modal: state.modal,
  id: state.id,
  error: state.error
});

const mapDispatchToProps = dispatch => ({
  getContacts: () => dispatch(getContacts()),
  modalShow: id => dispatch(modalShow(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);
