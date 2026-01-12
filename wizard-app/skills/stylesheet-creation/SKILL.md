---
name: stylesheet-creation
description: Create a stylesheet for a component in an ionic project
---

# When to use this skill
Use this skill whenever creating a stylesheet for a component in an ionic project.

## class hierarchy
- the class structure should always correspond to the one in the HTML template, e.g.
if the template says
<div class="first">
    <div class="second"></div>
</div>
the class structure should be
.first {
    .second {...}
}

## containers and layouts
- container classes should have display: flex on default
- the flex-direction should be column, unless said otherwise or it is clear that the container will have items aligned in a row.
- default alignment should always be center
- for text elements, always add margin-top: 20px, unless justify-content is set to any spacing attribute.

## usage of style variables
- always import all stylesheets in the wizard-app\src\app\styles folder
- for colors, sizes and font-weights always use the variables specified in those stylesheets unless said otherwise

# text styling
- each class that is used for text styling has to specify font-size and font-weight
- description/low level text should be assigned with the lightgray color.

# button styling
- default background color is slategray
- each should have the vertical and horizontal padding set, whereas the horizontal padding always should have a larger value than the vertical padding, to have wide buttons
- text-weight within a button should be semi-bold on default
- buttons do not have a border on default
- default border radius should be 5px


