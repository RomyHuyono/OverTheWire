# OverTheWire Bandit (Level 15-16)

# Objectives
  The password for the next level can be retrieved by submitting the password of the current level to port 30001 on localhost using SSL/TLS encryption.
# Command used
    ssh, openssl, s_client

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: ssh bandit15@bandit.labs.overthewire.org -p 2220
    # ssh is used to connect to the overthewire server and after @ was the hostlink of overthewire and -p is mean port and the port number of overthewire is 2220
3. The password is password that you get on level 14-15
4. After in you find first the password and copy it and then type this "openssl s_client -connect localhost:30001" ,after already new row, you paste the password of bandit15 and you will get the password
    # openssl  is a command line tool that the function is to manage certificate keys, encrypt data, and test secure SSL/TLS-based connections. And s_client is a sub-command in OpenSSL that tells the system to act as a generic SSL/TLS client. This command will attempt to open a connection to the server and perform a TLS handshake.
    

# AND CONGRATS YOU COMPLETE LEVEL 15