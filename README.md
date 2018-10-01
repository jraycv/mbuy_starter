# M Buy Starter

This are starter files to make m-buy pages locally without having connection with the m-buy admin server.

## Getting Started

You need to have a local server [MAMP](https://www.mamp.info/en/) . Once you have your MAMP up and running open your terminal go to your htdocs directory.

Do the following:

1. Clone this repository.
2. Once cloning is finish open browser http://localhost:8888/sample_template/

You should see the sample_template page without bracketed text.

## Designing your page

Go to design_templates folder and copy and paste design_template.psd and rename it to your new creative design.
Example:
design_template.psd - > design_template_space.psd

This .psd file is your helpful canvas to prepare your page. Once you open the file you will see that it has already some prepared layers for you like the following:

1. Price holder - This is for top legal information.
2. Holder - This is the area where the subscription stuff is happening.
3. Disclaimer Text - This area is for the disclaimer text.
4. *Relative Box Guide - This is your creative focus area this where you should put most of the interesting part of your page. I had given an a sample output of a finish design that you can also check as guide for you.

## Coding your page

Copy and paste sample_template and rename it to your creative project .

Example: 
sample_template - > spacehunter

Inside the sample_template folder are the following files:

1. index.html - This where you do most of your coding. This file has already some stuff to start with.
2. css folder - This where your styles css files are.
- styles.less - This is optional.
- styles.css - This where all your page styles go and there are already some stuff to start with.
3. img folder- This where all you images is located.
4. js folder- This where you put all your page script there are already some stuff to start with.
- script.js
5. settings.txt - This is just  a sample settings data.
6. text.txt - This where you put all the text on your page.
	Example:
	*inside your index.html {{lang.yourtext}}
	*inside your text.txt it will like. yourtext=whatever

*You can also see a finish output of the page called sample_final as your guide.
 

## Testing your page

Just open your browser to  http://localhost:8888/your_creative/ you should see your page if you followed everything without any problem. To see the different subscription states just click the Price holder area and you should see a selection
dropdown just choose which states you want to see.

## Once done just zip files and send the files
