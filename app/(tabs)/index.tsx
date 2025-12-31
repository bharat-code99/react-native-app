import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-5xl text-dark-100 font-semibold">Home</Text>
    </SafeAreaView>
  );
}
