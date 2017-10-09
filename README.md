# dotCss-ish (sort of)
# :exclamation::exclamation:DOES NOT WORK AS OF CHROME 32 SEE [https://stackoverflow.com/a/21210882](https://stackoverflow.com/a/21210882):exclamation::exclamation:
Simple system to manage small css changes around the internet.

I like the idea of [dotCss](https://github.com/stewart/dotcss) (and dotJs) I just don't think you should run a server just to serve css files :-/.

This works with Chrome Default Styles sheets and a tiny extension. The chrome exention just gives the website a class we can target. You can read more about the extension over at [dotcss-ish](https://github.com/ericduran/dotcss-ish/tree/master/ext)

1. Pull this repo into .css
  * ``` git clone git@github.com:ericduran/dotcss-ish.git ~/.css```
1. Symlink your chrome Default styles directory to ~/.css
  * ```ln -s ~/Library/Application\ Support/Google/Chrome/Default/User\ StyleSheets ~/.css```

1. compass compile
1. Install dotcss-ish chrome extension.
  * Visit chrome://extensions/
  * Drag ```dotcss-ish.crx``` into the page.

The chrome extention just adds the hostname of the site as a class to you document.
Except it replaces "." with "-".


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
