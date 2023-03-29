'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

const openModal = function (e) {
  e.preventDefault(); //because if we look at the html we see that is a link, with href = # so by default it makes tha page jump to the top
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
/////making the buttons open the modal
btnsOpenModal.forEach(function (btn) {
  //btnsOpenModal is a nodel list(not an array)
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////PAGE NANIGATION//////////

//WITHOUT using DELEGATION (the bubbling phase)

//This is not really efficient. We are adding the call back function(event handler) once to each one of the three elements
//the exact same function is attached to the three elements. Ok for three elements but not many. If we would attach eventhandler to 10000 elements
//we would create 10000 copies of the function so it would impact the performance
/*
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault(); //because <a> has default behavior cause of the href property
    const id = this.getAttribute('href'); //we dont do this ->this.href because we just want the attribute
    console.log(this.href);
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' }); //we use the href are an ID
  });
});
*/
//USING EVENT DELEGATION(WE USE THA FACT THAT EVENTS BUBBLE UP)

//WE PUT THE EVENT HANDLER TO A COMMON PARENT OF ALL THE EVENTS WE ARE INTERESTED IN
//common parent of all nav_link elements is nav_links element. We put the event handler in nav_links
//So when the user clicks one of the links, the event is generated and bubbles up.So we can catch the event
//in the common parent(nav_links) and handle it there.

// 1. Add event listener to common parent element
// 2. determine what element originated the event

//Here we add an event listener once to the common parent of all elements we want to handle events. And there
//we handle these events on this common parent node.
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //Mathing strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href'); //we dont do this ->this.href because we just want the attribute
    console.log(e.target.href);
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' }); //we use the href are an ID
  }
});
//We will be able to add event handlers to elements that are not yet on the page on runtime

////////////-------1. HOW THE DOM REALLY WORKS------////////////////
/*
JS <-- DOM(interface) --> BROWSER
DOM:
  --Allows us to make JS interact with the browser
  --We can write JS to create, modify and delete HTML elements;set styles, classes and attributes
    and listen and respond event.
  --DOM tree is generated from an HTML docuiment, which we can then interac5 with
  --DOM is a very complex API that contains lots of methods(.querySelector,.addEventListener(),.innerHTML
    , .textContent) and properties to interact with the DOM tree.
Every node on the DOM tree IS TYPE node(represented by JS object.This object gets access to node methods and properties)

Nodes subTypes -> Element, Text, Comment, Document
Element child type -> HTMLElement (HTMLButtonElement,....,HTMLDivElement)
Inheritance makes the parent method accesible from the children
ABOVE NODE IS EventTarget(.addEventListener(),.removeEventListener())
eventTarget has tow children(Node, Window). That is why every node has the event listeners
*/
//////////////------------SELECTING,CREATING AND DELETING ELEMENTS----------///////////

////////SELECTING
/*
console.log(document.documentElement); //entiry html

console.log(document.head); //head html

console.log(document.body); //body html

const header = document.querySelector('.header');
console.log(header);

const allSections = document.querySelectorAll('.section'); //gets all with class section

console.log(allSections);

console.log(document.getElementById('section--1')); //gets element by ID

console.log(document.getElementsByTagName('button')); //gets all with button tag. Returns Collectio which updates automatically

console.log(document.getElementsByClassName('btn')); //returns collection

/////////CREATING AND INSERTING ELEMENTS

//In the Bankist i used insertAbjacentHTML to create moviements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cokkie to improve functionality. <button class="btn btn--close-cookie">Got it!</button>';
//we insert this element in our HTML so in our DOM
header.append(message); //prepending adds message as the first child of header element
/*
  header.prepend(message);
  header.append(message); //adds as the last child.
  ///////SOS ->>>>>>>> the reason it was only insert once is because the element message is noW live elemnt living in the DOM and a part of the DOM.
  ------------->>IT CAN NOT BE IN TWO PLACE AT THE SAME TIME
  Message was already added by prepend and then append moved it
  IF WE WANT INDEED TO COPY AND ADD AGAIN THE ELEMENT!!!!!!!
  header.append(message.cloneNode(true)); //copying the element. true means that chlidern are copyind also
*/
//header.before(message);
//header.after(message);

//////////DELETING ELEMENTS
/*
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    console.log(message.parentElement);
    message.remove();
    //old way
    //message.parentElement.removeChild(message);
  });
*/
//////////////------------STYLES----------///////////
//SETTING STYLES
/*
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
//
//message.style.backgroundColor//this will return the backgroundColor because it is inline CSS that we added
//message.style.height//this will not return the height which is in a CSS file externally

//GETTING STYLES

console.log(getComputedStyle(message));

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
console.log(message.style.height);
*/
//CSS CUSTOM PROPERTIES -- CSS VARIABLES
/*
:root {//THEY ARE DEFAIND IN THE DOCUMENT ROOT -> IN JS THE DOCUMENT -> DOCUMENT ELEMENT
  --color-primary: #5ec576;
  --color-secondary: #ffcb03;
  --color-tertiary: #ff585f;
  --color-primary-darker: #4bbb7d;
  --color-secondary-darker: #ffbb00;
  --color-tertiary-darker: #fd424b;
  --color-primary-opacity: #5ec5763a;
  --color-secondary-opacity: #ffcd0331;
  --color-tertiary-opacity: #ff58602d;
  --gradient-primary: linear-gradient(to top left, #39b385, #9be15d);
  --gradient-secondary: linear-gradient(to top left, #ffb003, #ffcb03);
}
*/
//document.documentElement.style.setProperty('--color-primary', 'orangered');//changes everywhere this color(--color-primary) was used
//SSOSOSOSOSOSOSOSOSOSOSOS UNI-APP = --color-primary blue

//////////////------------ATTRIBUTES----------///////////
/*
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); //reading the properties. But we can get these because the are standart properties so js creates them on the element
console.log(logo.src);
//reading NO STANDANT ATTRIBUTE
console.log(logo.getAttribute('designer'));
//SETTING THE ATTIBUTES
logo.alt = 'Beautiful minimalist Logo';

//CREATING ATTRIBUTE
logo.setAttribute('company', 'Bankist');
//SEE THE DIFFERENCE
console.log(logo.src); //RETURNS ABSOLUTE PATH
console.log(logo.getAttribute('src'));

//DATA ATTRIBUTES.must start with "data". These attributes are stored in the dataset object
console.log(logo.dataset.versionNumber); //here camelCase. In the html -case
*/
//CLASSES
//logo.classList.add('');
//logo.classList.remove('');
//logo.classList.toggle('');
//logo.classList.contains('');

//////////////////---------->SMOOTH SCROLLING<-----------------///////////////////////////

//LEARN MORE BUTTON -> SCROLL TO ELEMENT

btnScrollTo.addEventListener('click', function (e) {
  e.preventDefault();
  //frist we must get to coordinate of the element we want to scroll to
  const scroll1Coords = section1.getBoundingClientRect();
  console.log(scroll1Coords);
  console.log(e.target.getBoundingClientRect()); //e.target = btnScrollTo ... getBoundingClientRect() gets the coordinates of the element
  //relative to the visible veiwport. As we scroll x,y change
  console.log('current scroll X/Y', window.pageXOffset, window.pageYOffset); //Y IS THE DISTANCE BETWEEN THE CURRENT POSITION AND THE TOP OF THE PAGE
  console.log(
    //with this we take the size of the users viewport
    'height/width veiwport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  //that way we can calculate and therefor manipulate the positioning of the elements relative to the users ui
  //Now we have the position of the section--1 element. So we can scroll there
  //window.scrollTo(scroll1Coords.x, scroll1Coords.y); //this works only if we are at the top of the page. Because y,top is equal to the
  //height of the element before section--1. So in order to work wherever we are we need to pass it the position of the section--1 element
  //relative to the users view port
  //window.scrollTo(scroll1Coords.x, scroll1Coords.y + window.pageYOffset);//absolute position of the element relative to the document.But this
  //does not transitions smoothly
  //To make the transition smoothly we must pass an object instead of a single angument
  //////////////////////OLDSCHOOL WAY
  /*
  window.scrollTo({
    left: scroll1Coords.x + window.pageXOffset,
    top: scroll1Coords.y + window.pageYOffset,
    behavior: 'smooth',
  });//so to implement smooth scrolling we need to specify an object with left, top, behavior properties
  */
  /////////////////////MODERN WAY
  section1.scrollIntoView({ behavior: 'smooth' }); //works in modern browsers
});
/////////////////////////--------------------TYPES OF EVENTS AND EVENT HANDLERS(EVENT REFERENCE MDN)-------------------///////////////////////////
//Event is a signal generated by a DOM node.Signal means that something has happened(click,mouse moving,full screen mode,anything of importance that happens in webpage
//generates an EVENT)
//This event happens for example when the user clicks. No matter if we are listening for this EVENT
/*
const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', function (e) {
  //'mouseenter a bit like hover in CSS
  //It fires whenever the mouse enters a certain element
  alert('addEventListener: Great! You are reading the heading'); //when i hover over the h1 the alert appears
});
*/
/*
const h1 = document.querySelector('h1');
const alertH1 = function (e) {
  //'mouseenter a bit like hover in CSS
  //It fires whenever the mouse enters a certain element
  alert('addEventListener: Great! You are reading the heading'); //when i hover over the h1 the alert appears
  //h1.removeEventListener('mouseenter', alertH1); //removes event listener
};
h1.addEventListener('mouseenter', alertH1); //no *( because we do not call it)
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000); //removes it after 3 seconds
//Another way .on<Event>
/*
h1.onmouseenter = function (e) {//Usally this happened in the old days
  //'mouseenter a bit like hover in CSS
  //It fires whenever the mouse enters a certain element
  alert('addEventListener: Awesome! You are reading the heading'); //when i hover over the h1 the alert appears
};
*/
//For every EVENT on the list on EVENT REFERENCE MDN, there in one on<Event> property

//REASON WHY addEventListener is better:
//It allows us to put multiple event listeners to the same event
//on<Event> properties the second function overrides the first one
//SECOND REASON : BECAUSE WE CAN REMOVE EVENT HANDLER IF WE DONT NEED IT ANYMORE

//////////REMOVING EVENT HANDLER
//we need to export the call back function into a name function. check 25 lines back

////////////////////////////--------------EVENT PROPAGATION : BUBBLING AND CAPTURING------------------////////////////////////

////////////////////////////////////////SOSOSOSOSOSOSOS -> BUBBLING/////////////////////////////////////////
/*
<html>
  <head>
    <title>A new</title>
  </head>
  <body>
    <section>
      <p> A par <a>link</a></p> // a click event happens on the link. DOM immidiately generates a click EVENT
      -----------------------------THIS EVENT IS NOT GENERATED AT THE TARGET ELEMENT(the element the vent happens)
      -----------------------------The event is generated at the root of the document(Top of the DOM tree)
      -----------------------------Then the CAPTURING PHASE happens. The event travels all the way down from the document root
      -----------------------------to the target element....As the event travels down the tree, it will pass through every parent element
      -----------------------------of the target element. So in the example it goes document-> html-> body-> section-> p-> a
      -----------------------------As soon as the event reaches the target, the TARGET PHASE begins
      ---------SO THE VENT LISTENER WAITS FOR AN EVENT TO HAPPENS AND WHEN IT HAPPENS IT RUNS THE CALL BACK FUNCTION
      -----------------------------After reaching the target, the event travels all the way up to the document root again, In the BUBBLING PHASE
      -----------------------------So we say the the event bubbles up from the target to the document root.
      -----------------------------Again the event pass through all the parent elements
      -----------------------------This is very import because we can say that the event also happened in each of the parent element.
      -----------------------------So when the event bubbles up from a to p it is like it had happened right in that very element
      -----------------------------That means that if we attached the same event listener also the the <section> element, then we would get
      -----------------------------the exact same alert window for the section element as well. So we would have handled the exact same event twice.
      -----------------------------Once at its target and once a one of its parent elements.this behavior allows us to implement really powerfull patterns
      -----------------------------THIS IS SUPER SOSOSOSOSOSOSOSOSOSOSOSOSOSOSOSOSOSOSO
      -----------------------------So by default events can be handled in the TARGET and in the BUBBLING phase
      -----------------------------HOWEVER we can set up event listeners so that they listen to events in the CAPTURING PHASE
      -----------------------------NOT ALL TYPE OF EVENTS HAVE CAPTURING AND BUBBLING PHASE
      -----------------------------SOME ARE CREATED IN THE TARGET PHASE DO WE CAN ONLY HANDLE THEM THERE
      -----------------------------MOST EVENTS DO CAPTURE AND BUBBLE
      -----------------------------EVENT PROPAGATE(CAPTURING AND BUBBLING) <====EVENTS PROPAGATING FROM ONE PLACE TO ANOTHER
      <p>Yo</p>
    </section>
    <section>
      <img></img>
    </section>
  </body>
</html>
*/

////////////////////////////--------------EVENT PROPAGATION IN PRACTICE------------------////////////////////////
//WE ARE GONNA ATTACH EVENT HANDLERS TO THE NAVIGATION LINKS AND ITS PARENT ELEMENTS
/*
const randNumGen = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
console.log(randNumGen(0, 255));
const randomColor = function () {
  return `rgb(${randNumGen(0, 255)},${randNumGen(0, 255)},${randNumGen(
    0,
    255
  )})`;
};
console.log(randomColor());
*/
/*
//REALLY NICE EXAMPLE ABOUT BUBBLING
//Run to see how bubbling works. When we click the nav__link all parents change together with the nav__link because of bubbling.
//When we click nav__links only parent nav and nav_links change because it goes bubbling up
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor(); //this points to the element it was called upon
  console.log('Links: ', e.target, e.currentTarget);
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Container: ', e.target, e.currentTarget); //e.currentTarget === this //were the event listener is attached too
});
document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Nav: ', e.target, e.currentTarget);
});
*/
//STOP PROPAGATION
/*
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor(); //this points to the element it was called upon
  console.log('Links: ', e.target, e.currentTarget);
  e.stopPropagation(); //THIS STOPS THE PROPAGATION PHASE. nO A GOOD IDEA IN PRACTISE
  //SO PARENT ELEMENT DID NOT HANDLE THE EVENT
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Container: ', e.target, e.currentTarget); //e.currentTarget === this //were the event listener is attached too
});
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('Nav: ', e.target, e.currentTarget);
  },
  true
); //true means that this listener will not longer listen to bubbling events but instead to capturing events
//Above we will notice that the nav is the first appearing. thats because the eventlistener listens to events going down(capturing) and not up(bubbling)
/////////////////////SO EVENT LISTENER HEAR FOR EVENTS HAPPENING AND EVENTS BUBBLING FROM CHILD ELEMENTS
//IF WE WANT TO CHATCH EVENTS DURING THE CAPTURING PHASE <---3RD PARAMETER IN addEventListener
//CAPTURING IS RARELLY USED
//BUBBLING PHASE CAN BE REALLY USEFULL IN EVENT DELEGATION
//SMOOTH SCROLLING BEHAVIOR IN THE NAVIGATION
*/
/*
////////////////////////---------------TRAVERSING THE DOM(WALKING THROUGH THE DOM-------------------/////////////////
//WE CAN SELECT AN ELEMENT BASED ON ANOTHER ELEMENT
const h1 = document.querySelector('h1');

//Going downwards

console.log(h1.querySelectorAll('.highlight')); //selects the elements with .highlight class and are chlidren of h1
//no matter what level of child it is
//Direct children
console.log(h1.childNodes);
console.log(h1.children); //Gives us an HTMLCollection which is live collection that gets updated
h1.firstElementChild.style.color = 'white'; //gets the first child

//Going upwards

//Direct parent
console.log(h1.parentNode);
console.log(h1.parentElement); //In this case the parent element is a node, so its the same
//We might want a further parent and not the direct one,and we dont know in which level it is
h1.closest('.header').style.background = 'var(--gradient-secondary)'; //closest father element with class .header
//We are going to use the above for event delegation
h1.closest('h1').style.background = 'var(--color-primary)'; //If it returns the element which was called upon, then it means this is the element that is going to be returned
//Closest somewhat oposite of querySelector

//Going sideways : Selecting siblings
//We can only select direct siblings(prev,next)
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
//same properties for nodes
console.log(h1.previousSibling);
console.log(h1.nextSibling);
console.log(document.querySelector('.header__title'));
//if we want all the siblings we can go to the parent element and
//read all the children from there
console.log(h1.parentElement.children);
//its a HTMLCollection so its iterable
console.log([...h1.parentElement.children]);

[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) {
    //console.log(el);
    el.style.transform = 'scale(0.5)';
  }
});
*/
/////////////TABBED COMPONENTS

tabsContainer.addEventListener('click', function (e) {
  //try this
  //const clicked = e.target;
  //console.log(clicked); //if you click on the number in the button
  //closest get the closed parent with the name we all looking for. If the element it self
  //matched our search then this element gets returned
  const clicked = e.target.closest('.operations__tab');
  //console.log(clicked);
  /*
  if (e.target.classList.contains('operations__tab')) {//we do this because there has to be an element returned 
    //in order to add the class
    clicked.classList.add('operations__tab--active');
  }
  */
  //More modern way
  if (!clicked) return; //if click is null stop here
  //if button clicked the take out the class from every element
  tabs.forEach(function (tab) {
    //we take out the class
    tab.classList.remove('operations__tab--active');
  });
  clicked.classList.add('operations__tab--active'); //here adds it to the classList of the button clicked

  //Content Area: SOS
  //console.log(e.target.dataset.tab);
  const content = document.querySelector(
    `.operations__content--${e.target.dataset.tab}`
  );
  tabsContent.forEach(function (tab) {
    tab.classList.remove('operations__content--active');
  });
  content.classList.add('operations__content--active');
  //console.log(content);
});
/*
tabsContainer.addEventListener('click', function (e) {
  e.preventDefault();
  //Mathing strategy
  if (e.target.classList.contains('operations__tab')) {
    //const id = e.target.getAttribute('href'); //we dont do this ->this.href because we just want the attribute
    console.log(this);
    console.log(tabsContent.querySelectorAll('.operations__tab--active'));
    document
      .querySelector(`.operations__content--${e.target.dataset.tab}`)
      .classList.add('operations__content--active');
    if (!e.target.classList.contains('operations__tab--active')) {
      [...this.children].forEach(function (child) {
        child.classList.remove('operations__tab--active');
      });
      e.target.classList.add('operations__tab--active');
    }
    //console.log(id);
    //document.querySelector(id).scrollIntoView({ behavior: 'smooth' }); //we use the href are an ID
  }
});

//////////////----------------PASSING ARGUMENTS TO EVENT HANDLERS------------////////////////
//WE WILL MAKE THE LINKS IN THE PAGE NAVIGATION, FADE OUT EXCEPT THE ONE WE ARE HOVERED OVER
*/
//console.log(nav);
const handleHover = function (e) {
  const opacity = this; //we pass this = opacity in a variable opacity so that we can use it inside all functions.
  //an event handler function  can only have one really parameter
  if (e.target.classList.contains('nav__link')) {
    //we do not use the closest methods because there are no child elements on this element
    //so we could not click on the child element here.
    const link = e.target;
    const siblings = link.closest('nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(function (el) {
      //if i use arrow function here, because arrow this points to the parent, i will not have to set the this keyword of the parent in a variable
      if (el !== link) {
        el.style.opacity = opacity;
      }
    });

    //link.style.opacity = this;
    logo.style.opacity = opacity;
  }
};
/*
nav.addEventListener('mouseover', function (e) {
  //nav.addEventListener('mouseover', handleHover(el , 0.5)) will not work. addListener wants a function and not a value
  //one way to use the function handleHover
  handleHover(e, 0.5);
  //mouseover similar to mouseenter(does not bubble--opposite mouseleave). He we need it to bubble
  //so it will reach the navigation element
  //console.log(e.target);
  if (e.target.classList.contains('nav__link')) {
    //we do not use the closest methods because there are no child elements on this element
    //so we could not click on the child element here.
    const link = e.target;
    console.log(link);
    const siblings = link.closest('nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(function (el) {
      if (el != link) el.style.opacity = 0.5;
    });
    logo.style.opacity = 0.5;
  }
});
*/
/*
//opposite
nav.addEventListener('mouseout', function (e) {
  handleHover(e, 1);

  if (e.target.classList.contains('nav__link')) {
    //we do not use the closest methods because there are no child elements on this element
    //so we could not click on the child element here.
    const link = e.target;
    console.log(link);
    const siblings = link.closest('nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(function (el) {
      if (el != link) el.style.opacity = 1;
    });
    logo.style.opacity = 1;
  }
});
*/
//WE CAN DO THE ABOVE EVEN BETTER BY USING THE BIND METHOD
//BIND : CREATES A COPY OF THE FUNCTION THAT IS CALLED UPON ADN WILL SET THE THIS KEYWORD TO WHATEVER VALUE WE TALL IT TO
//passing "arguments" into a handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//sticky navigation-------------------------------------------------------------------------------------------------

/*
const initialCoords = section1.getBoundingClientRect(); //we get where the component is relatively to the top of the users screen
console.log(initialCoords);
window.addEventListener('scroll', function (e) {
  //the scroll event creates many events.It fires every time we scroll no matter how much
  //console.log(e);
  if (window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});
*/
/*
//THE ABOVE IS NOT A GREATE SOLUTION BECAUSE THE CALL BACK FIRES EVERYTIME WE SCROLL EVEN A LITTLE
//IMPLEMENTATION OF THE STICKY NAV BUT USING "THE INTERSECTION OBSERVER" API
//this api allows our code to observe changes to the way that a certain target element, intersects another element
//or the way it intersects the view port
const obsCallback = function (entries, observer) {
  //will get called each time that the observed element(target element)
  //intersecting the root at the threshold that we definded. Whenever the "section1" is intersecting the viewport(root : null) at 10%(0.1)
  //this function will be called no matter if we are scrolling up or down
  entries.forEach(function (entry) {
    console.log(entry);
  });
};

const obsOption = {
  root: null, //the element that the target is intersecting. The element intersecting the entire veiwport
  //threshold: 0.1, //the percentage of intersection, which the observerCallback will be called. We can have multiple thresholds(array)
  threshold: [1, 0.2], //0 means that the callback we trigger each time that the target element moves completely out of the view and also
  //as soon as it enters the view.
};
const obs = new IntersectionObserver(obsCallback, obsOption);
//console.log(obs);
obs.observe(section1); //we use this observer to observe a target(section1)
//THIS METHOD WITH THE INTESECTION OBSERVER API IS MORE EFFICIENT BECAUSE WE ONLY GET THIS KIND OF EVENT WHEN WE ARE IN A SITUATION
//THAT WE ARE ACTUALLY INTESTED IN
*/
//we want the nav bar to become sticky everytime the <header> goes out of the view
/*
const obsCallback = function (entries, observer) {
  entries.forEach(function (entry) {
    console.log(entry);
  });
};

const obsOption = {
  root: null,
  threshold: [1, 0.2], 

};
const obs = new IntersectionObserver(obsCallback, obsOption);
obs.observe(section1);
*/
const header = document.querySelector('.header');

const stickyNavInsert = function (entries, observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) {
      nav.classList.add('sticky');
    } else {
      nav.classList.remove('sticky');
    }
    //console.log(entry);
  });
};
const navHeight = nav.getBoundingClientRect().height; //this will get the height of the nav bar across all uis
const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`, //this will be applied outside of our target element. So -90px is like the header stoppes a box of 90px above the ending point of the header
  //so we want the nav to appear 90px before the header disappears. But 90px will not work properly..We want
};
const headerObserver = new IntersectionObserver(stickyNavInsert, obsOptions);
headerObserver.observe(header);

//Another feature using the interectin observer API
//Reveal element when scrolling close to them. We can easily implement it without external library---------------------------------------------------------------------------------------------
//adds hidden to all sections
/*
const sections = document.querySelectorAll('.section');
console.log(sections);
sections.forEach(function (section) {
  section.classList.add('section--hidden');
});
*/
const sections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  entries.forEach(function (entry) {
    //console.log(entry.target);
    if (!entry.isIntersecting) return;

    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
  });
  /*
  const [entry] = entries;
  console.log(entry);
  console.log(entry.target);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');*/
};
const options = {
  root: null,
  threshold: [0.2, 1],
};
const sectionObs = new IntersectionObserver(revealSection, options);
sections.forEach(function (section) {
  sectionObs.observe(section);
  section.classList.add('section--hidden');
});
//LAZY LOADING IMAGES-------------------------------------------------------------------------------------------
//WE HAVE TWO SRCS IN HTML. ONE BEING A LOW RESOLUTION IMAGE
const imgTargets = document.querySelectorAll('img[data-src]'); //CSS ability to get all the images with this -> [...] attribute
//console.log(imgTargets);

const loadImg = function (entries, observer) {
  entries.forEach(function (entry) {
    //console.log(entry.target);
    if (!entry.isIntersecting) return;
    //if is it intersecting replace
    entry.target.src = entry.target.dataset.src; //Now we have to remove the lazy image class. This replacing of the source attribute happens behind the scenes
    //So JS finds the new image that is should load and display, and it does that BTS.Once finish loading the image, it will emmit the loadint event
    //The load event is just like any other event

    //we do this so we can remove the blurring filter only when it is done loading
    entry.target.addEventListener('load', function () {
      entry.target.classList.remove('lazy-img');
    });
    observer.unobserve(entry.target);
  });
};
const optionsImgObs = {
  root: null,
  threshold: 0.2,
  rootMargin: '200px', //loading happens before we intersect
};

const imgObserver = new IntersectionObserver(loadImg, optionsImgObs);

imgTargets.forEach(function (img) {
  imgObserver.observe(img);
});
///////SLIDER--------------------------------------------------
const sliderF = function () {
  const slides = document.querySelectorAll('.slide');
  console.log(slides);
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const slider = document.querySelector('.slider');
  const dotContainer = document.querySelector('.dots');

  let currentSlide = 0;
  const maxSlide = slides.length - 1; //we need this because in the btnRight.addEventListener it keeps adding
  //we need it to stop when it is on the last slide

  const creatDots = function () {
    console.log(slides);
    slides.forEach(function (_s, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  creatDots();

  const activateDot = function (slide) {
    document.querySelectorAll('.dots__dot').forEach(function (dot) {
      dot.classList.remove('dots__dot--active');

      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add('dots__dot--active');
    });
  };

  const goToSlide = function (slide) {
    slides.forEach(function (s, i) {
      s.style.transform = `translateX(${100 * (i - slide)}%)`; //we put the images next to each other
      //0%,100%,200%,300% positions
    });
    activateDot(currentSlide);
  };

  goToSlide(0);

  const nextSlide = function () {
    if (+currentSlide === maxSlide) {
      //+ type coersion to string
      currentSlide = 0; //if at the last slide, go back to the beginning
    } else {
      console.log('mpike');
      currentSlide++;
      console.log(currentSlide);
    }
    console.log(currentSlide);
    //we should change the value in the transform property
    goToSlide(currentSlide);
    //we want this -100%,0%,100%,200%
  };

  const prevSlide = function () {
    if (+currentSlide === 0) {
      currentSlide = maxSlide; //if at the last slide, go back to the beginning
    } else {
      currentSlide--;
    }
    console.log(currentSlide);
    //we should change the value in the transform property
    goToSlide(currentSlide);
    //we want this -100%,0%,100%,200%
  };

  //slider.style.transform = 'scale(0.2) translateX(-1300px)'; //This and the next just to see with what we are working with
  //slider.style.overflow = 'visible';
  //This here basically gos to slide 0
  /*
slides.forEach(function (s, i) {
  s.style.transform = `translateX(${100 * i}%)`; //we put the images next to each other
  //0%,100%,200%,300% positions
});
*/
  //next slide
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
  //Sliding useing left and right arrow keys
  document.addEventListener('keydown', function (e) {
    console.log(e.key);
    /*
  if (e.key === 'ArrowRight') {
    nextSlide();
  } else if (e.key === 'ArrowLeft') {
    prevSlide();
  }
*/
    //with short circuiting
    e.key === 'ArrowRight' && nextSlide();
    e.key === 'ArrowLeft' && prevSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      //event delegation
      const { slide } = e.target.dataset;
      console.log(slide);
      currentSlide = slide;
      goToSlide(currentSlide);
    }
  });
};
sliderF();

//LIFE CIRCLE OF DOM EVENTS
/*
Event 1 : DOMContentLoaded ->it is fired by the document as soon as the HTML is completely parsed(HTML is been donwloaded and converted to the DOM tree)
ALSO ALL SCRIPTS MUST BE DOWNLOADED AND EXECUTED BEFORE THE domContentLoaded EVENT CAN HAPPEN
*/
document.addEventListener('DOMContentLoaded', function (e) {
  //it does not wait for images and other external resources to load
  console.log('HTML parsed and DOM tree built', e);
  //just html and js needs to be loaded
  //We want our code to be executed only when the DOM is ready
  //when we have the <script>...</script> place on the bottom of the body then we dont need to listen for the DOMContentLoaded event
  //document.ready in jquery is the same as DOMContentLoaded in vanilla JS
});
/*
Event 2 : load -> it is fired by the window as soon as the HTML is parsed and the images and external resources are also loaded
when the complete page has finished loading
*/
window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});
/*
Event 3 : beforeunload -> it is fired on window

window.addEventListener('beforeunload', function (e) {
  e.preventDefault(); //some Browsers other than Chrome require it
  console.log('before a user is about to leave a page', e);
  e.returnValue = '';//for historical reasons. If the users wants to leave. In case of a purchace or unsaved documents
});
*/

//EFFICIENT SCRIPT LOADING: DEFERE AND ASYNC
/*
INCLUDING JS IN HTML

                                                          HEAD                                                                                    BODY END
-REGULAR WAY                         PARSING HTML ->     WAITING.....        |-->FINISH PARSING |(script gets excuted before DOM is ready)       PARSING HTML --> Fetch script -> EXECUTE |
 <script src="script.js">            TIME ---------> FETCH SCRIPT -> EXECUTE |                  |DOMcontentLoaded(not ideal)                                                              |DOMcontentLoaded(not ideal)

-ASYNC                               PARSING HTML  --> waiting ->FINISHING PARSING HTML|
 <script async src="script.js">      fetch script  -->Execute  ->                      |DOMcontentLoaded                                          MAKE NO SENSE(FETCHING AND EXECUTING THE SCRIPT
                                                                                                                                                  ALWAYS HAPPENS AFTER PARSING HTML ANYWAY
-DEFER                               ------------------PARSING HTML------------>EXECUTE|((THE HTML PATSING IS NEVER INTERUPTED))
 <script defer src="script.js">        fatch script                                    |DOMcontentLoaded


-----------------------REGULAR END OF BODY---------------------------|-------------------------ASYNC IN HEAD------------------------------|-------------------------ASYNC IN HEAD------------------------------|
PARSING HTML--> Fetch script -> EXECUTE |                            |PARSING HTML  --> waiting ->FINISHING PARSING HTML|                 |------------------PARSING HTML------------>EXECUTE|((THE HTML PATSING IS NEVER INTERUPTED))
                                        |DOMcontentLoaded(not ideal) |fetch script  -->Execute  ->                      |DOMcontentLoaded-|  fetch script                                    |DOMcontentLoaded         
Scripts are fetched and executed after the HTML is completely parsed |Scripts are fetched asynchronously and executed immediately         |Scripts are fetched asynchronously and executed after the HTML is completely parsed
                                                                     |Usually the DOMConstentLoaded event waits for all scripts to execute|DOMContentLoaded event fired after defer script is executed
                                                                     |except for async scripts. So, DomContentLoaded does not wait for    |
                                                                     |a async script. So when the HTML parsing happens before the Fetching|
                                                                     |and executing the DOMContentLoaded fires up before the fetching and | 
                                                                     |runnig is finished                                                  |
                                                                     |Async scripts are not guaranteed that the will be executed in the   |Scripts are executed in order(this is usually what we want to happen)
                                                                     |exact order that the are in the code                                |THIS IS OVERALL THE BEST SOLUTION. IF MY SCRIPT RELIES ON A THIRD PARTY LIBRARY
                                                                     |USE FOR 3RD PARTY SCRIPT WHERE ORDER DOES NOT MATTER                |I MUST INCLUDE THIS LIBRARY BEFORE MY SCRIPT.SO THEN MY SCRIPT CAN USE THIS LIBRARY
                                                                                                                                          |IN THIS CASE I HAVE TO USE DEFER AS IT WILL GUARANTE THE CORRECT ORDER OF EXECUTION
                                                                                                                                          |

ONLY MODERN BROWSERS SUPPORT ASYNC AND DEFER. IF I WANT TO SUPPORT OLD BROWSERS THEN I NEED TO HAVE THE <script> AT THE END OF THE BODY
*/
