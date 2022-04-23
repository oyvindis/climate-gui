import { Colour, Token, Unit } from './enums';

export default {
  [Token.COLOUR]: {
    [Colour.NEUTRAL]: {
      N0: '#ffffff',
      N02: '#f5f6f7',
      N10: '#f7f7f7',
      N15: '#eeeff0',
      N20: '#dfe1e2',
      N30: '#d5d7d9',
      N40: '#969ba0',
      N50: '#6c737a',
      N60: '#2d3741',
      N70: '#121619'
    },
    [Colour.BLUE]: {
      B02: '#f5f8ff',
      B04: '#ebf1ff',
      B08: '#ccddff',
      B14: '#9ebeff',
      B16: '#8fb4ff',
      B20: '#70a0ff',
      B38: '#566c99',
      B44: '#475673',
      B48: '#3b4559',
      B52: '#2d3340',
      B54: '#252933',
      B56: '#1c2026'
    },
    [Colour.CYAN]: {
      C20: '#f0f6f7',
      C30: '#d5edf2',
      C50: '#2e6773'
    }
  },
  [Token.FONT]: {
    family: 'Rubik, sans-serif',
    size: {
      FS8: {
        [Unit.PX]: 8,
        [Unit.REM]: 0.8,
        [Unit.EM]: 0.8
      },
      FS10: {
        [Unit.PX]: 10,
        [Unit.REM]: 1.0,
        [Unit.EM]: 1.0
      },
      FS12: {
        [Unit.PX]: 12,
        [Unit.REM]: 1.2,
        [Unit.EM]: 1.2
      },
      FS14: {
        [Unit.PX]: 14,
        [Unit.REM]: 1.4,
        [Unit.EM]: 1.4
      },
      FS16: {
        [Unit.PX]: 16,
        [Unit.REM]: 1.6,
        [Unit.EM]: 1.6
      },
      FS18: {
        [Unit.PX]: 18,
        [Unit.REM]: 1.8,
        [Unit.EM]: 1.8
      },
      FS20: {
        [Unit.PX]: 20,
        [Unit.REM]: 2.0,
        [Unit.EM]: 2.0
      },
      FS24: {
        [Unit.PX]: 24,
        [Unit.REM]: 2.4,
        [Unit.EM]: 2.4
      },
      FS28: {
        [Unit.PX]: 28,
        [Unit.REM]: 2.8,
        [Unit.EM]: 2.8
      },
      FS32: {
        [Unit.PX]: 32,
        [Unit.REM]: 3.2,
        [Unit.EM]: 3.2
      },
      FS40: {
        [Unit.PX]: 40,
        [Unit.REM]: 4.0,
        [Unit.EM]: 4.0
      },
      FS48: {
        [Unit.PX]: 48,
        [Unit.REM]: 4.8,
        [Unit.EM]: 4.8
      }
    },
    weight: {
      FW100: 100,
      FW300: 300,
      FW400: 400,
      FW500: 500,
      FW700: 700,
      FW800: 800,
      FW900: 900
    }
  },
  [Token.SPACING]: {
    S2: {
      [Unit.PX]: 2,
      [Unit.REM]: 0.2,
      [Unit.EM]: 0.2
    },
    S4: {
      [Unit.PX]: 4,
      [Unit.REM]: 0.4,
      [Unit.EM]: 0.4
    },
    S6: {
      [Unit.PX]: 6,
      [Unit.REM]: 0.6,
      [Unit.EM]: 0.6
    },
    S8: {
      [Unit.PX]: 8,
      [Unit.REM]: 0.8,
      [Unit.EM]: 0.8
    },
    S10: {
      [Unit.PX]: 10,
      [Unit.REM]: 1.0,
      [Unit.EM]: 1.0
    },
    S12: {
      [Unit.PX]: 12,
      [Unit.REM]: 1.2,
      [Unit.EM]: 1.2
    },
    S16: {
      [Unit.PX]: 16,
      [Unit.REM]: 1.6,
      [Unit.EM]: 1.6
    },
    S20: {
      [Unit.PX]: 20,
      [Unit.REM]: 2.0,
      [Unit.EM]: 2.0
    },
    S24: {
      [Unit.PX]: 24,
      [Unit.REM]: 2.4,
      [Unit.EM]: 2.4
    },
    S32: {
      [Unit.PX]: 32,
      [Unit.REM]: 3.2,
      [Unit.EM]: 3.2
    },
    S40: {
      [Unit.PX]: 40,
      [Unit.REM]: 4.0,
      [Unit.EM]: 4.0
    },
    S48: {
      [Unit.PX]: 48,
      [Unit.REM]: 4.8,
      [Unit.EM]: 4.8
    },
    S50: {
      [Unit.PX]: 50,
      [Unit.REM]: 5.0,
      [Unit.EM]: 5.0
    },
    S56: {
      [Unit.PX]: 56,
      [Unit.REM]: 5.6,
      [Unit.EM]: 5.6
    },
    S64: {
      [Unit.PX]: 64,
      [Unit.REM]: 6.4,
      [Unit.EM]: 6.4
    },
    S72: {
      [Unit.PX]: 72,
      [Unit.REM]: 7.2,
      [Unit.EM]: 7.2
    },
    S80: {
      [Unit.PX]: 80,
      [Unit.REM]: 8.0,
      [Unit.EM]: 8.0
    },
    S88: {
      [Unit.PX]: 88,
      [Unit.REM]: 8.8,
      [Unit.EM]: 8.8
    },
    S96: {
      [Unit.PX]: 96,
      [Unit.REM]: 9.6,
      [Unit.EM]: 9.6
    }
  }
};
