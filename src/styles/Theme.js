const fontSizes = {
  // ! 15px은 16px or 14px 선택, 13px은 12px로 바꿔쓰세요.
  xs: calcRem(12),
  small: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(24),
  titleSize: calcRem(32),
};

const fontWeights = {
  thin: '200',
  light: '300',
  regular: '400',
  bold: '500',
  semiBold: '600',
  extraBold: '700',
};

const paddings = {
  small: calcRem(4),
  base: calcRem(8),
  large: calcRem(16),
  xl: calcRem(20),
  xxl: calcRem(24),
  xxxl: calcRem(40),
};

const margins = {
  small: calcRem(4),
  base: calcRem(8),
  large: calcRem(16),
  xl: calcRem(20),
  xxl: calcRem(24),
  xxxl: calcRem(40),
  xxxxl: calcRem(50),
};

const colors = {
  white: '#FFFFFF',
  kakaoYellow: '#F7E318',
  kakaoBrown: '#341F20',
  lightGray: '#AEB5BC',
  gray: '#676D74',
  boldGray: '#353A3F',
  blue: '#3FA5F7',
  boxBlue: '#2b96ed',
  hoverBlue: '#4A97E6',
  underlineBlue: '#88BEF0',
  selectBlue: '#4a97e6',
  noneGray: '#cfd4d9',
};

const borders = {
  borderBox: '1px solid #AEB5BC',
};

const flex = {
  flexBox: (direction = 'row', align = 'center', justify = 'center') => `
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
  `,
};

const theme = {
  fontWeights,
  fontSizes,
  paddings,
  margins,
  colors,
  borders,
  flex,
};

export default theme;
