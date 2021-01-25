# Git Commands

git init - create a new git repo
git status - view changes to your project code
git add - add files to stating area
git commit - create a new commit with files from staging area
git log - view recent commits
git remote add origin git@github.com:tarik-hatim/react-expense-app.git
git push -u origin master

//create an ssh private and public keys
ssh-keygen -t rsa -b 4096 -C "yourMail"
two files will be generated in ~/.ssh folder ,witch we will use to establish a connection to github
next command we going to run is to make sure any time we try 
to communicate with another service like github its knows witch ssh to use
it require using a tool called ssh-agent
eval "$(ssh-agent -s)" ,this checks if ssh-agent is running ,if not it starts it
next we need to add our ssh key ,run
ssh-add ~/.ssh/id_rsa  the private key
and now we can take the public key file and give it to third party services like github
Copy the SSH public key to your clipboard.
$ sudo apt-get install xclip
# Downloads and installs xclip. If you don't have `apt-get`, you might need to use another installer (like `yum`)

$ xclip -selection clipboard < ~/.ssh/id_ed25519.pub
# Copies the contents of the id_ed25519.pub file to your clipboard
actually all details above are available on github website
https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/connecting-to-github-with-ssh

ssh -T git@github to make a connection to github

git remote -v
