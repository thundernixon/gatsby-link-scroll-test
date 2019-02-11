# Gatsby Link Scroll Test

This repo demonstrates two current issues with Gatsby and scrolling/page height.

## Issue 1: Gatsby Link not linking to the top of each page

This issue is already documented: [[v2] Navigating to previously visited pages with <Link> retains scroll position](https://github.com/gatsbyjs/gatsby/issues/7454.).

## Issue 2: page height not shrinking with content

I haven't found prior documentation of the second issue, but possibly I'm not searching in the right way.

If the browser width is reduced on a page containing images, the total page height / length doesn't change accordingly. That is, if a given page is 4000px tall from several large images showing in a wide browser, then it _stays_ 4000px tall if the browser is made more narrow, even though the content gets shorter as images scale down. This results in pages with massive empty parts at the bottom. Luckily, page heights are accurate on first load, but this is a site I'm making for an audience of designers / developers, so it's not so unlikely for them to resize their browser while they visit.

# Build

1. Git Clone or Download this repo, then `cd` to the directory.
2. Run `yarn` to install dependencies.
3. Run `Gatsby Develop` to build a local, development version of the site.