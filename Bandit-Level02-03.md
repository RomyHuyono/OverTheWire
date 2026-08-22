# OverTheWire Bandit (Level 1-2)

# Objectives

Get the password in the file named "--spaces in this filename--" that located in home directory

# Command used

ssh, ls, cat

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: 
    ssh bandit2@bandit.labs.overthewire.org -p 2220
    # ssh is used to connect to the overthewire server and after @ was the host link of overthewire and -p is mean port and the port number of overthewire is 2220
3. The password is password that you get on level 1-2
4. After you in, you can type ls (list) to see what document saved in that directory
5. You will see file named "--spaces in this filename--" and you can type this command:
    cat -- "--spaces in this filename--"
    # the "--" after the cat word is for additional to know linux if the next word is a file name not a command 

# AND CONGRATS YOU COMPLETE LEVEL 2