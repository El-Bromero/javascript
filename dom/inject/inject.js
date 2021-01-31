/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html.  You are not allowed to simply set the innerHTML of the <div> to the entire html document. 
*/

/*

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

const div = document.querySelector("div");

const center = document.createElement("center");
div.appendChild(center);

const h1 = document.createElement("h1");
const i = document.createElement("i");

center.appendChild(h1);
h1.appendChild(i);
i.textContent = "HTML Practice Exercise TEKcamp.";

const h2 = document.createElement("h2");
const a = document.createElement("a");
a.setAttribute("href", "#");
a.textContent = "TEKsystems \"TEKcamp";
h2.appendChild(a);
center.appendChild(h2);

const hr = document.createElement("hr");
div.appendChild(hr);

const p = document.createElement("p");
p.innerHTML = "I love <i>HTML</i> for the following reasons:";
div.appendChild(p);

const ol = document.createElement("ol");
const li = document.createElement("li");

/*
<hr />
<p>I love <i>HTML</i> for the following reasons:</p>
<ol>
  <li>I learned it quickly.</li>
  <li>I can make web pages using code
<li> It’s fun.</li>
</ol>
<hr />
*/


console.log(div);
// console.log(h2);