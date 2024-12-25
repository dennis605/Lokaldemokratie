import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Switch } from 'react-native';
import { Card, Text, Button, Avatar, ListItem } from '@rneui/themed';

const ProfileScreen = () => {
  const [notifications, setNotifications] = useState(true);
  const [location, setLocation] = useState(true);

  const interests = [
    'Umwelt & Nachhaltigkeit',
    'Stadtentwicklung',
    'Bildung',
    'Verkehr',
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar
          size={80}
          rounded
          title="JS"
          containerStyle={styles.avatar}
        />
        <Text h4 style={styles.name}>Julia Schmidt</Text>
        <Text style={styles.location}>Hamburg-Altona</Text>
      </View>

      <Card>
        <Card.Title>Meine Aktivitäten</Card.Title>
        <Card.Divider />
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Diskussionen</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Vorschläge</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>28</Text>
            <Text style={styles.statLabel}>Likes</Text>
          </View>
        </View>
      </Card>

      <Card>
        <Card.Title>Meine Interessen</Card.Title>
        <Card.Divider />
        {interests.map((interest, index) => (
          <ListItem key={index} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{interest}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))}
        <Button
          title="Interessen bearbeiten"
          type="clear"
          containerStyle={styles.editButton}
        />
      </Card>

      <Card>
        <Card.Title>Einstellungen</Card.Title>
        <Card.Divider />
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Benachrichtigungen</ListItem.Title>
          </ListItem.Content>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
          />
        </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Standort</ListItem.Title>
          </ListItem.Content>
          <Switch
            value={location}
            onValueChange={setLocation}
          />
        </ListItem>
      </Card>

      <Button
        title="Ausloggen"
        type="outline"
        containerStyle={styles.logoutButton}
        buttonStyle={styles.logoutButtonStyle}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  avatar: {
    backgroundColor: '#2089dc',
    marginBottom: 10,
  },
  name: {
    marginBottom: 5,
  },
  location: {
    color: '#666',
    marginBottom: 10,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2089dc',
  },
  statLabel: {
    color: '#666',
  },
  editButton: {
    marginTop: 10,
  },
  logoutButton: {
    margin: 20,
  },
  logoutButtonStyle: {
    borderColor: '#ff3b30',
  },
});

export default ProfileScreen;
