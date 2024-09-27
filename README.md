# LED Facade Template👋
Project for projectable html canvases configured for Symptholight to allow for streaming html 5 content via LED Displays. Supports loading of html and P5 Files

## LED facade frontend
- html / css / javascript
- files served from node running express

## Local testing
- npm install - install depedencies
- npm start - run locally / start node app

Make sure you have installed node first

## Updating canvas content
upload form and upload html files. Download the examples folder from the front page 
for examples of loadable content
If you want to customise different displays for different screens 
you could add screenA.js , screenB.js etc and link to those seperate scripts on the 
associated html pages. 

## Examples 
- clock - analogue clock demo showing current local time
- conways game of life - visualisation of conways game of life
- day to night - day to night cycle with clouds
- digital clock - digital clock showing current time
- drawing - drawing tool
- fire - fire animation
- flash circle - flashing circle (might remove this one)
- kandinsky - random circle art
- photo to 8bit - converts image to 8bit (bit buggy)
- random abstract art - creates random circle art with fade in / out
- portal - morphing portal with random colour changes
- Tetris - version of classic game (not fully tested but sorta works)
- water - a animation of waves

## P5 Examples
- p5Template.html - template file for loading P5 files
- p5TemplatewebGL - template file for loading P5 files with WebGL support
- SnakeP5 - version of snake
- snowCDN - Falling snow animation example

## Spec
- index.html - Main Menu
- Screens - Screens with setup and form elements for loading in html content

## Screens (Client Side)
- AllScreens - (CSS / HTML / JS)
- Screen A - (CSS / HTML / JS)
- Screen B - Title (CSS / HTML)
- Screen C - (HTML / CSS / JS)
- Screen D - (HTML / CSS / JS)
- Screen E - MainScreen (HTML / CSS / JS)