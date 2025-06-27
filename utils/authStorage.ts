import * as FileSystem from 'expo-file-system';

const FILE_PATH = FileSystem.documentDirectory + 'loggedUser.json';

export const saveLoggedUser = async (user: any): Promise<void> => {
  await FileSystem.writeAsStringAsync(FILE_PATH, JSON.stringify(user));
};

export const getLoggedUser = async (): Promise<any | null> => {
  try {
    const data = await FileSystem.readAsStringAsync(FILE_PATH);
    return JSON.parse(data);
  } catch (e) {
    return null;
  }
};

export const removeLoggedUser = async (): Promise<void> => {
  try {
    await FileSystem.deleteAsync(FILE_PATH);
  } catch (e) {
  }
};
