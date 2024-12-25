import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Button } from '@rneui/themed';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Title>Willkommen bei Lokale Demokratie</Card.Title>
        <Card.Divider />
        <Text style={styles.text}>
          Bleiben Sie informiert über aktuelle politische Themen in Ihrer Stadt
          und beteiligen Sie sich aktiv an der Gestaltung Ihrer Gemeinde.
        </Text>
      </Card>

      <Card>
        <Card.Title>Aktuelle Themen</Card.Title>
        <Card.Divider />
        <View style={styles.topicContainer}>
          <Button
            title="Verkehrsplanung"
            type="outline"
            containerStyle={styles.topicButton}
          />
          <Button
            title="Umweltschutz"
            type="outline"
            containerStyle={styles.topicButton}
          />
          <Button
            title="Bildung"
            type="outline"
            containerStyle={styles.topicButton}
          />
        </View>
      </Card>

      <Card>
        <Card.Title>Nächste Bürgerbeteiligung</Card.Title>
        <Card.Divider />
        <Text style={styles.text}>
          Stadtratssitzung: Diskussion über neue Radwege
        </Text>
        <Text style={styles.date}>27. Dezember 2024, 19:00 Uhr</Text>
        <Button
          title="Teilnehmen"
          type="solid"
          containerStyle={styles.participateButton}
        />
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  text: {
    marginBottom: 10,
    fontSize: 16,
  },
  date: {
    color: '#666',
    marginBottom: 10,
  },
  topicContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  topicButton: {
    margin: 5,
    minWidth: '45%',
  },
  participateButton: {
    marginTop: 10,
  },
});

export default HomeScreen;
