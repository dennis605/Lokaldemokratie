import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Button, SearchBar } from '@rneui/themed';

const NewsScreen = () => {
  const [search, setSearch] = useState('');

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Suchen Sie nach Themen..."
        onChangeText={updateSearch}
        value={search}
        platform="default"
        containerStyle={styles.searchContainer}
        lightTheme
      />
      <ScrollView>
        <Card>
          <Card.Title>Neuer Stadtpark geplant</Card.Title>
          <Card.Divider />
          <Text style={styles.date}>Heute, 10:30</Text>
          <Text style={styles.text}>
            Die Stadt plant einen neuen Park im Zentrum. Das Projekt soll die
            Lebensqualität verbessern und mehr Grünflächen schaffen.
          </Text>
          <Button
            title="Mehr lesen"
            type="clear"
            containerStyle={styles.readMoreButton}
          />
        </Card>

        <Card>
          <Card.Title>Bürgerbefragung zur Verkehrsberuhigung</Card.Title>
          <Card.Divider />
          <Text style={styles.date}>Gestern, 15:45</Text>
          <Text style={styles.text}>
            Die Stadt startet eine Online-Befragung zur geplanten
            Verkehrsberuhigung in der Innenstadt.
          </Text>
          <Button
            title="An Befragung teilnehmen"
            type="solid"
            containerStyle={styles.readMoreButton}
          />
        </Card>

        <Card>
          <Card.Title>Neue Fahrradwege beschlossen</Card.Title>
          <Card.Divider />
          <Text style={styles.date}>24. Dezember 2024</Text>
          <Text style={styles.text}>
            Der Stadtrat hat den Ausbau des Fahrradwegenetzes beschlossen.
            Die Arbeiten beginnen im Frühjahr.
          </Text>
          <Button
            title="Mehr lesen"
            type="clear"
            containerStyle={styles.readMoreButton}
          />
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchContainer: {
    backgroundColor: '#f5f5f5',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  text: {
    marginBottom: 10,
    fontSize: 16,
  },
  date: {
    color: '#666',
    marginBottom: 10,
    fontSize: 14,
  },
  readMoreButton: {
    marginTop: 10,
  },
});

export default NewsScreen;
