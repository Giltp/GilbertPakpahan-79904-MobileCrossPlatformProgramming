import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import { 
  Surface, 
  Text, 
  Avatar, 
  Title, 
  Caption, 
  Divider, 
  List, 
  Chip,
  useTheme
} from 'react-native-paper';
import { styles } from './ProfilesScreenStyles';

// We could convert this to a data.json file as mentioned in the instructions
const friendsData = [
  {
    name: "Anthonio Raphael Porteuro Bulo",
    nim: "00000079343",
    photo: require('../../assets/Images/A.jpg')
  },
  {
    name: "Axel Reginald Wiranto",
    nim: "00000078456",
    photo: require('../../assets/Images/Axel Tidur.jpg')
  },
  {
    name: "Javarell Muhzeka",
    nim: "00000079908",
    photo: require('../../assets/Images/Javarel Tidur.jpg')
  },
  {
    name: "Efri Ramadhan",
    nim: "00000078662",
    photo: require('../../assets/Images/Efri Marah.jpg')
  },
  {
    name: "Batara Hotdo Horas Simbolon",
    nim: "00000078626",
    photo: require('../../assets/Images/Batara Hepi.jpg')
  },
  {
    name: "Fikri Naufal Andrasito",
    nim: "00000079229",
    photo: require('../../assets/Images/Fikri Keren.jpg')
  }
];

export default function ProfilesScreen() {
  const theme = useTheme();

  return (
    <ScrollView style={styles.container}>
      {/* Profile Section */}
      <Surface style={styles.profileCard}>
        <View style={styles.profileHeader}>
          <Avatar.Image 
            size={120} 
            source={require('../../assets/Images/Foto Muka.jpeg')} 
          />
          <Chip 
            mode="outlined" 
            style={styles.studentChip}
          >
            Student
          </Chip>
        </View>
        
        <Title style={styles.name}>Gilbert Parluhutan Pakpahan</Title>
        <Caption style={styles.nim}>00000079904</Caption>
        <Text style={styles.desc}>Tugas Mobile Cross Platform Week 4</Text>
      </Surface>

      <View style={styles.sectionHeader}>
        <Title style={styles.sectionTitle}>Teman-Teman</Title>
        <Chip icon="account-group">{friendsData.length} Friends</Chip>
      </View>
      
      <Divider style={styles.divider} />

      {/* Friend List with Paper components */}
      <Surface style={styles.friendsList}>
        {friendsData.map((friend, index) => (
          <React.Fragment key={friend.nim}>
            <List.Item
              title={<Text style={styles.friendName}>{friend.name}</Text>}
              description={<Caption>{friend.nim}</Caption>}
              left={props => (
                <Avatar.Image 
                  {...props}
                  size={56} 
                  source={friend.photo} 
                />
              )}
              style={styles.friendItem}
            />
            {index < friendsData.length - 1 && (
              <Divider style={styles.itemDivider} />
            )}
          </React.Fragment>
        ))}
      </Surface>
    </ScrollView>
  );
}