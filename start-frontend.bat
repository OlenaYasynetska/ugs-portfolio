@echo off
echo.
echo ========================================
echo   Starting SnapVerse Frontend
echo ========================================
echo.
cd /d "%~dp0"
call npm run dev
pause

