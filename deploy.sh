#!/bin/sh
boot gh-pages;
git add .;
git commit -am "Deploy to github pages";
git subtree push --prefix gh-pages origin gh-pages;
