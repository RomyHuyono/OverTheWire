# OverTheWire Bandit (Level 16-17)

# Objectives
  The credentials for the next level can be retrieved by submitting the password of the current level to a port on localhost in the range 31000 to 32000. First find out which of these ports have a server listening on them. Then find out which of those speak SSL/TLS and which don’t. There is only 1 server that will give the next credentials, the others will simply send back to you whatever you send to it.
# Command used
    ssh, nmap, cat, nano, chmod, openssl s_client

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: ssh bandit16@bandit.labs.overthewire.org -p 2220
    # ssh is used to connect to the overthewire server and after @ was the hostlink of overthewire and -p is mean port and the port number of overthewire is 2220
3. The password is password that you get on level 15-16
4. After in, type this "nmap -p 31000-32000 localhost"
    # nmap is command for network mapper used for network exploration and security auditing.
5. After that type this command "nmap -sV -p 31000-32000 localhost"
    # -sV is mean for service /version detection that is used to Check open ports to determine what applications/services are running and their specific versions.
6. You will see around 5 ports, choose port with "ssl/unknown" service and type this command " cat /etc/bandit_pass/bandit16 | openssl s_client -connect localhost:31790 -ign_eof"
    # -ign_eof is mean ignore end of file that command openssl to not immediately closed the connection after send data from pipe 
7. You will see many text  and select all of them from -----BEGIN until -----END OPENSSH PRIVATE KEY-----  and then logout from bandit16
8. On your local computer make a key file on it with type this "nano bandit17.key" and you will in the nano code editor, after that paste it in there with click right on your mouse/touchpad and then click ctrl + O and enter, and ctrl + x to exit
9. Change the permission of file use "chmod 600 bandit14.key" 
    # read = 4, write = 2, execute = 1
    # ex: chmod 600 the left number is owner and the middle is group, and the right is others
10. And then type "ssh -i bandit17.key bandit17@bandit.labs.overthewire.org -p 2220"


# AND CONGRATS YOU COMPLETE LEVEL 16