/**
 * @description his is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/**
@description Tests don't run until DOM is ready.
 */
$(function () {
    /**
     @description Tests regarding RSS Feeds.
     */
    describe('RSS Feeds', function () {
        /**
         * @description allFeeds variable is defined and it is not empty.
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /**
         * @description Every object in allFeeds variable has url property defined
         * and that property is not empty.
         */
        it('URL is defined', function () {
            for (const feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });

        /**
         * @description Every object in allFeeds variable has name property defined
         * and that property is not empty.
         */
        it('name is defined', function () {
            for (const feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });

    /**
     @description Tests regarding Menu icon and pane.
     */
    describe('The menu', function () {

        /**
         * @description Menu is not visible by default.
         */
        it('should be hidden', function () {
            const body = document.getElementsByTagName('body')[0];
            const hidden = body.classList.contains('menu-hidden');
            expect(hidden).toBe(true);
        });

        /**
         * @description Menu changes visibility when the menu icon is clicked.
         */
        it('visibility changes on click', function () {
            const icon = document.querySelector('.menu-icon-link');
            $(icon).click();
            expect(document.body.classList.contains('menu-hidden')).toBe(false);
            $(icon).click();
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        })
    });

    describe('Initial Entries', function () {


        /**
         * @description When the loadFeed function is called and completes its work,
         * there is at least a single .entry element within the .feed container.
         */
        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('exists upon loading', function() {
            var entry = $('.feed .entry');
            expect(entry.length).toBeGreaterThan(0);
        });

    });

    describe('New Feed Selection', function () {


        /**
         * @description When a new feed is loaded by the loadFeed function, content changes.
         */
        let feed = null;
        let newFeed = null;

        beforeEach(function(done){
            loadFeed(0, function () {
                feed = document.querySelector('.feed').innerHTML;
                done();
            });
        });

        it('is loading new feed', function(done){

            loadFeed(1, function(){
                newFeed = document.querySelector('.feed').innerHTML;
                expect(newFeed).not.toBe(feed);
                done();
            });

        });
    });
}());
