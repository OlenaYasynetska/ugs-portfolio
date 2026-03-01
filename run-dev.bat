@echo off
echo Starting backend on port 5000...
start "UGS Backend" cmd /k "cd /d F:\UGS\backend && npm run dev"
timeout /t 6 /nobreak >nul
echo Starting frontend...
cd /d F:\UGS
npm run dev
