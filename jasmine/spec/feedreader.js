/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });



         //function below that test all feeds have url defined and is not empty in allFeeds array
        it('each feed has a URL defined and is not empty', function() {
            allFeeds.forEach(function (arrayItem) {
            expect(arrayItem.url).toBeDefined();
            expect(arrayItem.url).not.toBe(0);
            });
         });


         //function below that test all feeds have name defined and is not empty in allFeeds array
        it('each feed has a name defined and is not empty', function() {
            allFeeds.forEach(function (arrayItem) {
            expect(arrayItem.name).toBeDefined();
            expect(arrayItem.name).not.toBe(0);
            });
         });

    });


    //a new suite is created 'The Menu' for another set of specification to test
    describe('The Menu', function() {



         //function that test whether menu is hidden by default
         it('menu element is hidden by default', function () {
            expect($("body").hasClass("menu-hidden")).toBe(true);
         });



        //function that test menu element showing when first click and closes when clicked again
        //derived through the help of Lloan Alas Webinar Walkthrough

         it('menu icon element opens on first click and closes on second', function () {
            $(".menu-icon-link").click();   
            expect($("body").hasClass("menu-hidden")).toBe(false);

            $(".menu-icon-link").click();   
            expect($("body").hasClass("menu-hidden")).toBe(true);
         });

      });


    //a new suite 'The Menu' was created for another set of specification to test
    describe('Initial Entries', function() {




        //function that checks for atleast one entry when the loadFeed is called and completes its tasks which involves asynchronous framework
         beforeEach(done => {
            loadFeed(0, done);
         });

         it('there is atleast 1 feed entry after loadFeed was called and finished its tasks', function() {
           expect($(".feed .entry").length).toBeGreaterThan(0);
           });
         });

    //a new suite 'New Feed Selection' was created for another set of specification to test
    describe('New Feed Selection', function() {


        let a, b; //variable declarations for feed 1 and 2 to compare
        

        //function that test confirms changes on content when new feeds are loaded

        beforeEach(done => {
            loadFeed(0, function() {
                a = $(".feed").html(); //a is the first feed loaded


                loadFeed(1, function() {
                        b = $(".feed").html(); //a is the first feed loaded
                        done();   
                })
            })
        }); 
        it('confirms content changes after new feeds are loaded', function() {
           expect(a === b).toBe(false);
           });

    });
}());
