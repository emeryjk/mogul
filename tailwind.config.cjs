const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {}
  },

  plugins: [require("daisyui")]

   
};

module.exports = {
  //...
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0c64fa",
          secondary: "#1be3f3",
          accent: "#c4bcfb",
          neutral: "#e4e4e4",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}