# OverTheWire Bandit (Level 3-4)

# Objectives
    Get the password in the folder that named "inhere" and it was hidden

# Command used
    ssh, ls, cat, cd

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: ssh bandit3@bandit.labs.overthewire.org -p 2220
    # ssh is used to connect to the overthewire server and after @ was the hostlink of overthewire and -p is mean port and the port number of overthewire is 2220
3. The password is password that you get on level 2-3
4. After you in, you can type ls (list) to see what document saved in that directory
5. You will see folder named "inhere" and you can type this command: "cd inhere"
    # the cd command is used to change directory to the wanted directory
6. Type this command "ls -a"
    # ls -a is used to see the all file, not care is hidden or not
    and you will see file that named "...Hiding-From-You"
7. Type this command "cat ...Hiding-From-You"
    # a small tips, after you type cat ... , you can just click Tab button on your keyboard and itu will automatic write the file name without typo

# AND CONGRATS YOU COMPLETE LEVEL 3