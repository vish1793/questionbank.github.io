// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyBRvwHKJJr4M17BCCgLha4M9hvjFNS1ox0",
  authDomain: "questionbank-5dcb3.firebaseapp.com",
  databaseURL: "https://questionbank-5dcb3.firebaseio.com",
  projectId: "questionbank-5dcb3",
  storageBucket: "questionbank-5dcb3.appspot.com",
  messagingSenderId: "1053435421262",
  appId: "1:1053435421262:web:97a713aef77ae3da30191f",
  measurementId: "G-6HFQT5YGP3"
};
firebase.initializeApp(config);

// Reference messages collection
const messagesRef = firebase.Database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var subject = getInputVal('subject');
  var question = getInputVal('question');
  var option1 = getInputVal('option1');
  var option2 = getInputVal('option2');
  var option3 = getInputVal('option3');
  var option4 = getInputVal('option4');
  var answer = getInputVal('answer');
  var weightage = getInputVal('weightage');
  var timer = getInputVal('timer');
  
  // Save message
  saveMessage(subject, question, option1, option2, option3, option4, answer, weightage, timer);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(subject, question, option1, option2, option3, option4, answer, weightage, timer){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    subject: subject,
    question: question,
    option1: option1,
    option2: option2,
    option3: option3,
    option4: option4,
    answer: answer,
    weightage: weightage,
    timer: timer
  });
}