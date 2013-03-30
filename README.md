# dotCss-ish (sort of)

Simple system to manage small css changes around the internet.

I like the idea of dotCss (and dotJs) I just don't want to run
a server to serve css files.

This works with Chrome Default Styles sheets and a tiny extension.
You can read more about the extension over at (Ext)[ext]

1. Symlink your chrome Default styles directory to ~/.css
  * ```ln -s ~/Library/Application\ Support/Google/Chrome/Default/User\ StyleSheets ~/.css```
2. Pull this repo into .css
  * ``` cd ~/.css```
  * ``` git init ```
  * ``` git remote add origin git@github.com:ericduran/dotcss-ish.git ```
  * ``` git pull origin master```

3. compass compile


# Chaging the web

```sass
/* Use the hostname as a class */

.mycloud-pointhq-com {
  .free {
    display: none;
  }
}

```

The last step is running ```compass compile```. To update your actual Custom.css file.
