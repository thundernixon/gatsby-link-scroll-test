# Troubleshooting docs

## Initial installation

Gets this warning, though things work better on a second run of `yarn`:


```
warning Error running install script for optional dependency: "/Users/stephennixon/code/gatsby-link-scroll-test/node_modules/fsevents: Command failed.
Exit code: 6
Command: node install
Arguments:
Directory: /Users/stephennixon/code/gatsby-link-scroll-test/node_modules/fsevents
Output:
node-pre-gyp info it worked if it ends with ok
node-pre-gyp info using node-pre-gyp@0.10.0
node-pre-gyp info using node@11.4.0 | darwin | x64
node-pre-gyp info check checked for \"/Users/stephennixon/code/gatsby-link-scroll-test/node_modules/fsevents/lib/binding/Release/node-v67-darwin-x64/fse.node\" (not found)
node-pre-gyp http GET https://fsevents-binaries.s3-us-west-2.amazonaws.com/v1.2.4/fse-v1.2.4-node-v67-darwin-x64.tar.gz
node-pre-gyp ERR! Completion callback never invoked!
node-pre-gyp ERR! System Darwin 18.2.0
node-pre-gyp ERR! command \"/Users/stephennixon/.nvm/versions/node/v11.4.0/bin/node\" \"/Users/stephennixon/code/gatsby-link-scroll-test/node_modules/fsevents/node_modules/node-pre-gyp/bin/node-pre-gyp\" \"install\" \"--fallback-to-build\"
node-pre-gyp ERR! cwd /Users/stephennixon/code/gatsby-link-scroll-test/node_modules/fsevents
node-pre-gyp ERR! node -v v11.4.0
node-pre-gyp ERR! node-pre-gyp -v v0.10.0
success Saved lockfile.
✨  Done in 39.25s.
```

Has possible solution here: https://stackoverflow.com/questions/32513644/npm-install-error-node-pre-gyp, but may not need immediate resolution.


