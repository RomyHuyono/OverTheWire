# OverTheWire Bandit (Level 8-9)

# Objectives
  The password for the next level is stored in the file data.txt and is the only line of text that occurs only once
# Command used
    ssh, ls,  sort, uniq

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: ssh bandit8@bandit.labs.overthewire.org -p 2220
    # ssh is used to connect to the overthewire server and after @ was the hostlink of overthewire and -p is mean port and the port number of overthewire is 2220
3. The password is password that you get on level 7-8
4. After you in, you can type ls (list) to see what document saved in that directory and you will see a file named "data.txt"
5. Type this command "sort data.txt | uniq -u"
    # sort is used to sort data alphabetically and | or pipe sign is to continuing the results of previous command to next command , lastly uniq -u is used to filter and display rows that appear only once

   
    

# AND CONGRATS YOU COMPLETE LEVEL 8