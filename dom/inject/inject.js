/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html.  You are not allowed to simply set the innerHTML of the <div> to the entire html document. 
*/

/*
HTML TO BE INJECTED INTO inject.html file
<center>
  <h1><i>HTML Practice Exercise TEKcamp.</i></h1>
  <h2><a href="">TEKsystems "TEKcamp"</a></h2>
</center>

<hr />
<p>I love <i>HTML</i> for the following reasons:</p>
<ol>
  <li>I learned it quickly.</li>
  <li>I can make web pages using code
<li> It’s fun.</li>
</ol>
<hr />
  <p>My instructor’s email address is: <a href="mailto:ayunas@teksystems.com">ayunas@teksystems.com</a>.</p>
<h1>Have a great day!</h1>  I really look forward to learning how to code!  Have a great day.  
-[Team "Git'er Done"]
*/

// Select the div already in the html file
const div = document.querySelector("div");

// Create center which is first section of injected html
const center = document.createElement("center");
div.appendChild(center);

// Create h1 and i to be inserted into center element
let h1 = document.createElement("h1");
const i = document.createElement("i");

// Append previously created elements to their parent element
center.appendChild(h1);
h1.appendChild(i);
i.textContent = "HTML Practice Exercise TEKcamp.";

// Create h2 and a element. Set correct attributes to a. Append a to h2 and h2 to div
const h2 = document.createElement("h2");
let a = document.createElement("a");
a.setAttribute("href", "#");
a.textContent = "TEKsystems \"TEKcamp";
h2.appendChild(a);
center.appendChild(h2);

// Create hr element and append to div
let hr = document.createElement("hr");
div.appendChild(hr);

// Create p element and set appropriate info. Used innerHTML instead of textContent so that the i tag would appear correctly inside the p tag
let p = document.createElement("p");
p.innerHTML = "I love <i>HTML</i> for the following reasons:";
div.appendChild(p);

// Create ordered list and for each list item create another element for specified list items. Append li to ol and then ol to div
const ol = document.createElement("ol");
let li = document.createElement("li");
li.textContent = "I learned it quickly.";
ol.appendChild(li);
li = document.createElement("li");
li.textContent = "I can make web pages using code";
ol.appendChild(li);
li = document.createElement("li");
li.textContent = "It's fun.";
ol.appendChild(li);
div.appendChild(ol);

// Create another hr and append to div
hr = document.createElement("hr");
div.appendChild(hr);

// Create another p and a element. Set appropriate text and attributes and append to div
p = document.createElement("p");
p.textContent = "My instructor's email address is: ";
a = document.createElement("a");
a.setAttribute("href","mailto:ayunas@teksystems.com");
a.textContent = "ayunas@teksystems.com";
p.appendChild(a);
div.appendChild(p);

// Create another h1 with text inside it
h1 = document.createElement("h1");
h1.textContent = "Have a great day!";
div.appendChild(h1);

// Create text node that did not have any tag associated with it at the end
const text = document.createTextNode("I really look forward to learning how to code!  Have a great day.  -[Team \"Git'er Done\"]");
div.appendChild(text);

