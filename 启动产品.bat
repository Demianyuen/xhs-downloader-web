@echo off
title 小红书视频下载器 - 启动服务器

echo ========================================
echo 小红书视频下载器 - 启动中...
echo ========================================
echo.

cd /d "%~dp0"

echo [1/2] 启动开发服务器...
start "Next.js Server" cmd /k "npm run dev"

echo [2/2] 等待服务器启动...
timeout /t 5 /nobreak >nul

echo.
echo ========================================
echo 服务器已启动！
echo ========================================
echo.
echo 访问地址:
echo   本地: http://localhost:3000
echo   网络: http://192.168.8.122:3000
echo.
echo 按任意键打开浏览器...
pause >nul

start http://localhost:3000

echo.
echo 浏览器已打开！
echo 保持此窗口运行以维持服务器。
echo 按 Ctrl+C 停止服务器。
echo.
pause
