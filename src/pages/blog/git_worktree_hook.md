---
layout: "../../layouts/BlogPost.astro"
title: Automate config files setup with git hooks
pubDate: Dec 16, 2022
---
I use git worktrees in my workflow at my job, because I have to work on many features at the same time. Each of these features is on a separate branch. Using worktrees, I can have many branches
checked out at the same time in different directories.

But each time I add a worktree, I have to copy the secret files over to the directory of the new worktree that I created. TIL about the `post-checkout` hook of git. According to the documentation: 
this hook runs by default when a new branch is checked out using:
`git checkout`, `git switch`, `git worktree add`  or `git clone`. This is perfect to automate copying the secret files.

I put all the secret files in a specific directory on my system. To automate the copying of these files, I wanted to use the `post-checkout` tag. To do this, I created a file called `post-checkout` in the `.git/hooks` directory, and made it executable. Then, I wrote a shell script in it, like the following example:

```sh
# Example of copying a directory. ./ is the root of the new worktree

cp -r path/to/secrets/directory/<secret_directory> ./

# Example of copying a secret file to 
# The destination path is relative to the  root of the new worktree.

cp path/to/secrets/directory/<secret_file> ./some/path/
```
