function load(){
    
    let a = document.getElementById("extra")
    a.classList.add("newclass"); 
    console.log(a.classList); 
    a.classList.remove("newclass");
    console.log(a.classList);
    document.getElementById("extra").remove();


    let h =document.createElement("h1");
    h.innerHTML = "Lab7 Assignment"
    h.setAttribute("style", "color:blue;")
    document.body.appendChild(h)
    hr = document.createElement ("hr")
    document.body.appendChild(hr)
    h2 =document.createElement("h2")
    h2.innerHTML = "Task"
    document.body.appendChild(h2)
    h2.style.color = "red"; 
    let p1 = document.createElement("p"); 
    p1.innerHTML = "In this task you have to reproduce this HTML page as is using <b> only </b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
    document.body.appendChild(p1);
    
    var ul = document.createElement('ul');

// create three list item elements
var li1 = document.createElement('li');
li1.innerHTML = 'find elements in the DOM <b>(5 points)</b>;';
li1.style.color = "green";

var li2 = document.createElement('li');
li2.innerHTML = 'create/add/remove elements <b>(5 points)</b>;';
li2.style.color = "purple";

var li3 = document.createElement('li');
li3.innerHTML = 'change content of the elements <b>(5 points)</b>;';
li3.style.color = "green";

var li4 = document.createElement('li');
li4.innerHTML = 'change styles of the elements <b>(5 points)</b>;';
li4.style.color = "purple";

var li5 = document.createElement('li');
li5.innerHTML = 'change attributes of the elements <b>(5 points)</b>;';
li5.style.color = "green";

var li6 = document.createElement('li');
li6.innerHTML = 'change classes of the elements <b>(5 points)</b>.';
li6.style.color = "purple";

// append the list items to the unordered list
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
ul.appendChild(li6);

// append the unordered list to the body of the HTML document
document.body.appendChild(ul);

hr = document.createElement ("hr")
    document.body.appendChild(hr)

    H =document.createElement("h2")
    H.innerHTML = "Submission"
    H.style.color = "red"; 
    document.body.appendChild(H)

    let p2 = document.createElement("p"); 
    p2.innerText = "To submit your work, follow these instructions:";
    document.body.appendChild(p2);
    //second list

    var ul2 = document.createElement('ul');

    var li7 = document.createElement('li');
    li7.innerHTML = 'Create a new repository on Github, named <b>lab7 (1 point)</b>.';
    li7.style.color = "green";

    var li8 = document.createElement('li');
    li8.textContent = 'Clone this repository to your local machine and work inside it.';
    li8.style.color = "purple";

    var li9 = document.createElement('li');
    li9.innerHTML = 'Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message <b>(1 point)</b>.';
    li9.style.color = "green";

    var li10 = document.createElement('li');
    li10.innerHTML = 'Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above <b>(1 point)</b>.';
    li10.style.color = "purple";

    var li11 = document.createElement('li');
    li11.innerHTML = 'Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).';
    li11.style.color = "green";

    var li12 = document.createElement('li');
    li12.innerHTML = 'Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file <b>(5 points)</b>.';
    li12.style.color = "purple";

    var li13 = document.createElement('li');
    li13.innerHTML = 'After you finish your work, submit it to the Github <b>(2 points)</b>.';
    li13.style.color = "green";


    ul2.appendChild(li7);
    ul2.appendChild(li8);
    ul2.appendChild(li9);
    ul2.appendChild(li10);
    ul2.appendChild(li11);
    ul2.appendChild(li12);
    ul2.appendChild(li13);


    document.body.appendChild(ul2);

    hr = document.createElement ("hr")
    document.body.appendChild(hr)

    

    


    






    
    
}