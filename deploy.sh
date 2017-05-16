#!/bin/sh
git fetch;
boot gh-pages;
git add .;
git commit -am "Deploy to github pages";
git subtree pull --prefix gh-pages origin gh-pages;
git subtree push --prefix gh-pages origin gh-pages;
