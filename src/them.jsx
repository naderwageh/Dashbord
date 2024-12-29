// dark and light mode in topbar
export function getDesingnTokens(mood) {
    return {
      palette: {
        mode: mood.toLowerCase(), // تأكد من تحويل الحالة إلى lowercase
        ...(mood.toLowerCase() === 'dark' && {
          background: {
            default: '#121212',
            paper: '#1D1D1D',
          },
          text: {
            primary: '#ffffff',
            secondary: '#b0b0b0',
          },
        }),
        ...(mood.toLowerCase() === 'light' && {
          background: {
            default: '#ffffff',
            paper: '#f5f5f5',
          },
          text: {
            primary: '#000000',
            secondary: '#555555',
          },
        }),
      },
    };
  }