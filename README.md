          HOW I APPROACHED CODE CHALLENGE 1:


Here's a step-by-step breakdown of the approach:

Initialization:

I Initialized two pointers (start and end) to represent the current window.
Initialize a variable current_sum to keep track of the sum of the elements within the current window.

Iterate through the array:

-I used the end pointer to expand the window by adding elements to current_sum.
-If current_sum exceeds the target, increment the start pointer to reduce the window size by subtracting elements from the left.

Check for target sum:

-If current_sum equals the target sum at any point, return true.
-If the end pointer reaches the end of the array and no subarray has been found, return false.

              HOW I APPROACHED CODE CHALLENGE 2:


To tackle this string transformation coding challenge step by step, i had to follow a structured approach. Here's a detailed plan on how i implemented the solution:

Step-by-Step Solution:

I first had to understand the problem requirements:

-If the length of the string is divisible by 3, reverse the entire string.
-If the length of the string is divisible by 5, replace each character with its ASCII code.
-If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified (reverse the string first, then replace each character with its ASCII code).

Then I Planed the Implementation:

-I Calculated the length of the input string.
-I Checked the divisibility conditions for 3, 5, and 15.
-IApplied the transformations based on the conditions:
For divisibility by 15, reverse the string and then convert each character to its ASCII code.
For divisibility by 5 (but not by 15), convert each character to its ASCII code.
For divisibility by 3 (but not by 15), reverse the string.

By following these steps, I ensured that the solution is efficient and meets the problem requirements.


    HOW I APPROACHED ON BUILDING AN INTERACTIVE PHOTO GALLERY BASED ON PROVIDED FIGMA DESIGNS:

    Designing a responsive and interactive photo gallery that matched Figma designs pixel-perfectly and maintain high code quality involved several systematic steps. Below is a detailed step-by-step plan on how i achieved this:


I Gathered and Analyzed The Requirements:

-I Collected all necessary Figma designs, including layouts, typography, colors, and interaction prototypes.
-I Understood the desired functionality, particularly the hover interactions and responsive behavior.

Setting Up the Project Environment:

-I Created a new project directory.
-Set up version control using Git.
-Initialized the project with HTML, CSS, and JavaScript files.
-I used a package manager like npm (Node Package Manager) to manage dependencies if necessary.

Creating the Basic HTML Structure:

-I Developed a semantic HTML structure for the photo gallery.
-I Ensured that the structure aligns with the Figma design, including divs for containers, images, and any additional text or elements that appear on hover.

Implementing Responsive Design with CSS:

-I used CSS media queries to ensure the gallery adapts to different screen sizes.
-I used flexible grid or flexbox layouts to create a responsive gallery.

Matching Figma Design Pixel-Perfectly:

-I used precise CSS rules to match the spacing, typography, and visual styles specified in the Figma designs.
-I used tools like Figma's measurement tool to get exact dimensions and spacing.

Implementing Hover Interactions with CSS and JavaScript:

-I used CSS to define hover styles that display additional details.
-I enhanced hover interactions with JavaScript if needed for more complex behaviors

Ensuring Cross-Browser Compatibility:

-I tested the photo gallery on multiple browsers (Chrome, Firefox, Safari, Edge).
-I used tools like BrowserStack for testing on different devices and browsers.
-I added vendor prefixes to CSS properties if necessary using tools like Autoprefixer.

Maintaining Code Quality:

-I wrote clean, readable, and maintainable code.
-I followed best practices and coding conventions for HTML, CSS, and JavaScript.
-I Document the code where necessary, explaining complex logic or interactions.

Conclusion:

By following these steps, i created a responsive, interactive photo gallery that matches Figma designs accurately, included hover interactions, ensured cross-browser compatibility, and maintained high code quality. This acurate approach ensured the final product meet all requirements and provide a seamless user experience across different devices and browsers.