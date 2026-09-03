# OverTheWire Bandit (Level 5-6)

# Objectives
   The password for the next level is stored in a file somewhere under the inhere directory and has all of the following properties:
            human-readable
         1033 bytes in size
            not executable

# Command used
    ssh, ls, cat, cd, find

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: ssh bandit5@bandit.labs.overthewire.org -p 2220
    ssh is used to connect to the overthewire server and after @ was the host link of overthewire and -p is mean port and the port number of overthewire is 2220
3. The password is password that you get on level 4-5
4. After you in, you can type ls (list) to see what document saved in that directory
5. You will see folder named "inhere" and you can type this command: "cd inhere"
    # the cd command is used to change directory to the wanted directory
6. Type this command "find -type f -size 1033c ! -executable"
    This command can help you to find the file based on the criteria:
        type f is file type
        size 1033c is 1033 bytes
        ! -executable is not executable
    And you will find the location of the file 
7. Type this command "cat ./maybehere07/.file2"
    

# AND CONGRATS YOU COMPLETE LEVEL 5