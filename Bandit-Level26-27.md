# OverTheWire Bandit (Level 26-27)

# Objectives
    Good job getting a shell! Now hurry and grab the password for bandit27!
# Command used
    ssh, cat, vim (v), ./

# Step By Step
1. Open the Ubuntu Terminal
2. After that you must you have to shrink your terminal until it only fits 2-3 lines only
3. Type command like this: "ssh -i bandit26.key bandit26@bandit.labs.overthewire.org -p 2220", and after the visual stop in "More" you press v on your keyboard to get in the vim editor
    # ssh is used to connect to the overthewire server and after @ was the hostlink of overthewire and -p is mean port and the port number of overthewire is 2220
4. After that type ":set shell=/bin/bash" 
    # this will telling the vim that If I ask you to run a computer command, please use Bash as the interpreter, okay?
5. And then type ":shell"
    # this will temporarily exit the editor and enter the full terminal view without losing any previous work.
6. After that type this "./bandit27-do cat /etc/bandit_pass/bandit27"
    # bandit27-do is executable file and because bandit26 account does not have direct permission to read the /etc/bandit_pass/bandit27 file, the ./bandit27-do program is used as a bridge to execute the cat command using bandit27's permissions


# AND CONGRATS YOU COMPLETE LEVEL 26