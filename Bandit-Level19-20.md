# OverTheWire Bandit (Level 19-20)

# Objectives
  To gain access to the next level, you should use the setuid binary in the homedirectory. Execute it without arguments to find out how to use it. The password for this level can be found in the usual place (/etc/bandit_pass), after you have used the setuid binary.

# Command used
    ssh, cat 

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: ssh bandit19@bandit.labs.overthewire.org -p 2220
    # ssh is used to connect to the overthewire server and after @ was the hostlink of overthewire and -p is mean port and the port number of overthewire is 2220
3. The password is password that you get on level 18-19
4. After you in, type this "./bandit-do" to see how to use it
    # Runs the program/binary in the current directory. This program has the Set Owner User ID (SUID) bit enabled, so when run, it operates with the privileges of user bandit20, not the user bandit19 you are currently using.
5. After that you can type this command "./bandit20-do cat /etc/bandit_pass/bandit20" and you will get the password 

# AND CONGRATS YOU COMPLETE LEVEL 19