## Tags: -

_Q1 - What are void elements?_

A1 - Void elements are tags which does not have any child element. It is also called a self closing tag.

_Q2 - What are semantic elements?_

A2 - Semantic elements are tag which provide a sense of understanding where it can be used. The benefit of using semantic tags are
--Accessibility
--SEO Improvement
--Provide a meaningful tag to the structure such as header footer

_Q3 - What are critical rendering path?_

A3 - Critical Rendering Path is the sequence of steps the browser goes through to convert the HTML, CSS, and JavaScript into pixels on the screen. Optimizing the critical render path improves render performance. We can optimise CRP by using lazy loading, code-splitting, tree-shaking, adding async or defer to render blocking scripts.

_Q4 - Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models?_

A4 - The CSS box model describes the rectangular boxes that are generated for elements in the document tree. Each box has a content area and optional surrounding border, padding, and margin areas. box-sizing has two properties content-box (default) and border box. If height and width is provided to an element and box-sizing is set to content-box the heigh and width gets applied to the content only whereas in border box the border and padding is included in height and width.

_Q5 - CSS Specificty?_

A5 - Inline -> ID -> class and pseudo classes -> pseudo elements. The specificty changes if !important is applied to any one of them.

_Q6 - Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`?_

A6 - When a page first loads, HTML and CSS are being parsed simultaneously; HTML creates the DOM (Document Object Model) and CSS creates the CSSOM (CSS Object Model). Both are needed to create the visuals in a website, allowing for a quick "first meaningful paint" timing. Placing CSS <link>s in the <head> ensures that the stylesheets are loaded and ready for use when the browser starts rendering the page. <script> tags block HTML parsing while they are being downloaded and executed which can slow down the display of your page. Placing the <script>s at the bottom will allow the HTML to be parsed and displayed to the user first. If you need to put <script>s in the <head>, use the defer attribute, which will achieve the same effect of running the script only after the HTML is parsed but the browser can kick off the network request earlier to download the script.

_Q7 - Explain how a browser determines what elements match a CSS selector._

A7 - From left to right. p span -> first finds the <p> and then finds all the <span> tags and applies to the style.

_Q8 - What kind of things must you be wary of when designing or developing for multilingual sites || Internationalization i18n?_

A8 - Search Engine Optimization
Use the lang attribute on the <html> tag. Include the locale in the URL (e.g en_US, zh_CN, etc). Webpages should use <link rel="alternate" hreflang="other_locale" href="url_for_other_locale"> to tell search engines that there is another page at the specified href with the same content but for another language/locale.

Text Length Variations
Different languages often require varying amounts of space to express the same message.

Directionality (RTL vs LTR).
Some languages, like Arabic and Hebrew, are written from right to left (RTL), while others, like English, are written left to right (LTR). . Use the dir="rtl" attribute for RTL languages.

_Q9 - Explain CSS sprites?_

A9 - CSS sprites combine multiple images into one single larger image file and uses a combination of CSS background-image, background-position and background-size to select a specific part of the larger image as the desired image.

_Q10 - How is responsive design different from adaptive design?_

A10 - Responsive design works on the principle of flexibility - a single fluid website that can look good on any device. Responsive websites use media queries, flexible grids, and responsive images to create a user experience that flexes and changes based on a multitude of factors. Like a single ball growing or shrinking to fit through several different hoops.
Adaptive design is more like the modern definition of progressive enhancement. Instead of one flexible design, adaptive design detects the device and other features and then provides the appropriate feature and layout based on a predefined set of viewport sizes and other characteristics. The site detects the type of device used and delivers the pre-set layout for that device. Instead of a single ball going through several different-sized hoops, you'd have several different balls to use depending on the hoop size.

_Q11 - How would you approach fixing browser-specific styling issues?_

A11 - Use vendor prefixes or autoprefixer

_Q12 - Why you would use a `srcset` attribute in an image tag?_

A12 - You would use the srcset attribute when you want to serve different images to users depending on their device display width - serve higher quality images to devices with retina display enhances the user experience while serving lower resolution images to low-end devices increase performance and decrease data wastage
