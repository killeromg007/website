git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
# First, commit your changes
git commit -m "Initial commit"

# Add the remote GitHub repository
git remote add origin https://github.com/killeromg007/web.git

# Push your code to GitHub
git push -u origin main
# Use GitHub CLI to authenticate (recommended)
gh auth login
---------------------------------------------------------
git pull origin main
git push -f origin main

# Reset the remote repository to match your local exactly
git fetch origin
git reset --hard origin/main
git push -f origin main