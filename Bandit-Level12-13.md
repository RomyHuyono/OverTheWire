# OverTheWire Bandit (Level 12-13)

# Objectives
  The password for the next level is stored in the file data.txt, which is a hexdump of a file that has been repeatedly compressed. For this level it may be useful to create a directory under /tmp in which you can work. Use mkdir with a hard to guess directory name. Or better, use the command “mktemp -d”. Then copy the datafile using cp, and rename it using mv (read the manpages!)
# Command used
    ssh, ls,  cat, file, gzip, bzip2, cp, xxd, cd, mv, tar

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: ssh bandit12@bandit.labs.overthewire.org -p 2220
    # ssh is used to connect to the overthewire server and after @ was the hostlink of overthewire and -p is mean port and the port number of overthewire is 2220
3. The password is password that you get on level 11-12
4. After you in, you can type ls (list) to see what document saved in that directory and you will see a file named "data.txt"
5. Type this command "mktemp -d"
    # mktemp is represent "Make at temp" and -d is directory so if combined that two will become mktemp -d which is represent "Make at temp a directory"
6. You will see a location (Ex : /tmp/tmp.hFNMGorlWY) and then you type this "cd /tmp/tmp.hFNMGorlWY"
    # to change directory to the directory that we want
7. Type this "cp ~/data.txt ."
    # cp is copy , ~ is shortcut of home directory and . is current directory where we at, so if combined it will be "copy from home directory ,file data.txt to my current directory"
8. Type this "xxd -r data.txt > compressed1"
    # xxd is used to change hexadecimal file to binary and also to view content of hexadecimal file. -r is revert its mean revert it back to binary, and the compressed1 is name after the revert (you can type what you want)
9. Type "ls" to look if the compressed1 already in our directory
10. Type this "file compressed1"
    # to know what type of compressed file of file
11. You will see the type of file , for ex : gzip and you can type this command "mv compressed1 compressed1.gz && gzip -d compressed1.gz"
    # mv is used to rename the file to compressed1.gz , it will make the system know that is gzip format (because gzip format is so strict about format after the filename) and for decompressed it you will use the gzip -d compressed1.gz (gzip is the format, -d is decompressed)
12. Type "ls" to look if the compressed1 already in our directory
13. Type this "file compressed1"
    # to know what type of compressed file of file
14. You will see the type of file , for ex : bzip2 and you can type this command "bzip2 -d compressed1"
    # bzip2 is the format , -d is mean decompressed it
15. Type "ls" to look if the compressed1 already in our directory
16. Type this "file compressed1.out"
    # to know what type of compressed file of file
17. You will see the type of file , for ex : POSIX tar archive (GNU) and you can type this command "tar -xf compressed.out"
    # tar is the format, -xf is extract and filename, Besides that tar also have another option that was c (create), x (extract), v (verbose), f (filename), z (gzip), j (bzip2)
18. And then you just decompressed continously until the format file is ASCII text and then you "cat (filename)"
   
    

# AND CONGRATS YOU COMPLETE LEVEL 12