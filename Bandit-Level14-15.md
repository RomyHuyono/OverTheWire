# OverTheWire Bandit (Level 14-15)

# Objectives
  The password for the next level can be retrieved by submitting the password of the current level to port 30000 on localhost.
# Command used
    ssh, nc

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: ssh -i bandit14.key bandit14@bandit.labs.overthewire.org -p 2220
    # ssh is used to connect to the overthewire server and after @ was the hostlink of overthewire and -p is mean port and the port number of overthewire is 2220
3. After in you find first the password and copy it and then type this "nc localhost 30000" ,after already new row, you paste the password of bandit14 and you will get the password
    # nc is a command line tool that the function is to read and write data over a network connection, localhost is the objectives and 30000 is the number of the port
    

# AND CONGRATS YOU COMPLETE LEVEL 14