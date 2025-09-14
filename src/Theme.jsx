
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
        //   primary: {
        //     main: "#1976d2",
        //   },
        //   secondary: {
        //     main: "#9c27b0",
        //   },
        //   background: {
        //     default: "#f5f5f5",
        //     paper: "#ffffff",
        //   },
        //   text: {
        //     primary: "#000000",
        //     secondary: "#555555",
        //   },
        }
      : {
          // palette values for dark mode
        //   primary: {
        //     main: "#90caf9",
        //   },
        //   secondary: {
        //     main: "#ce93d8",
        //   },
        //   background: {
        //     default: "#121212",
        //     paper: "#1e1e1e",
        //   },
        //   text: {
        //     primary: "#ffffff",
        //     secondary: "#aaaaaa",
        //   },
        }),
  },
});

export default getDesignTokens;
