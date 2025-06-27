import * as FileSystem from 'expo-file-system';

const FILE_PATH = FileSystem.documentDirectory + 'verificationCodes.json';

interface CodeEntry {
  email: string;
  code: string;
}

const readCodes = async (): Promise<CodeEntry[]> => {
  try {
    const data = await FileSystem.readAsStringAsync(FILE_PATH);
    return JSON.parse(data);
  } catch {
    return [];
  }
};

const saveCodes = async (codes: CodeEntry[]) => {
  await FileSystem.writeAsStringAsync(FILE_PATH, JSON.stringify(codes));
};

export const generateAndSaveCode = async (email: string): Promise<string> => {
  const code = Math.floor(1000 + Math.random() * 9000).toString(); // 4 dígitos aleatórios
  const codes = await readCodes();

  // Remove código anterior para o email
  const filtered = codes.filter(c => c.email !== email);

  filtered.push({ email, code });
  await saveCodes(filtered);

  return code;
};

export const verifyCode = async (email: string, code: string): Promise<boolean> => {
  const codes = await readCodes();
  return codes.some(c => c.email === email && c.code === code);
};

export const removeCode = async (email: string) => {
  const codes = await readCodes();
  const filtered = codes.filter(c => c.email !== email);
  await saveCodes(filtered);
};

