import Box from "../components/Box";
import theme from "../src/theme/theme";

export default function HomeScreen() {
  return (
    <Box
      tag="main"
      StyleSheet={{
        fontFamily: theme.typography.fontFamily,
      }}

    >
      Oi Douglas
    </Box>
  );
}
