import React, { useRef, useState } from 'react';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

export default function HalCamera({ onBack }: { onBack?: () => void }) {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [mediaPermissionResponse, requestMediaPermission] = MediaLibrary.usePermissions();
  const cameraRef = useRef<any>(null);
  const [imageUri, setImageUri] = useState<string | null>(null);

  if (!permission?.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need camera permission</Text>
        <Button onPress={requestPermission} title="Grant Camera Permission" />
      </View>
    );
  }

  if (!mediaPermissionResponse?.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need media library permission</Text>
        <Button onPress={requestMediaPermission} title="Grant Media Permission" />
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing(f => (f === 'back' ? 'front' : 'back'));
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      const asset = await MediaLibrary.createAssetAsync(photo.uri);
      const album = await MediaLibrary.getAlbumAsync('Pictures');
      if (album) {
        await MediaLibrary.addAssetsToAlbumAsync([asset], album.id, false);
      } else {
        await MediaLibrary.createAlbumAsync('Pictures', asset, false);
      }
      setImageUri(photo.uri);
    }
  };

  const openGallery = async () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  const saveTextFile = async () => {
    const fileUri = FileSystem.documentDirectory + 'test.txt';
    try {
      await FileSystem.writeAsStringAsync(fileUri, 'Ini dari expo-file-system', {
        encoding: FileSystem.EncodingType.UTF8,
      });

      const asset = await MediaLibrary.createAssetAsync(fileUri);
      const album = await MediaLibrary.getAlbumAsync('Pictures');
      if (album) {
        await MediaLibrary.addAssetsToAlbumAsync([asset], album.id, false);
      } else {
        await MediaLibrary.createAlbumAsync('Pictures', asset, false);
      }

      alert('File berhasil disimpan ke folder Pictures');
    } catch (error) {
      console.error('Gagal simpan file:', error);
    }
  };

  return (
    <View style={styles.container}>
      <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>Take Photo</Text>
          </TouchableOpacity>
        </View>
      </CameraView>

      <View style={styles.actionButtons}>
        <Button title="Open Gallery" onPress={openGallery} />
        <Button title="Save Text File" onPress={saveTextFile} />
        <Button title="Back" onPress={onBack} />
      </View>

      {imageUri && (
        <Image source={{ uri: imageUri }} style={styles.preview} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    margin: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#00000080',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: '#fff',
  },
  actionButtons: {
    flexDirection: 'column',
    padding: 10,
  },
  preview: {
    width: '100%',
    height: 300,
    marginTop: 10,
    resizeMode: 'contain',
  },
  message: {
    padding: 20,
    textAlign: 'center',
  },
});
