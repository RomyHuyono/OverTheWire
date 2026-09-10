# OverTheWire Bandit (Level 4-5)

# Objectives
    Get the password in the file that human readable in folder named "inhere" 

# Command used
    ssh, ls, cat, cd,find

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: ssh bandit4@bandit.labs.overthewire.org -p 2220
    # ssh is used to connect to the overthewire server and after @ was the hostlink of overthewire and -p is mean port and the port number of overthewire is 2220
3. The password is password that you get on level 3-4
4. After you in, you can type ls (list) to see what document saved in that directory
5. You will see folder named "inhere" and you can type this command: "cd inhere"
    # the cd command is used to change directory to the wanted directory
6. Type this command "find ./*"
    # find ./* is used to find what type of one file and add a ./ is to announce to terminal that isn't a command. * is represent all of files in that directory
    and you will see all file with their own file type. The file with ASCII Text type is the file that human can read so the password will be there
7. Type this command "cat ./-file07"
    

# AND CONGRATS YOU COMPLETE LEVEL 4