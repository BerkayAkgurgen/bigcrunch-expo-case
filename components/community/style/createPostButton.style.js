export const createPostButtonStyle = {
  postButton: (screenWidth) => ({
    position: "fixed",
    width: 58,
    height: 58,
    backgroundColor: "#FE8235",
    bottom: 75,
    left: screenWidth - 75,
    borderRadius: 58 / 2,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#fe8235",
    shadowOffset: {
      width: 20,
      height: 15,
    },
    shadowOpacity: 0.24,
    shadowRadius: 6.41,
    elevation: 15,
  }),
};
