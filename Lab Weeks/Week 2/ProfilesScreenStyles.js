import { StyleSheet } from "react-native";

// Modern, warm color palette
const colors = {
  primary: "#E57373",      // Warm red/coral as primary accent
  primaryLight: "#FFE0E0", // Lighter shade of primary for backgrounds
  background: "#FFFAF7",   // Warm off-white
  cardBg: "#FFFFFF",       // Pure white for cards
  textDark: "#3A3A3A",     // Soft black for primary text
  textMedium: "#707070",   // Medium gray for secondary text
  textLight: "#A0A0A0",    // Light gray for tertiary text
  divider: "#F0E4E0",      // Soft divider color
  shadow: "rgba(229, 115, 115, 0.15)" // Tinted shadow
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
    alignItems: "center",
  },

  // User list card styling
  card: {
    backgroundColor: colors.cardBg,
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    width: "90%",
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 0,
  },

  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 16,
    borderWidth: 2,
    borderColor: colors.primaryLight,
  },

  textContainer: {
    flex: 1,
  },

  name: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.textDark,
    marginBottom: 4,
  },

  email: {
    fontSize: 14,
    color: colors.textMedium,
  },

  // Profile styling
  profileCard: {
    width: "90%",
    backgroundColor: colors.cardBg,
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 2,
    marginVertical: 16,
    marginHorizontal: 16,
  },

  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: colors.primaryLight,
  },

  profileName: {
    fontSize: 24,
    fontWeight: "600",
    color: colors.textDark,
    textAlign: "center",
    marginBottom: 6,
  },

  profileNIM: {
    fontSize: 16,
    color: colors.textMedium,
    marginBottom: 8,
    textAlign: "center",
  },

  infoCard: {
    width: "90%",
    backgroundColor: colors.cardBg,
    borderRadius: 16,
    padding: 20,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
    color: colors.textDark,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
    paddingBottom: 8,
  },

  profileLabel: {
    fontSize: 15,
    fontWeight: "500",
    color: colors.textMedium,
    marginBottom: 4,
  },

  profileValue: {
    fontSize: 16,
    color: colors.textDark,
    marginBottom: 16,
  },

  backButton: {
    width: "90%",
    backgroundColor: colors.primary,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 16,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 2,
  },

  backButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default styles;