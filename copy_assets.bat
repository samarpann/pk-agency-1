@echo off
set "src=D:\company websites\wetransfer_pk-agencies_2026-04-07_0640"
set "dest=D:\company websites\pk-agency\public\assets"

echo Creating destination folder...
if not exist "%dest%" mkdir "%dest%"

echo Copying images and videos...
robocopy "%src%" "%dest%" *.jpg *.jpeg *.png *.mp4 *.gif /E /MT /Z

echo Done! Assets moved to %dest%
pause
