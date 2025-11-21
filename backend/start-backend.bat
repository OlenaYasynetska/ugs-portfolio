@echo off
echo.
echo ========================================
echo   Starting SnapVerse Backend Server
echo ========================================
echo.
cd /d "%~dp0"
call npm run dev
pause

