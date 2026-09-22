# OverTheWire Bandit (Level 17-18)

# Objectives
  The password for the next level can be retrieved by submitting the password of the current level to port 30001 on localhost using SSL/TLS encryption.
# Command used
    ssh, ls, diff

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: ssh -i bandit17.key bandit17@bandit.labs.overthewire.org -p 2220
    # ssh is used to connect to the overthewire server and after @ was the hostlink of overthewire and -p is mean port and the port number of overthewire is 2220
3. After you in, you can type ls (list) to see what document saved in that directory
4. You will see 2 files that named passwords.old and passwords.new after that type this "diff passwords.old passwords.new"
    # diff (difference) is used to compare between files. The "<" symbol is represent the old password and the ">" is the real or new password for next level 
    

# AND CONGRATS YOU COMPLETE LEVEL 17