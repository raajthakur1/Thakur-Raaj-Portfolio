# Command Line Interface

## Project Introduction

This project was focused on learning the command line interface of Linux and MacOS. Since Linux is the backbone of networks, IoT systems, and most servers, a strong understanding of the CLI is essential for working with networks. 

The project included various small activities to teach the class about the CLI, including:

- [**Map the Maze Part I:** Conceptual overview of file system and introduction to CLI commands.](#map-the-maze-part-i)

- [**Ubuntu CLI Tutorial:** Practice with using CLI commands in an Ubuntu VM](#ubuntu-cli-tutorial)

- [**Map the Maze Part II:** Technical exploration of using CLI commands in Ubuntu, MacOS, and how to share files between a host and VM](#map-the-maze-part-ii)

- [**House Activity:** Practice using CLI commands to navigate a "house" through the terminal to execute tasks using `cd`, `rm`, `ls`, and more.](#house-activity)

- [**Reflection**](#reflection)

## Prerequisites

In order to run Ubuntu on the M1 Mac minis in the computer lab, UTM was installed and Ubuntu was run inside a VM using Ubuntu with UTM, QEMU, and Apple Hypervisor for Apple Silicon.

Also, MKDocs had to be installed on the Mac minis in order to build documentation and push it to GitHub. Unfortunately, simply running `pip3 install mkdocs` installed the mkdocs package installed it at ~/Library/Python/3.12, the user-specific folder that hosts packages tied to the system-wide python. However, by default, ZSH does not know about this folder, so the ZSH configuration profile had to be edited to point to this folder. Anytime mkdocs needed to be run, `python3 -m mkdocs` had to be specified rather than just being able to run `mkdocs`. To fix this issue, the process was:

- Type `find ~/Library/Python -name mkdocs`  to find the specific path where mkdocs is installed. It should return `/Users/*username*/Library/Python/3.xx/bin/mkdocs`

- Open the ZSH configuration file with `nano ~/.zshrc`, then add this line: `export PATH="$HOME/Library/Python/3.xx/bin:$PATH"`

- Refresh the ZSH profile with `source ~/.zshrc`

- Run `mkdocs --version` to confirm it works. It should return something like `mkdocs, version 1.6.1 from /Users/*username*/Library/Python/3.xx/lib/python/site-packages/mkdocs (Python 3.xx)`

After completing these steps, MKDocs commands should be able to run by simply specifying `mkdocs` + command (build, serve, gh-deploy, etc.) rather than writing out `python3 -m mkdocs`. Although functionality remains unchanged, MKDocs is much easier and more convenient to work with after making these changes.

## Map the Maze Part I {.collapsible}

This assignment was an introduction to the file system of a computer. Important terms learned in this assignment include:

| Term     |Definition|
|----------|----------|
|Root Directory|Very top of the file system|
|Folder/Directory|Container used to organize files and other folders|
|File|Single digital object that holds data in various formats; contains a name and an extension|
|Path|"Address" of a file or folder inside the file system; either an absolute or relative path|
|Absolute Path|Complete address of a file or directory (starting from root)|
|Relative Path|Location of a file or directory starting from the working directory|

### Drawing a Filesystem
The first activity in this assignment was to draw out a file system with the root at the top, a home folder, 3 sub-folders, and 2 sample files. 

<img src="/courses/ap_networking/media/cli/filesystem_tree.jpg" width="400px">

This section of the assignment was a simple introduction to the file system on a computer and helped in visualizing how a file system works.

### Text-Based Filesystem & Partner Activity
The next activity was to type up a file system similar to the one that was drawn earlier then to trade file systems with a partner and ask them how they would find specific files in the file system. 

<img src="/courses/ap_networking/media/cli/text_filesystem.png" width="400px">

### MacOS Terminal Commands
After learning about the file system, we learned about essential MacOS/Linux commands and their purposes for the CLI, such as:

| Command  |Purpose   |
|----------|----------|
|`pwd`|Prints working directory (absolute path)|
|`ls`|Lists files and directories within the current directory|
|`cd`|Changes working directory to specified directory|
|`mkdir`|Makes a new directory within the current working directory|
|`touch`v|Makes a new file in the current working directory or an|
|`cp`|Copies specified files to a specified directory|
|`mv`|Moves specified files to a specified directory|
|`open`|Opens any file or folder within the directory if just a file/folder name is given, or any file on the computer if an absolute path is specified|
|`rm`|Permanently removes specified files|
|`rmdir`|Permanently removes specified directories|

## Ubuntu CLI Tutorial {.collapsible}


## Map the Maze Part II {.collapsible}
This activity was completed mostly within the Ubuntu VM and involved creating files and directories, editing them with `nano`, and transferring files between the host and VM. 

The instructions for the activity were:

- Run `pwd` to show current directory
    - Outputs `/home/ubuntu` (username is ubuntu in the VM)
- Use `cd Documents` to enter the documents folder and run `pwd` to show path
    - Outputs `/home/ubuntu/Documents`
- Make a folder titled MazeGame in Documents and enter it with `mkdir MazeGame` and `cd MazeGame`
- Create 3 clue files with `touch clue1.txt clue2.txt clue3.txt`
- Add "Congratulations! You found the first clue." to clue1.txt with `nano clue1.txt`

<figure>
  <img src='/courses/ap_networking/media/cli/nano.jpeg' width='500px'>
  <figcaption>Screenshot of the nano text editor for clue1.txt in the Ubuntu VM.</figcaption>
</figure>

- Share a file with the host by copying clue1.txt to ~/hostshare/ with `cp clue1.txt ~/hostshare/`

On the first attempt, clue1.txt did not show up on the Mac anywhere after putting in in the hostshare folder in the VM. In order to enable file sharing between the host and VM, I needed to follow the following steps:

- Make a folder anywhere on the Mac, then go into UTM settings and set that folder as the shared directory for the VM
<figure>
    <img src="/courses/ap_networking/media/cli/shared_dir.jpeg" width="8000px">
    <figcaption></figcaption>
</figure>

- In the VM, type `sudo mount -t davfs http://127.0.0.1:9843/ ~/hostshare/` in order to set ~/hostshare as a shared directory between the host (M1 Mac mini) and the VM

- Restart the VM, then mount the shared disk inside UTM by selecting a shared folder
<img src="/courses/ap_networking/media/cli/utm_disk.jpeg" width="1000px">

Once these steps were completed, files were able to be shared between the host and VM through ~/hostshare in the VM and the folder on the Mac that was selected as a shared directory in UTM's settings.

## House Sitting Activity {.collapsible}

The final activity in this project was the House Sitting Activity, where CLI commands were used to execute tasks within a "house" in the file system.

### Prerequisites
Before starting, open terminal, change directories to Downloads with `cd Downloads`, then clone the project by typing `sudo git clone https://github.com/thewangclass/CK-Building-Content-Knowledge-Workshop`. Once this is completed, the house can be explored by following the instructions.

### Procedure
1. Walk to the house and go inside.
    - Use `cd house`
2. Where can we go?
    - `ls` returns bedroom1, bedroom2, garage, kitchen, and main_entrance
3. Go inside the main entrance
    - Use `cd main_entrance`
4. See if there is anything around in the main entrance, such as instructions.
    - `ls` returns instructions.txt, unopened_mail1.txt, unopened_mail2.txt, unopened_mail3.txt, and shoerack
5. Open the instructions.
    - Use `cat instructions.txt` to display the contents in the terminal.
6. Leave the main entrance and go back to the house level.
    - Use `cd ..` to go up one level in the file system in order to access other rooms
7. Go inside the kitchen
    - Use `cd kitchen`
8. Check out what's inside the kitchen.
    - `ls` returns apple, banana, cereal, crackers, donut, milk, orange
9. "Eat" 2 items of food by removing them.
    - Use `rm -r apple donut` to remove them. The `-r` argument after `rm` tells the `rm` command to act recursively and remove all of the arguments, not just the first one.
10. You smell something, but you cannot see it. Find out what it is.
    - Use `ls -a` in order to list all files, including hidden ones. This reveals everything from just writing `ls`, but also includes .rotten_bananas, a hidden file (files beginning with a period are hidden).
11. Throw away the bananas.
    - Use `rm .rotten_bananas` to delete the file
12. Check the bedrooms to make sure everything is okay.
    - Use `cd ..` to move up one level, then use `cd bedroom1` to enter bedroom 1.
13. Conduct a thorough search to look for anything unusual.
    - Use `ls -a` to reveal everything, including hidden files. There's a hidden file titled .secret_diary.txt. Reveal the contents using `cat .secret_diary.txt`
14. Now, enter bedroom 2 and explore it
    - Use `cd ..` to move up one level then `cd bedroom2` to enter the 2nd bedroom.
    - Then, use `ls -a` to reveal all files. There was only regular items such as a chair, desk, and messy bed. 
    - Explore each item with `ls -a [name]` in order to list out the contents of each item. Desk should have a file titled search_desk.txt.
15. The lights just went out and you are lost. Figure out where you currently are.
    - Use `pwd` to print your location (directory)
16. Navigate to the garage to figure out what is wrong with the lights.
    - Use `cd ..` then `cd garage` to go to the garage.
17. The lights suddenly come back. What is in the garage?
    - Use `ls -a` to list the garage's contents. There are 3 cardboard boxes, 4 garbage bags, and a hose in the garage.
18. Remove all of the garbage as a favor to your friend. 
    - Use `rm -r garbage1 garbage2 garbage3` to get rid of all the garbage bags. Then, `cd` into each cardboard box and see which ones have garbage in them. Use `rm -r` on whichever boxes have garbage in them to delete them.
19. Return to the main entrance.
    - Use `cd ../..` to go up 2 levels, then use `cd main_entrance` to enter the main entrance.
20. Leave a note for your friend.
    - Use `touch goodbye_note.txt` to create a file, then use `nano goodbye_note.txt` to add a message.
21. There may be a hidden room in the house that was not previously explored. Look for it. 
    - Use `cd ..` to go up one level, then use `ls -a` to reveal all files/directories. It should reveal .hidden_basement.
    - Enter the hidden basement with `cd .hidden_basement`, then list all files/directories with `ls -a`. This should reveal .hidden_stash.


## Reflection {.collapsible}

This project was a thorough introduction and exploration of the CLI for MacOS and Linux, and taught important commands such as `cd`, `ls`, and many more. The CLI is essential in networking environments since servers never have any kind of GUI to interact with. Instead, people interact with servers solely throught the CLI. Therefore, in order to work with IoT devices, servers, and basically anything related to networking, a strong grasp of how to use the CLI effectively is imperative. While working with a CLI was a bit intimidating at first, it was easy enough to get familiar with the commands and effectively carry out tasks.