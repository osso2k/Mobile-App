import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center pt-2">
      <Text className="text-5xl font-bold text-accent ">Movies</Text>
      <Link href="/onboarding" className="text-blue-500 mt-4"> Onboarding</Link>
      <Link href="/movie/avengers" className="text-blue-500 mt-4">
        aveengers movie
      </Link>
    </View>
  );
}
