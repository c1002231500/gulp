@echo off
::设置YUI Compressor启动目录
SET YUIFOLDER=C:\
::设置你的JS和CSS根目录，脚本会自动按树层次查找和压缩所有的JS和CSS
SET JSFOLDER=E:\anchors\js\sea-modules\debug
echo 正在查找 JavaScript, CSS ...
chdir /d %JSFOLDER%
for /r . %%a in (*.js *.css) do (
@echo 正在压缩 %%~a ...
@java -jar %YUIFOLDER%\yuicompressor-2.4.9.jar --charset UTF-8 %%~fa -o %%~fa
)
echo 完成!
pause & exit