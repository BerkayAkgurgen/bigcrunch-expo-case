export const moodSliderStyles = {
  wrapper: {
    marginVertical: 26,
  },
  title: {
    fontFamily: "Epilogue",
    fontSize: 16,
    color: "#371B34",
    marginBottom: 20,
  },
  iconBoxWrapper: (isLast) => ({
    marginRight: 24,
    paddingRight: isLast ? 24 : "auto",
  }),
  iconBox: (color) => ({
    backgroundColor: color,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    width: 59,
    height: 62,
  }),
  iconBoxSubtitle: {
    fontFamily: "Epilogue",
    fontSize: 12,
    color: "#828282",
    marginTop: 10,
    textAlign: "center",
  },
};
