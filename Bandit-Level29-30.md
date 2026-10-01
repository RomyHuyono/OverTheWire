# OverTheWire Bandit (Level 29-30)

# Objectives
    There is a git repository at ssh://bandit29-git@bandit.labs.overthewire.org/home/bandit29-git/repo via the port 2220. The password for the user bandit29-git is the same as for the user bandit29.

    From your local machine (not the OverTheWire machine!), clone the repository and find the password for the next level. This needs git installed locally on your machine.
# Command used
    ssh, cat, cd, git, ls

# Step By Step
1. Open the Ubuntu Terminal
2. Type command like this: "git clone ssh://bandit29-git@bandit.labs.overthewire.org:2220/home/bandit29-git/repo"
3. After that type "ls" and you will see directory named "repo" after that "cd repo" and "ls" again , and you will see file named README.md and after you "cat README.md" it will displays the username & password but the password is not actually listed there
4. And type this "git branch -a",  -a is mean "all"
    # displays all branches in the Git repository, both local and remote branches. 
5. After that type : "git checkout dev"
    # checkout is mean move or switch to another version/branch, its like change a mode and dev is represent of development
6. ANDD THEEE LASSTTT  DO A "cat README.md" again and you will get it
    
# AND CONGRATS YOU COMPLETE LEVEL 29