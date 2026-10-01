# OverTheWire Bandit (Level 31-32)

# Objectives
    There is a git repository at ssh://bandit31-git@bandit.labs.overthewire.org/home/bandit31-git/repo via the port 2220. The password for the user bandit31-git is the same as for the user bandit31.

    From your local machine (not the OverTheWire machine!), clone the repository and find the password for the next level. This needs git installed locally on your machine.
# Command used
    ssh, cd, mktemp, git, ls, echo

# Step By Step
1. Open the Ubuntu Terminal
2. After that you type this on your local machine "cd $(mktemp -d)"
    # this will make a temporary directory on /tmp and the $ sign is mean that Executes the command inside the parentheses first, then retrieves its string output become the location of cd command
3. Type command like this: "git clone ssh://bandit31-git@bandit.labs.overthewire.org:2220/home/bandit31-git/repo"
    # git clone: ​​Git command to clone/download a repository and its entire commit history.
    # ssh://: The transfer protocol used (Secure Shell) for a secure connection.
    # bandit31-git: The username used to log in to the Git server.
    # bandit.labs.overthewire.org: The domain address of the server where the repository is hosted.
    # 2220: The specific SSH port number used by the OverTheWire server (the default SSH port is usually 22).
    # /home/bandit31-git/repo: The path to the Git repository on the target server.
4. After that type "ls" and you will see directory named "repo" after that "cd repo" and "ls" again , and you will see file named README.md 
5. First, you have to config a useremail and username first with type this "git config user.email "bandit31@overthewire.org" and to config username, type "git config user.name "bandit31""
6. After that you can type: "echo "May I come in?" > key.txt"
    # echo : Displays or prints the text "May I come in?"
    # >: The redirection operator in the terminal. This operator redirects the output of the echo command to a file, instead of printing it to the screen. If the key.txt file does not exist, it will be created. If it does exist, its contents will be erased and overwritten.
    # key.txt: The destination file where the text is saved.
7. Type this "git add -f key.txt"
    # this will force Git to add the file anyway and ignore gitignore rules
8. And commit it with "git commit -m "Add key.txt""
9. And push with "git push origin master"
10. The password will at beside of ":remote", you can just find it at the text after you push it 
    
# AND CONGRATS YOU COMPLETE LEVEL 31