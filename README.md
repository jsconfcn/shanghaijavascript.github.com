shanghaijavascript.github.com
=============================

Website for 沪JS 2012.

Currently deployed to Aliyun ACE at [http://hujs2012.aliapp.com](http://hujs2012.aliapp.com).


DEPLOYMENT
----------

To deploy to Aliyun, use a tool called [git-ftp](https://github.com/resmo/git-ftp). Please follow the installation instructions on the project page.

Make your changes, and perform the normal ``git add`` and ``git commit`` actions. 

To deploy use this command from the project root:

```
git ftp push -u hujs2012 -p - ftp://ftp.ace.aliyun.com:2222
``` 

Contact @thoward for deployment password.