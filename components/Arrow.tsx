import { ArrowLeft } from "phosphor-react-native";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
interface ArrowLeftProps {
  color: string;
}

export function Arrow({ color }: ArrowLeftProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={{ position: "absolute", left: 30, top: 30 }}
      onPress={() => router.back()}
    >
      <ArrowLeft size={36} color={color} />
    </TouchableOpacity>
  );
}
