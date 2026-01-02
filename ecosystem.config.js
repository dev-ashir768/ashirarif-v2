module.exports = {
  apps: [
    {
      name: "ashirarif",
      script: "bun",
      args: "run server.ts",
      cwd: "/public_html/repo",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      min_uptime: "10s",
      max_restarts: 10,
      cron_restart: "0 4 * * *",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      error_file: "/public_html/repo/logs/err.log",
      out_file: "/public_html/repo/logs/out.log",
      merge_logs: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss", 
    },
  ],
};