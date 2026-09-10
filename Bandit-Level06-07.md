# OverTheWire Bandit (Level 6-7)

# Objectives
   The password for the next level is stored somewhere on the server and has all of the following properties:
        owned by user bandit7
        owned by group bandit6
        33 bytes in size

# Command used
    ssh, ls, cat, cd, find

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: ssh bandit6@bandit.labs.overthewire.org -p 2220
    # ssh is used to connect to the overthewire server and after @ was the hostlink of overthewire and -p is mean port and the port number of overthewire is 2220
3. The password is password that you get on level 5-6
4. Type this command "find / -user bandit7 -group bandit6 -size 33c 2>/dev/null"
    # / = Find all type in root, -user bandit7 = the owner is bandit7, -group bandit6 = the group is bandit6, -size 33c = 33 bytes, 2>/dev/null = hide the error message (to make the terminal output look clean)
5. You will get the location of the file , and you type this command "cat /var/lib/dpkg/info/bandit7.password"
   
    

# AND CONGRATS YOU COMPLETE LEVEL 6