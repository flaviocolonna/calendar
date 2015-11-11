# Mobile Calendar
Mobile Calendar is a reusable component to implement inside own website to make appointments within 5 days. It is available only for mobile screen size.
## How it works?
It is very simple to use and to implement. If you want the complete setup you can just download the entire folder. If you want to implement it as a component in your website just download the css file in the /css folder, the js file in the /js folder and the calendar.html in the root folder.
Then you can just add the calendar component in your page like <calendar></calendar> .
Remember that your index file should import some important file to make the component usable. Read the index.html to past and copy that you need.
To check if any part of the architecture works and every part of the ui works I made some tests.
The Unit Testing is done using Karma. In the folder test/unitTesting you can find two files.
The file firstTest.js will check if the angular app has a module and a controller.
The file secondTest.js will check if the angular app has all the data needed by the component.
While the e2e tests are built with Protractor. They can be found in the test/e2e folder.
There is only one main file uitest.js .
It will check first of all if the calendar component is available.
After there are many test like if the calendar is closed at the start of the page and then if it is opened when the user click on the calendar button opener. 
Then the test will check if selecting a day and a slot, you can schedule the viewing or if you change the day, the slot disappear and you cannot schedule the viewing anymore.
Finally it will check if every element switch own class when selected or not and if you can close the calendar.
##Version
This version is the 1.0
##Demo Link
A demo is visible on my altervista host http://walletmanager.altervista.org/
