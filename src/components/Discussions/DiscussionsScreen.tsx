import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Button, Input, Avatar } from '@rneui/themed';

const DiscussionsScreen = () => {
  const [comment, setComment] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView>
        <Card>
          <Card.Title>Aktuelle Diskussionen</Card.Title>
          <Card.Divider />
          
          {/* Discussion Thread */}
          <View style={styles.thread}>
            <View style={styles.threadHeader}>
              <Avatar
                rounded
                title="MB"
                containerStyle={styles.avatar}
              />
              <View>
                <Text style={styles.username}>Maria Bauer</Text>
                <Text style={styles.date}>Vor 2 Stunden</Text>
              </View>
            </View>
            <Text style={styles.threadTitle}>
              Vorschläge für die Gestaltung des neuen Stadtparks
            </Text>
            <Text style={styles.text}>
              Ich fände es toll, wenn wir im neuen Stadtpark auch einen
              Bereich für Urban Gardening einplanen könnten. Was haltet ihr davon?
            </Text>
            <View style={styles.stats}>
              <Text style={styles.statsText}>12 Antworten</Text>
              <Text style={styles.statsText}>•</Text>
              <Text style={styles.statsText}>24 Likes</Text>
            </View>
            <Button
              title="An Diskussion teilnehmen"
              type="outline"
              containerStyle={styles.participateButton}
            />
          </View>

          <Card.Divider />

          {/* New Comment Input */}
          <Input
            placeholder="Schreiben Sie einen Kommentar..."
            value={comment}
            onChangeText={setComment}
            multiline
          />
          <Button
            title="Kommentar senden"
            disabled={!comment}
            containerStyle={styles.sendButton}
          />
        </Card>

        {/* More Discussions */}
        <Card>
          <Card.Title>Weitere Themen</Card.Title>
          <Card.Divider />
          <Button
            title="Verkehrsberuhigung Hauptstraße"
            type="clear"
            containerStyle={styles.topicButton}
          />
          <Button
            title="Modernisierung der Schulen"
            type="clear"
            containerStyle={styles.topicButton}
          />
          <Button
            title="Neue Sportanlagen"
            type="clear"
            containerStyle={styles.topicButton}
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
  thread: {
    marginBottom: 15,
  },
  threadHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    backgroundColor: '#2089dc',
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    color: '#666',
    fontSize: 14,
  },
  threadTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  stats: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  statsText: {
    color: '#666',
    marginRight: 10,
  },
  participateButton: {
    marginTop: 10,
  },
  sendButton: {
    marginTop: 10,
  },
  topicButton: {
    marginVertical: 5,
  },
});

export default DiscussionsScreen;
