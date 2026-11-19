
const path = require("path");

const projects = [
  "daad-doctor",
  "daad-kar",
  "daad-kherad",
  "daad-kheyr",
  "daad-mohajer",
  "daad-payam",
  "daad-ravan",
  "daad-ray",
  "daad-vatan",
];

module.exports = {
  apps: projects.map((name, index) => ({
    name,
    cwd: path.resolve(__dirname, name),
    script: "node_modules/next/dist/bin/next",
    args: "start -p " + (3001 + index),
    interpreter: "node",
    autorestart: true,
    max_restarts: 10,
    restart_delay: 3000,
    windowsHide: true,
    env: {
      NODE_ENV: "production",
    },
  })),
};
