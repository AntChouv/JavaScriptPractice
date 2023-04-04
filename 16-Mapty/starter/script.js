'use strict';
/*
MARTY APP: GEOLOCATION, EXTERNAL LIBRARIES,PROJECT ARCHITECTURE, LOCALSTORAGE API

USER STORIES
----------------------------------------------------------------------------------------
1. As a user, i want to log my running workouts with location, distance, time, pace and steps/minute
so i can keep a log of my running
2. As a user, i want to log my cycling workouts with location, distance, time, speed and elevation gain,
so i can keep a log of all my running
3. As a user i want to see all my workouts at a glance, so i can easily track my progress over time
4. As a user, i want to also see my workouts on a map, so i can easily check were i work out the most
5. As a user, i want to see all my workouts when i leave the app and come back later, so that i can keep using
the app over time

FEATURES
_________________________________________________________________________________________

1.1.Map where user clicks add new workout(best way to get location coordinates)
1.2.Geolocation to display map at current location(more user friendly). This must happen first. We want it to be executed before the page in loaded(ASYNC)
1.3.From to distance, time, pace, steps/minute
2.1 Form to input distance, time, speed, elevation gain
3.1 Display all workouts in a list
4.1 Display all workouts on the map
5.1 Store workout data in the browser using local storage API
5.2 On the page load read the saved data from local storage and display

NOTES ON PROJECT ARCHITECTURE
_________________________________________________________________________________________
Main Projects scrutcture here comes from Classes And Objects
1stly. Where and how to store data(most important because without data there in no application)
      1.1.location,distance,time,pace and steps/minute(cadence)
      1.2.location distance,time,speed and elevation gain
2ndly. Class diagram
                                          Class Workout
                                                id
                                             distance
                                             duration
                                              coords
                                               date
                                          _________________
                                          constructor()
                                                ...      
                                      /                   \  
                                     /                     \
                                    /                       \
                                   /                         \
                                  /                           \
                                 /                             \
                                /                               \
                          Child Class Running             Child Class Runnin
                                name                            name
                                cadence                         elevationGain
                                peace                           speed
                        ____________________               ___________________
                            constructor()                      constructor

We have to handle these events:
1.LoadPage
2.Receive position
3.Click On Map
4.Change input
5.Submit form
//WE WILL CREATE A BIG CLASS CALLED APP WHICH WILL HAVE A THE FUNCTIONS WE NEED TO HANDLE THESE EVENTS
THE CLASS APP
workouts
mao
___________________________________
constructor()
_getPosition()
_loadMap(position)
_showForm()
_toggleElevationField()
_newWorkout


with this way(classes of data and class for operations) we separete the data in a logical way
*/

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//------------------------------------GEOLOCATION-----------------------------------------//
/*
let map, mapEvent;

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      //success call back
      console.log(position);
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(latitude, longitude);
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
      const coords = [latitude, longitude];
      const coords1 = [37.799151, 26.703976];
      //example from leaflet overview

      //------------------------------Displaying a map using a third party library called leaflet----------------------------------------//

      //we will use a hosted version by adding this to the html file

    //<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossorigin="" />
    //<script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js" integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=" crossorigin=""></script>

      map = L.map('map').setView(coords, 13); //('map') <- the element with the id = map. L namspace
      //console.log(map);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //here we can change the appearance of the map
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup(L.popup({ autoClose: false, closeOnClick: false }))
        .setPopupContent(`Current Loc`)
        .openPopup();
      //Handling clicks on map.On similar to eventListener
      //------------------------------------------ADDING A MARK ON THE MAP, WHEREVER THE USER CLICKS-------------------------//
      //IF WE SIMPLY ADD AN EVENT LISTENER TO THE WHOLE MAP, WE WILL HAVE NO WAY OF KNOWING WHERE THE USER CLICKS
      map.on('click', function (mapE) {
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
      }); //This method is of the leaflet library
    },
    function () {
      //error call back
      alert('COuld not get your position');
    }
  );
//ADDING EVENT LISTENER TO THE FORM
form.addEventListener('submit', function (e) {
  e.preventDefault();
  //this here will eventually display the marker after we fill the information of the workout

  //CREAR INPUT FIELDS
  inputDistance.value =
    inputDuration.value =
    inputCadence.value =
    inputElevation.value =
      '';

  const { lat, lng } = mapEvent.latlng;
  //Because most of these methods return the object itself we can use chaining
  //DISPLAYING MARKER
  L.marker([lat, lng]) //creates the marker
    .addTo(map) //adds it to the map
    //.bindPopup(`Lat: ${lat}, lng: ${lng}`)//creates pop up and binds it to the marker
    .bindPopup(
      L.popup({
        //popup options.Look through the documentations of the library to see more properties.
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent(`${lat}, ${lng}`)
    .openPopup();
});
//ADDING EVENT LISTENER TO THE WORKOUT TYPE SELECTOR
inputType.addEventListener('change', function (e) {
  console.log('yoooooooooooooooo');
  e.preventDefault();
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden'); //the hidden element we are going to work with
  //but the hidden class in on its parent
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  //.toggle removes it if its there, and adds it if its not
});
*/
//////----------------------IMPROVING THE PROJECTS ARCHITECTURE BASED ON OUR DESIGN-----------------------------/////

//Data Classes
class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;
  constructor(coords, distance, duration) {
    this.coords = coords; //[lat,lng]
    this.distance = distance;
    this.duration = duration;
  }
  _setDescr() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
  click() {
    this.clicks++;
  }
}
class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescr();
  }
  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescr();
  }
  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    this.speed;
  }
}

//Application Class
class App {
  #map;
  #mapZoomLvl = 13;
  #mapEvent;
  #workouts = [];
  constructor() {
    //GET USERS POSITION
    this._getPosition(); //we want it executed at the beggining
    //GET LOCAL STORAGE DATA
    this._getLocalStorage();
    //ATTACH EVENT HANDLER
    form.addEventListener('submit', this._newWorkout.bind(this)); //bind because the this in eventListener point to the element which is called upon
    inputType.addEventListener('change', this._toggleElevetionFields);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }
  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          //bind because it is a regular function call and this in undefined
          //we need this to show to the object so that it can be used in the success call back function
          //error call back
          alert('COuld not get your position');
        }
      );
  }
  _loadMap(position) {
    //success call back
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];
    //example from leaflet overview

    //------------------------------Displaying a map using a third party library called leaflet----------------------------------------//

    //we will use a hosted version by adding this to the html file
    /*
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css" integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js" integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=" crossorigin=""></script>
    */
    this.#map = L.map('map').setView(coords, this.#mapZoomLvl); //('map') <- the element with the id = map. L namspace
    //console.log(map);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      //here we can change the appearance of the map
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    L.marker(coords)
      .addTo(this.#map)
      .bindPopup(L.popup({ autoClose: false, closeOnClick: false }))
      .setPopupContent(`Current Loc`)
      .openPopup();
    //Handling clicks on map.On similar to eventListener
    //------------------------------------------ADDING A MARK ON THE MAP, WHEREVER THE USER CLICKS-------------------------//
    //IF WE SIMPLY ADD AN EVENT LISTENER TO THE WHOLE MAP, WE WILL HAVE NO WAY OF KNOWING WHERE THE USER CLICKS
    this.#map.on('click', this._showForm.bind(this)); //This method is of the leaflet library
    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    //Empty inputs
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(function () {
      return (form.style.display = 'grid'), 1000;
    });
  }

  _toggleElevetionFields(e) {
    e.preventDefault();
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden'); //the hidden element we are going to work with
    //but the hidden class in on its parent
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    //.toggle removes it if its there, and adds it if its not}
  }
  _newWorkout(e) {
    const validInputs = function (...inputs) {
      return inputs.every(function (inp) {
        return Number.isFinite(inp);
      }); //every returns true if in true for all of them
    };
    const allPositive = function (...inputs) {
      return inputs.every(function (inp) {
        return inp > 0;
      });
    };
    e.preventDefault();
    //this here will eventually display the marker after we fill the information of the workout
    //GET DATE FROM FORM
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
    //IF WORKOUT RUNNING, CREATE RUNNING OBJECT
    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive');
      workout = new Running([lat, lng], distance, duration, cadence);
    }
    //IF WORKOUT CYCLING, CREATE RUNNING OBJECT
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      console.log(elevation);
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs have to be positive');
      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    //ADD NEW OBJECT TO WORKOUT ARRAY
    this.#workouts.push(workout);
    console.log(this.#workouts);

    //RENDER WORKOUT ON MAP AS MARKER
    this._renderWorkoutMarker(workout);
    //RENDER WORKOUT ON THE LIST
    console.log(workout);
    this._renderWorkout(workout);
    //CREAR INPUT FIELDS AND HIDE FORM
    this._hideForm();
    //STORE TO LOCAL STORAGE BU USE localStorage API
    this._setLocalStorage();
  }
  _renderWorkoutMarker(workout) {
    //Because most of these methods return the object itself we can use chaining
    //DISPLAYING MARKER
    L.marker(workout.coords) //creates the marker
      .addTo(this.#map) //adds it to the map
      //.bindPopup(`Lat: ${lat}, lng: ${lng}`)//creates pop up and binds it to the marker
      .bindPopup(
        L.popup({
          //popup options.Look through the documentations of the library to see more properties.
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }
  _renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
    <h2 class="workout__title">${workout.description}</h2>
    <div class="workout__details">
      <span class="workout__icon">${
        workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
      }</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">min</span>
    </div>`;
    if (workout.type === 'running') {
      html += `<div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.pace.toFixed(1)}</span>
      <span class="workout__unit">min/km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">🦶🏼</span>
      <span class="workout__value">${workout.cadence}</span>
      <span class="workout__unit">spm</span>
    </div>
  </li>`;
    }
    if (workout.type === 'cycling') {
      html += `<div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.speed.toFixed(1)}</span>
      <span class="workout__unit">km/h</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⛰</span>
      <span class="workout__value">${workout.elevationGain}</span>
      <span class="workout__unit">m</span>
    </div>
  </li>`;
    }
    form.insertAdjacentHTML('afterend', html);
  }
  _moveToPopup(e) {
    const workoutElement = e.target.closest('.workout');
    console.log(workoutElement);
    if (!workoutElement) return;
    const workout = this.#workouts.find(function (work) {
      //we use the data attribute of the workout, which is the id, to find the
      //workout which the same id in our data
      return work.id === workoutElement.dataset.id;
    });
    console.log(workout);
    this.#map.setView(workout.coords, this.#mapZoomLvl, {
      animate: true,
      pan: {
        duration: 1,
      },
    }); //CHECK DOCUMENTAION OF SETVIEW
    workout.click();
  }
  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }
  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));
    console.log(data);
    if (!data) return;
    this.#workouts = data;
    this.#workouts.forEach(work => this._renderWorkout(work)); //works with arrow because this point to the parent
    //..we cannot do this here(this._renderWorkoutMarket(work)) because the getLocaleStorage function is executed at the beggining an the map is not loaded yet
    //we go this in the and of the loadMap function where we know that the map will be surely loaded
  }
  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}
const app = new App();
console.log(app);
//////////////////NOTES ON USING JSON/////////////////////////////
/*
WHEN WE STRINGIFY AN OBJECT AND THEN WE PARSE IT AGAIN THE OBJECTS PROTOTYPE IS LOST.PROBLEM. WE HAVE TO REBUILT THE OBJECTS
*/
