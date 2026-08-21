# OverTheWire Bandit (Level 1-2)

# Objectives

Get the password from file named - that located in home directory

# Command used

ssh, ls, cat 

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: 
    ssh bandit1@bandit.labs.overthewire.org -p 2220
        # ssh is used to connect to the 
        overthewire server and after @ was the host link of overthewire and -p is 
        mean port and the port number of overthewire is 2220
3. The password is password that you get on level 0-1 
4. After you in, you can type ls (list) to see what document saved in that directory
5. You will see file that named "-" and you can type this command: 
    cat ./-
    #the ./ is to announce linux that "-" is a file, not a command or smth

# AND CONGRATS YOU COMPLETED LEVEL 1
