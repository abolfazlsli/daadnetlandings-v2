
@echo off
setlocal

echo ==================================
echo Starting Install & Build Process
echo ==================================

call :build daad-doctor
call :build daad-kar
call :build daad-kherad
call :build daad-kheyr
call :build daad-mohajer
call :build daad-payam
call :build daad-ravan
call :build daad-ray
call :build daad-vatan

echo.
echo ==================================
echo All processes completed!
echo ==================================

exit /b 0


:build
echo.
echo ==================================
echo Processing %~1
echo ==================================

if not exist "%~1\package.json" (
    echo ERROR: Project %~1 not found!
    exit /b 0
)

pushd "%~1"

echo.
echo Installing dependencies for %~1 ...
call npm.cmd install

if errorlevel 1 (
    echo ERROR: Dependency installation failed for %~1
    popd
    exit /b 0
)

echo.
echo Building %~1 ...
call npm.cmd run build

if errorlevel 1 (
    echo ERROR: Build failed for %~1
    popd
    exit /b 0
)

popd

echo.
echo SUCCESS: %~1
exit /b 0
