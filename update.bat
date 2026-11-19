@echo off
setlocal

echo ==================================
echo Updating Repository
echo ==================================

git pull origin master

if errorlevel 1 (
    echo ERROR: Git pull failed!
    pause
    exit /b 1
)

echo.
echo ==================================
echo Running Deployment
echo ==================================

call deploy.bat

if errorlevel 1 (
    echo ERROR: Deployment failed!
    pause
    exit /b 1
)

echo.
echo ==================================
echo Starting Production Servers
echo ==================================

call runner.bat

if errorlevel 1 (
    echo ERROR: Runner failed!
    pause
    exit /b 1
)

echo.
echo ==================================
echo Deployment Completed Successfully!
echo ==================================

pause
exit /b 0