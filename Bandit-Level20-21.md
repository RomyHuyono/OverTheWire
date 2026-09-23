# OverTheWire Bandit (Level 20-21)

# Objectives
  There is a setuid binary in the homedirectory that does the following: it makes a connection to localhost on the port you specify as a commandline argument. It then reads a line of text from the connection and compares it to the password in the previous level (bandit20). If the password is correct, it will transmit the password for the next level (bandit21).

# Command used
    ssh, nc, ./ 

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: ssh bandit20@bandit.labs.overthewire.org -p 2220
    # ssh is used to connect to the overthewire server and after @ was the hostlink of overthewire and -p is mean port and the port number of overthewire is 2220
3. The password is password that you get on level 19-20
4. After you in type this "nc -lvp 54321 < /etc/bandit_pass/bandit20 &"
    # -l is asks netcat to act as a server listening for incoming connections instead of making outgoing connections, v is verbose (to to display the information on the screen), and "<" is to Directs the contents of the /etc/bandit_pass/bandit20 file as input to the nc command. When a connection is made to port 12345, Netcat will automatically send the contents of this file to the connecting party. and & is a sign of background process
5. And then type this "./suconnect 54321"
    # ./ is current directory, and The workflow is like this, suconnect will connect to port 54321, suconnect reads the password sent by nc from /etc/bandit_pass/bandit20. If the password matches your bandit20 password, suconnect will use bandit21's permissions to read the /etc/bandit_pass/bandit21 file and print the results to your terminal screen.

# AND CONGRATS YOU COMPLETE LEVEL 20