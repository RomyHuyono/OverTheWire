# OverTheWire Bandit (Level 21-22)

# Objectives
  A program is running automatically at regular intervals from cron, the time-based job scheduler. Look in /etc/cron.d/ for the configuration and see what command is being executed.

    NOTE: Looking at shell scripts written by other people is a very useful skill. The script for this level is intentionally made easy to read. If you are having problems understanding what it does, try executing it to see the debug information it prints.
# Command used
    ssh, echo, cat

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: ssh bandit22@bandit.labs.overthewire.org -p 2220
    # ssh is used to connect to the overthewire server and after @ was the hostlink of overthewire and -p is mean port and the port number of overthewire is 2220
3. The password is password that you get on level 21-22
4. After you in type this "cat /etc/cron.d/cronjob_bandit23"
5. And then "cat /usr/bin/cronjob_bandit23.sh", Verification: The script contains code like the following:
           1.  #!/bin/bash  (Shebang, tells the system that this script should be run using the Bash shell.)
            2. myname=$(whoami)  (Takes the username of the user currently running the script (eg: bandit24) and stores it in the variable myname)
            3. mytarget=$(echo I am user $myname | md5sum | cut -d ' ' -f 1)  (Creates a random/unique file name based on the MD5 hash of the text "I am user <username>", then takes just the hash result (32 hex characters) and stores it in the variable mytarget.)
            4. echo "Copying /etc/bandit_pass/$myname to /tmp/$mytarget" (Prints a status message to the terminal telling where the pass file will be copied to.)
            5. cat /etc/bandit_pass/$myname > /tmp/$mytarget (Read the user's key/pass file and redirect its contents (output redirection) into a new file located at /tmp/<hash_md5>.)
6. After that type this "echo I am user bandit23 | md5sum | cut -d ' ' -f 1", Verification: This command will generate an MD5 hash string (32 characters long), for example 8ca319a860ae13542df05edf5452160d.
    # echo is a basic command in Linux/Unix (and also Windows Command Prompt) which is used to print or display text/variables to the terminal screen. 
7. And then type "cat /tmp/8ca319a860ae13542df05edf5452160d"

# AND CONGRATS YOU COMPLETE LEVEL 22