import * as FileSystem from 'expo-file-system';

const FILE_PATH = FileSystem.documentDirectory + 'users.json';

export const readUsers = async (): Promise<any[]> => {
  try {
    const content = await FileSystem.readAsStringAsync(FILE_PATH);
    return JSON.parse(content);
  } catch (error) {
    return [];
  }
};

export const saveUser = async (newUser: any): Promise<void> => {
  const users = await readUsers();
  users.push(newUser);
  await FileSystem.writeAsStringAsync(FILE_PATH, JSON.stringify(users));
};

export const findUser = async (email: string, password: string): Promise<any | null> => {
  const users = await readUsers();
  return users.find(user => user.email === email && user.password === password) || null;
};

export const isEmailRegistered = async (email: string): Promise<boolean> => {
  const users = await readUsers();
  return users.some(user => user.email === email);
};

export const updateUserPassword = async (email: string, newPassword: string): Promise<boolean> => {
  const users = await readUsers();
  const index = users.findIndex(user => user.email === email);
  
  if (index === -1) return false;

  users[index].password = newPassword;
  await FileSystem.writeAsStringAsync(FILE_PATH, JSON.stringify(users));
  return true;
};
