# OverTheWire Bandit (Level 10-11)

# Objectives
  The password for the next level is stored in the file data.txt, which contains base64 encoded data.
# Command used
    ssh, ls,  cat, base64

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: ssh bandit10@bandit.labs.overthewire.org -p 2220
    # ssh is used to connect to the overthewire server and after @ was the hostlink of overthewire and -p is mean port and the port number of overthewire is 2220
3. The password is password that you get on level 9-10
4. After you in, you can type ls (list) to see what document saved in that directory and you will see a file named "data.txt"
5. Type this command "cat data.txt | base64 -d"
    # cat commmand is used to view the content of a file and | or pipe sign is to continuing the results of previous command to next command, lastly base64 is an encoding and -d is represent "decode it"
   
    

# AND CONGRATS YOU COMPLETE LEVEL 10