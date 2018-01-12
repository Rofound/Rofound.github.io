# Android 环境搭建
***
## 原料：
- Windows 10 企业版(64位)
- Eclipse 3.3及以上(64位)
![https://i.imgur.com/jg1wv3W.png](https://i.imgur.com/jg1wv3W.png)
- android-sdk_r24.4.1-windows.zip(SDK)
>[`https://dl.google.com/android/android-sdk_r24.4.1-windows.zip`](https://dl.google.com/android/android-sdk_r24.4.1-windows.zip)
- ADT-23.0.6.zip(ADT,下载速度很快)
- jdk-1.8.0_121(64位)
- CPU虚拟化检测软件
>[`http://down1.downxia.com/down/LeoMoonCPUV.rar`](http://down1.downxia.com/down/LeoMoonCPUV.rar)
用于检查cpu虚拟化功能，若未开启，请进入bios 开启相关设置，开启cpu虚拟化用于加快虚拟机的运行（。。有点扯，我乱写的）。
- genymotion-2.3.1-vbox.exe
安装完成后会弹出一个Oracle VM VirtualBox的安装界面一起安装便是，安装好后如果启动Oracle VM VirtualBox运行虚拟机很卡，就重装下面的VirtualBox-4.3.6-91406-Win.exe，就可变好，这个版本对windows10 还不是完全兼容所以请在安装时勾选属性中的 “以兼容性模式运行这个程序”并选中下拉列表中的Windows 7、以管理员身份运行此程序这两处，由于genymotion软件本身就是调用的VirtualBox的接口，所以也给virtualBox管理员权限。
![](https://i.imgur.com/uJvkyA3.png)
- VirtualBox-4.3.6-91406-Win.exe 
这个版本的virtualBox对windows10 还不是完全兼容所以请在安装时勾选属性中的 “以兼容性模式运行这个程序”并选中下拉列表中的Windows 7、以管理员身份运行此程序这两处。
- 将下面的jar包放到eclipse目录下的plugins目录下即可：
com.genymobile.genymotion.ide.eclipse.plugin_1.0.3.201403261147.jar
com.genymobile.genymotion.lib_1.0.3.201403261147.jar
- Htc.ova
![ova](https://i.imgur.com/0dbp3E0.png)
# 下载eclipse
[](https://www.eclipse.org/downloads/download.php?file=/technology/epp/downloads/release/oxygen/2/eclipse-jee-oxygen-2-win32-x86_64.zip)
# 下载有关android 的开发工具、jdk-1.8.0_121(64位)、
[`http://tools.android-studio.org/index.php`](http://tools.android-studio.org/index.php)
# ADT-23.0.6.zip
[`https://dl.google.com/android/ADT-23.0.0.zip`](https://dl.google.com/android/ADT-23.0.0.zip)


# 安装好所有程序后，开始配置
- 配置ADT
Eclipse:Help-->Install new software-->Add-->Archive-->找到ADT-23.0.6.zip的位置选中它，打开-->..I aspect-->next..。
- 配置SDK
Eclipse:Windows-->Preferences-->Android-->Browse-->D:\YjFuk\zking\android\android\android-sdk_r24.4.1-windows\android-sdk-windows。<br />
- 配置ADB
记得注册一个用户，否则的话就去掉'Remember my credentials' 的勾，不然可是会很卡还不行哦
![[](images/genymotion.png)](https://i.imgur.com/qTLK9tw.png)
Genymotion:Settings-->ADB-->Browse-->D:\YjFuk\zking\android\android\android-sdk_r24.4.1-windows\android-sdk-windows。
- 导入虚拟机*.ova
管理-->导入虚拟电脑-->选择一个文件-->Htc.ova<br />
PS:
Eclipse 的配置如下，
![[](images/eclipse_ini.png)](https://i.imgur.com/r5F2Utx.png)
