@echo off
::����YUI Compressor����Ŀ¼
SET YUIFOLDER=C:\
::�������JS��CSS��Ŀ¼���ű����Զ�������β��Һ�ѹ�����е�JS��CSS
SET JSFOLDER=E:\anchors\js\sea-modules\debug
echo ���ڲ��� JavaScript, CSS ...
chdir /d %JSFOLDER%
for /r . %%a in (*.js *.css) do (
@echo ����ѹ�� %%~a ...
@java -jar %YUIFOLDER%\yuicompressor-2.4.9.jar --charset UTF-8 %%~fa -o %%~fa
)
echo ���!
pause & exit