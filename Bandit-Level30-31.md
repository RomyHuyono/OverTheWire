# OverTheWire Bandit (Level 30-31)

# Objectives
    There is a git repository at ssh://bandit30-git@bandit.labs.overthewire.org/home/bandit30-git/repo via the port 2220. The password for the user bandit30-git is the same as for the user bandit30.

    From your local machine (not the OverTheWire machine!), clone the repository and find the password for the next level. This needs git installed locally on your machine.
# Command used
    ssh, cd, mktemp, git, ls

# Step By Step
1. Open the Ubuntu Terminal
2. After that you type this on your local machine "cd $(mktemp -d)"
    # this will make a temporary directory on /tmp and the $ sign is mean that Executes the command inside the parentheses first, then retrieves its string output become the location of cd command
3. Type command like this: "git clone ssh://bandit30-git@bandit.labs.overthewire.org:2220/home/bandit30-git/repo"
    # git clone: ​​Git command to clone/download a repository and its entire commit history.
    # ssh://: The transfer protocol used (Secure Shell) for a secure connection.
    # bandit30-git: The username used to log in to the Git server.
    # bandit.labs.overthewire.org: The domain address of the server where the repository is hosted.
    # 2220: The specific SSH port number used by the OverTheWire server (the default SSH port is usually 22).
    # /home/bandit30-git/repo: The path to the Git repository on the target server.
4. After that type "ls" and you will see directory named "repo" after that "cd repo" and "ls" again , and you will see file named README.md and type this "git tag" used to find passwords hidden in Git repositories like a tag in a book and you will see a file named "secret" and then just "git show secret" to displays the password
    
# AND CONGRATS YOU COMPLETE LEVEL 30