# OverTheWire Bandit (Level 28-29)

# Objectives
    There is a git repository at ssh://bandit28-git@bandit.labs.overthewire.org/home/bandit28-git/repo via the port 2220. The password for the user bandit28-git is the same as for the user bandit28.

    From your local machine (not the OverTheWire machine!), clone the repository and find the password for the next level. This needs git installed locally on your machine.
# Command used
    ssh, cd, mktemp, git, ls

# Step By Step
1. Open the Ubuntu Terminal
2. After that you type this on your local machine "cd $(mktemp -d)"
    # this will make a temporary directory on /tmp and the $ sign is mean that Executes the command inside the parentheses first, then retrieves its string output become the location of cd command
3. Type command like this: "git clone ssh://bandit28-git@bandit.labs.overthewire.org:2220/home/bandit28-git/repo"
    # git clone: ​​Git command to clone/download a repository and its entire commit history.
    # ssh://: The transfer protocol used (Secure Shell) for a secure connection.
    # bandit27-git: The username used to log in to the Git server.
    # bandit.labs.overthewire.org: The domain address of the server where the repository is hosted.
    # 2220: The specific SSH port number used by the OverTheWire server (the default SSH port is usually 22).
    # /home/bandit27-git/repo: The path to the Git repository on the target server.
4. After that type "ls" and you will see directory named "repo" after that "cd repo" and "ls" again , and you will see file named README.md and type this "git log" and you will see the history of the git commits and then just type "git log -p" and you will get the passowrd (-p is mean patch , it will make a diff (addition and deletion of lines of text/code) performed at each commit. )
    
# AND CONGRATS YOU COMPLETE LEVEL 28