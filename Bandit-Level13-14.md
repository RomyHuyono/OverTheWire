# OverTheWire Bandit (Level 13-14)

# Objectives
 The password for the next level is stored in /etc/bandit_pass/bandit14 and can only be read by user bandit14. For this level, you don’t get the next password, but you get a private SSH key that can be used to log into the next level. Look at the commands that logged you into previous bandit levels, and find out how to use the key for this level.
 If you need help with this level: a hint file can be found in the home directory.
 Make sure to read the error messages as they are informative.
# Command used
    ssh, ls,  cat, tr

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: ssh bandit13@bandit.labs.overthewire.org -p 2220
    # ssh is used to connect to the overthewire server and after @ was the hostlink of overthewire and -p is mean port and the port number of overthewire is 2220
3. The password is password that you get on level 12-13
4. After you in, you can type ls (list) to see what document saved in that directory and you will see a file named "sshkey.private"
5. Type this command "cat sshkey.private" and select all of them from -----BEGIN until -----END OPENSSH PRIVATE KEY-----  and then logout from bandit13
6. On your local computer make a key file on it with type this "nano bandit14.key" and you will in the nano code editor, after that paste it in there with click right on your mouse/touchpad and then click ctrl + O and enter, and ctrl + x to exit
7. Change the permission of file use "chmod 600 bandit14.key" 
    # read = 4, write = 2, execute = 1
    # ex: chmod 600 the left number is owner and the middle is group, and the right is others
8. And then type "ssh -i bandit14.key bandit14@bandit.labs.overthewire.org -p 2220"
9. After you in, type "cat /etc/bandit_pass/bandit14
   
    

# AND CONGRATS YOU COMPLETE LEVEL 13