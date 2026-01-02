module.exports = {
  apps: [
    {
      name: "ashirarif",
      script: "./server.js",
      cwd: "/public_html/repo",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      min_uptime: "10s",
      max_restarts: 10,
      node_args: "--max-old-space-size=1024",
      cron_restart: "0 4 * * *",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        NODE_OPTIONS: "--max-old-space-size=1024",
      },
      error_file: "/public_html/repo/logs/err.log",
      out_file: "/public_html/repo/logs/out.log",
      merge_logs: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss", 
    },
  ],
};