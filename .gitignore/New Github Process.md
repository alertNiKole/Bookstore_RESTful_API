
# New Github (GH) Process (Internal) 

## Create your GH repository 
    -- For now creating all of them on the main path
### Steps to Create A Repository  -- within Github 
   1.  click + sign
   2. Enter repo name
   3. Choose options
   4. Do not add a read me
   5. Review setup

### Capture the path 
    -- Example ( https://github.com/NvyMax/nvy_widgets.git)

### Create the link to Github from your project

    -- Create the .ignore folder
    -- Add any files needed to the .gitignore file or folder

#### From the terminal 
```
    git init
 ```
#### Add Credentials
` - git config --global user.name "NiKole Maxwell" `

` - git config --global user.email "nvymaxwell@outlook.com" `

--use `git config --list` to view current configuration settings

` git status ` This will pull the current status, nothing should be committed yet 

verify * "nothing added to commit but untracked files are present"*

### Link to remote repository
1. Type `git remote` , this starts the git remote listener
2. Type `git remote add origin +  https://github.com/NvyMax/NAME.git` Name = the name of your repo. This should be the project url.
3. Type `git remote` again (git should report "origin")

### Add existing files to git
1. Type `git status` to review adds and files being supressed
2. Type `git add . `  to add all files you want tracked to the staging area, if there are files that need to be added to .gitignore do so.
3. Type `git status` review the files being added and suppressed

### Commit files from the staging area to the master
 1. Type `git commit -m` + " Message to be displayed on Github regarding the commit" example: "Initial commit: Create Repo"
   a. Alternatively you can type `git commit  "comment"`
   b. This can also be used to update tickets from the ISSUE tracker. Type Closed + the ticket number to automatically update

### Push files to master (GitHub)
1. Type `git push -u origin master`
2. Update the readme if necessary



## Changes
### To update changes to Origin
Small changes are commits.  

To update commits for this project, they will be tracked directly by Visual Studio. When you are prepared to commit them (a package of changes, generally representing a patch (major or minor).  

1. Update/any files that don't need to be tracked, to the GH repo
2. Save all open files
3. Click the Github button on VSC
4. Look at the number of changes to confirm this is how you want to proceed
5. You can use the links on the GH tool to change tasks (like make changes, merge pull ect.
6. Press the ` + ` button to stage all changes
7. Push the Git checkmark to update all of the commits to GH.
8. Input a comment about the updates
9. Items will update in the Terminal and will be pushed to the repo.

For additional updates look at the file called "github_process.txt"

## Add or Update Versioning

#### git tag -a [version] -m [version message]
#### git tag -a v1.2.0 -m "Awesome Library v1.2.0"