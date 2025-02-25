import Svg, { Path } from "react-native-svg";

const CommunityIcon = ({
  stroke = "#D9D8D8",
  activeStroke = "none",
  fill = "none",
  activeFill = "#FE8235",
  focused,
}) => {
  return (
    <Svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M33.5384 17.1539C31.7605 17.1539 30.3076 18.6067 30.3076 20.3846C30.3076 22.1626 31.7605 23.6154 33.5384 23.6154C35.3163 23.6154 36.7692 22.1626 36.7692 20.3846C36.7692 18.6067 35.3163 17.1539 33.5384 17.1539Z"
        fill={focused ? activeFill : fill}
        stroke={focused ? activeStroke : stroke}
        strokeWidth={2.6}
      />
      <Path
        d="M22.7691 15.0001C20.3969 15.0001 18.4614 16.9355 18.4614 19.3078C18.4614 21.68 20.3969 23.6154 22.7691 23.6154C25.1414 23.6154 27.0768 21.68 27.0768 19.3078C27.0768 16.9355 25.1414 15.0001 22.7691 15.0001Z"
        fill={focused ? activeFill : fill}
        stroke={focused ? activeStroke : stroke}
        strokeWidth={2.6}
      />
      <Path
        d="M37.906 27.3359C39.2626 28.2903 40 29.527 40 30.7825V34.3847C40 34.9794 39.5179 35.4616 38.9231 35.4616H24.9231V30.7825C24.9231 29.527 25.6605 28.2903 27.0171 27.3359C28.3737 26.3816 30.3073 25.7693 32.4616 25.7693C34.6158 25.7693 36.5494 26.3816 37.906 27.3359Z"
        fill={focused ? activeFill : fill}
        stroke={focused ? activeStroke : stroke}
        strokeWidth={2.6}
      />
      <Path
        d="M30.547 28.5869C32.485 29.6473 33.5385 31.0215 33.5385 32.4165V36.5385C33.5385 37.1333 33.0563 37.6154 32.4615 37.6154H13.0769C12.4822 37.6154 12 37.1333 12 36.5385V32.4165C12 31.0215 13.0535 29.6473 14.9915 28.5869C16.9294 27.5266 19.6917 26.8462 22.7692 26.8462C25.8468 26.8462 28.6091 27.5266 30.547 28.5869Z"
        fill={focused ? activeFill : "#ffffff"}
        stroke={focused ? activeStroke : stroke}
        strokeWidth={2.6}
      />
    </Svg>
  );
};

export default CommunityIcon;
