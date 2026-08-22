# OverTheWire Bandit (Level 0-1)

# Objectives

Get The Password in a "readme" file that
 located in home directory

# Command Used

ls, cat, ssh

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: 
    ssh bandit0@bandit.labs.overthewire.org -p 2220
        // ssh is used to connect to the 
        overthewire server and after @ was the host link of overthewire and -p is 
        mean port and the port number of overthewire is 2220
3. The password is bandit0  (because this password is given)
4. After you in, you can type ls (list) to see what document saved in that directory
5. You will see the file named readme and you can type this command:
    cat readme
        // cat command thats mean you want to read this file

    # And congrats, you complete the level 0-1#
