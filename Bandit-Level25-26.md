# OverTheWire Bandit (Level 25-26)

# Objectives
    Logging in to bandit26 from bandit25 should be fairly easy… The shell for user bandit26 is not /bin/bash, but something else. Find out what it is, how it works and how to break out of it.

    NOTE: if you’re a Windows user and typically use Powershell to ssh into bandit: Powershell is known to cause issues with the intended solution to this level. You should use command prompt instead.
# Command used
    ssh, cat, nano, vim (v)

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: ssh bandit25@bandit.labs.overthewire.org -p 2220
    # ssh is used to connect to the overthewire server and after @ was the hostlink of overthewire and -p is mean port and the port number of overthewire is 2220
3. The password is password that you get on level 24-25
4. After you in type this "ls -la"
    # to know what the name of sshkey file 
5. And then "cat bandit26.sshkey", and then copy all of the content in that file from -----BEGIN until -----END
6. After that you log out from bandit25 (type exit) and make a key file in your own home directory with "nano bandit26.key"
7. And then paste it with right click on your mouse/touchpad and then ctrl +o to save it and press enter after that ctrl + x to exit
8. After that you must you have to shrink your terminal until it only fits 2-3 lines only after that you type this "ssh -i bandit26.key bandit26@bandit.labs.overthewire.org -p 2220" and after the visual stop in "More" you press v on your keyboard
9. After that type ":set shell=/bin/bash" 
    # this will telling the vim that If I ask you to run a computer command, please use Bash as the interpreter, okay?
10. And then type ":shell"
    # this will temporarily exit the editor and enter the full terminal view without losing any previous work.
11. And the lasttttt is "cat /etc/bandit_pass/bandit26"

# AND CONGRATS YOU COMPLETE LEVEL 25