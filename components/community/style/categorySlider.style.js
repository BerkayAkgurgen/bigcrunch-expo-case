export const categorySliderStyle = {
  categoriesTitle: {
    marginVertical: 20,
    fontFamily: "EpilogueBold",
    color: "#371B34",
    fontSize: 18,
  },
  scrollSliderContainer: {
    flexDirection: "row",
  },
  categorySliderWrapper: (isLast) => ({
    alignItems: "center",
    paddingRight: isLast ? 24 : 0,
    marginRight: 12,
  }),
  categorySliderContainer: (selected) => ({
    backgroundColor: selected ? "#FE8235" : "#F4F2F1",
    borderRadius: 9,
    height: 38,
    paddingVertical: 4,
    width: "auto",
  }),
  categorySliderTitle: (selected) => ({
    fontSize: 14,
    fontFamily: "Epelogue",
    color: selected ? "#FBFBFB" : "#8A8A8A",
    paddingHorizontal: 15,
    paddingVertical: 4,
  }),
};
