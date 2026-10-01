# OverTheWire Bandit (Level 32-33)

# Objectives
    Good job getting a shell! Now hurry and grab the password for bandit27!
# Command used
    ssh, cat, vim (v), ./

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: ssh -i bandit14.key bandit14@bandit.labs.overthewire.org -p 2220
    # ssh is used to connect to the overthewire server and after @ was the hostlink of overthewire and -p is mean port and the port number of overthewire is 2220
3. After that type "$0"
    # $0 to escape the shell's uppercase. Because $0 is treated as an uncapitalized variable, the shell executes the program in that variable, the default /bin/sh.
4. ANDDDDDD just type "cat /etc/bandit_pass/bandit33" and you will get the password


# AND CONGRATS YOU COMPLETE BANDIT !!