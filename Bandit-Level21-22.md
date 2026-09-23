# OverTheWire Bandit (Level 21-22)

# Objectives
  A program is running automatically at regular intervals from cron, the time-based job scheduler. Look in /etc/cron.d/ for the configuration and see what command is being executed.

# Command used
    ssh, ls, cat

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: ssh bandit21@bandit.labs.overthewire.org -p 2220
    # ssh is used to connect to the overthewire server and after @ was the hostlink of overthewire and -p is mean port and the port number of overthewire is 2220
3. The password is password that you get on level 20-21
4. After you in type this "ls -la /etc/cron.d/"
    # this command is to see what files in that directory
5. And then "cat /etc/cron.d/cronjob_bandit22"
6. After that type this "cat /usr/bin/cronjob_bandit22.sh"
    # not type the & sign , because we want to look the location of the password file 
7. After you look like /tmp/blablabla (adjust to what you can get) you can type this "cat /tmp/blablabla"

# AND CONGRATS YOU COMPLETE LEVEL 21