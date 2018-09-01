# Project Overview

This project reads RSS feeds.

## Why this Project?

Testing is an important part of the development process and learn how to test
you application is an important skill to have.


## What I learned?

I learned how to use Jasmine library to write tests.


## What did I do

* Wrote a test that loops through each feed in the `allFeeds` object and made sures it has a URL defined and that the URL is not empty.
* Wrote a test that loops through each feed in the `allFeeds` object and made sures it has a name defined and that the name is not empty.
* Wrote a new test suite named `"The menu"`.
* Wrote a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
* Wrote a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
* Wrote a test suite named `"Initial Entries"`.
* Wrote a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
* Wrote a test suite named `"New Feed Selection"`.
* Wrote a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
* Used callbacks to ensure that feeds are loaded before they are tested.

## How to run the code?
Find the <strong>index.html</strong> file and run it in your browser.

* version of Jasmine used: 2.2