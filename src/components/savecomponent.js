import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const MyForm = () => {
  const [selectedName, setSelectedName] = useState('');

  // Fake data for the selectable list
  const data = [
    { id: '1', name: 'Nacer abidi' },
    { id: '2', name: 'Si aziz' },
    { id: '3', name: 'Moez' },
    { id: '4', name: 'Anna Thompson' },
    { id: '5', name: 'Michael Brown' },
  ];

  // Render item for the selectable list
  const renderItems = () => {
    return data.map(item => (
      <TouchableOpacity
        key={item.id}
        style={[
          styles.listItem,
          { opacity: item.name === selectedName ? 0.5 : 1 }, // Set opacity based on selected item
        ]}
        onPress={() => setSelectedName(item.name)}
      >
        <Text style={styles.listItemText}>{item.name}</Text>
      </TouchableOpacity>
    ));
  };

  // Handle "Envoyer" button press
  const handleEnvoyerPress = () => {
    // Perform actions when "Envoyer" button is pressed
    console.log(`Selected name: ${selectedName}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Chef Herarchique</Text>
      <View style={styles.listContainer}>{renderItems()}</View>
      {selectedName !== '' && (
        <Text style={styles.selectedNameText}>Selected Name: {selectedName}</Text>
      )}
      <Button title="Envoyer" onPress={handleEnvoyerPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  listContainer: {
    flex: 1,
    marginBottom: 16,
  },
  listItem: {
    padding: 8,
    backgroundColor: '#f8f8f8',
    borderRadius: 4,
    marginBottom: 8,
  },
  listItemText: {
    fontSize: 16,
  },
  selectedNameText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default MyForm;
