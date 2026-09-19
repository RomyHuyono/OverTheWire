# OverTheWire Bandit (Level 11-12)

# Objectives
  The password for the next level is stored in the file data.txt, where all lowercase (a-z) and uppercase (A-Z) letters have been rotated by 13 positions
# Command used
    ssh, ls,  cat, tr

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: ssh bandit11@bandit.labs.overthewire.org -p 2220
    # ssh is used to connect to the overthewire server and after @ was the hostlink of overthewire and -p is mean port and the port number of overthewire is 2220
3. The password is password that you get on level 10-11
4. After you in, you can type ls (list) to see what document saved in that directory and you will see a file named "data.txt"
5. Type this command "cat data.txt | tr 'A-Za-z' 'N-ZA-Mn-za-m'"
    # tr is represent translate and the rule is ROT13 , that was uppercase become lowercase, letter A become N and letter N become A
   
    

# AND CONGRATS YOU COMPLETE LEVEL 11