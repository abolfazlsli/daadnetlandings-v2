
@echo off
setlocal

echo ==================================
echo Starting Production Servers
echo ==================================

call :run daad-doctor 3010
call :run daad-kar 3011
call :run daad-kherad 3012
call :run daad-kheyr 3013
call :run daad-mohajer 3014
call :run daad-payam 3015
call :run daad-ravan 3016
call :run daad-ray 3017
call :run daad-vatan 3018

echo.
echo All production servers launched!
pause
exit /b 0


:run
echo.
echo Starting %~1 ...

if not exist "%~1\package.json" (
    echo ERROR: Project %~1 not found!
    exit /b 1
)

start "%~1" cmd /k "cd /d %~dp0%~1 && npm.cmd run start"

echo SUCCESS: %~1 launched
exit /b 0
