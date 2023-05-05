/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.pug', './dist/*.html', './dist/**/*.html', '*.scss', './**/*.scss'],
  theme: {
    extend: {
      colors: {
        background: '#F4F7FC',
        primary: {
          900: '#1D1E85',
          800: '#201DB6',
          700: '#1E49E2',
          600: '#4B56FF',
          500: '#4B56FF',
          400: '#6D81FF',
          300: '#97AFFF',
          200: '#BECFFF',
          100: '#DBE5FF',
          75: '#CCDDFF',
          50: '#EBF2FF'
        },
        secondary: {
          500: '#540B0D',
          400: '#8E1216',
          300: '#EF060E',
          200: '#DA5D62',
          100: '#E69598',
          75: '#EEB8BA',
          50: '#FAE8E9'
        },
        neutral: {
          900: '#1C1F24',
          800: '#292D34',
          700: '#49505A',
          600: '#6A7381',
          500: '#A8B1BD',
          400: '#CDD3DD',
          300: '#E4E8EE',
          200: '#EEF1F6',
          100: '#F8F9FB',
          white: '#FFFFFF'
        },
        dark: {
          90: 'rgba(0, 0, 0, 0.8)',
          70: 'rgba(0, 0, 0, 0.7)',
          50: 'rgba(0, 0, 0, 0.5)',
          30: 'rgba(0, 0, 0, 0.3)',
          20: 'rgba(0, 0, 0, 0.2)',
          10: 'rgba(0, 0, 0, 0.1)'
        },
        success: {
          500: '#098B12',
          400: '#16C120',
          300: '#5EE167',
          200: '#B5F1B9',
          100: '#E7FBE8'
        },
        warning: {
          500: '#D85B00',
          400: '#FF8000',
          300: '#FFAA54',
          200: '#FFD8B0',
          100: '#FFF2E6'
        },
        light: {
          60: '#FFFFFF',
          50: 'rga(255, 255, 255, 0.5)',
          40: 'rga(255, 255, 255, 0.4)',
          30: 'rga(255, 255, 255, 0.3)',
          20: 'rga(255, 255, 255, 0.2)',
          10: 'rga(255, 255, 255, 0.1)'
        },
        error: {
          500: '#970101',
          400: '#C61A0B',
          300: '#EF060E',
          200: '#F45532',
          100: '#FFE3E0'
        },
        text: {
          primary: '#222830',
          secondary: '#5B636D',
          tertiary: '#7E868F'
        }
      },
      lineHeight: {
        11: '2.75rem', // 44px
        12: '3rem', // 48px
        13: '3.25rem', // 52px
        14: '3.5rem', // 56px
        15: '3.75rem', // 60px
        16: '4rem', // 64px
        17: '4.25rem', // 68px
        18: '4.5rem', // 72px
        19: '4.75rem', // 76px
        20: '5rem' // 80px
      },
      fontSize: {
        xxs: '0.625rem', // 10px
        20: '1.25rem', // 20px
        24: '1.5rem', // 24px
        28: '1.75rem', // 28px
        32: '2rem', // 32px
        40: '2.5rem' // 40px
      },
      width: {
        buttonDefault: '9.375rem', // 150px
        buttonResponsive: '20.9375rem', // 150px
        '12/25': '48%' // 48%
      }
    },
    plugins: []
  }
}
