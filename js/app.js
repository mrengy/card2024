$(document).foundation();

$( document ).ready(function() {

  // initial variables
  var validationPassed = true;
  const quizContainer = $('#quiz');
  const resultsContainer = $('#results');
  const submitButton = $('#submit');
  const myQuestions = [
    {
      heading: "crafts",
      questionAlt: "Myron wearing a painting smock and holding two chopsticks with string stretched between them",
      answerAlt: "Myron striking tubes of glitter glue with chopsticks as if they were drumsticks",
      question: "Your mama has you put on a painting smock and tie string between chopsticks to make ornaments. How do you proceed?",
      answers:{
        a: "Make three of these creations and request a high-five when completing the task",
        b: "Strike nearby objects with the chopsticks as if they were drumsticks and say, \”Rock on!\” ",
        c: "Pick up the string with the chopsticks, pretending it is a bowl of noodles and eat the string",
        d: "Say, \”Mama, you do it.\” and abandon the task"
      },
      correctAnswer: "b",
      correctness: false
    },
    {
      heading: "waiting",
      questionAlt: "Myron standing in a bus shelter",
      answerAlt: "Myron holding a wrench and looking at a bicycle pedal",
      question: "You are waiting for the bus on your way to daycare. What do you do to pass the time?",
      answers:{
        a: "Ask your papa for a tool and give his bike a tune up with it",
        b: "Play freeze tag with your papa",
        c: "Watch for trash trucks passing by",
        d: "Ask for a toy truck and play with it on the sidewalk"
      },
      correctAnswer: "a",
      correctness: false
    },
    {
      heading: "dinos",
      questionAlt: "Dinosaurs with mix-matched parts on a table",
      answerAlt: "Myron smiling and shouting at dinosaurs with mix-matched parts on table",
      question: "You encounter your magnetic toy dinosaurs with their body parts mixed up. How do you respond?",
      answers:{
        a: "Cry",
        b: "Laugh",
        c: "Quietly rearrange the parts to the correct placement",
        d: "Say \”That's not correct!\” "
      },
      correctAnswer: "d",
      correctness: false
    },
    {
      heading: "glow",
      questionAlt: "Myron swinging a glow bracelet",
      answerAlt: "Myron close up with hand outstretched and waving out of the frame",
      question: "You find a glow bracelet. What do you do with it?",
      answers:{
        a: "Turn it into a wheel and roll it across the floor",
        b: "Put it on your wrist and dance",
        c: "Wave it at your parents and tell them you turned them different colors",
        d: "Go into the bathroom with the lights off so you can see it glow"
      },
      correctAnswer: "a",
      correctness: false
    },
    {
      heading: "pumpkin",
      questionAlt: "Myron sitting on newspaper on the floor, holding a cut piece of pumpkin",
      answerAlt: "Myron grimacing in front of the lit jack-o-lantern",
      question: "Your mama helps you carve a pumpkin and put a lit candle into it. How do you respond to the jack-o-lantern?",
      answers:{
        a: "Try to eat it",
        b: "Put it on your head and pretend to be the headless horseman",
        c: "Make a menacing laugh at it",
        d: "Grimace at it"
      },
      correctAnswer: "d",
      correctness: false
    },
    {
      heading: "baking",
      questionAlt: "Myron wearing an apron with Nene turning nearby and reaching to the counter behind him",
      answerAlt: "Myron shaking his head at the stand mixer",
      question: "You are helping your mama and Nene (grandma) bake. What is your main contribution?",
      answers:{
        a: "Covering your hair in flour",
        b: "Mimicking the stand mixer by shaking your head back and forth at it",
        c: "Sticking your finger in a dish of sugar and licking it",
        d: "Cracking an egg and smearing the entire contents on the countertop"
      },
      correctAnswer: "b",
      correctness: false
    },
    {
      heading: "camping",
      questionAlt: "Myron and Dom sitting on a large rock in the woods",
      answerAlt: "Myron asleep on his potty",
      question: "You are camping with your friend, Dom. While trying to settle down for a nap, you have to get up to pee. What happens next?",
      answers:{
        a: "Face the fish. Try to have a conversation with them by saying \“blub, blub\”.",
        b: "Feed the fish Play-Doh",
        c: "Put your toy truck in the water so that the fish can play with it",
        d: "Try to open the can of blood worms and dump the entire thing into the water"
      },
      correctAnswer: "a",
      correctness: false
    },
    {
      heading: "leaves",
      questionAlt: "Myron in raincoat in front of leaves",
      answerAlt: "Myron throwing leaves",
      question: "Papa is gathering a bunch of leaves into a pile with a long stick that has little hooks on the end of it. What do you do first?",
      answers:{
        a: "Jump in the pile",
        b: "Help gather the leaves, using a small brush",
        c: "Pick up a handful of leaves and throw them at Papa",
        d: "Help gather the leaves, using the long stick"
      },
      correctAnswer: "c",
      correctness: false
    },
    {
      heading: "cookies",
      questionAlt: "Myron watching Mama cut shapes into cookie dough",
      answerAlt: "Myron eating raw cookie dough",
      question: "Mama is making cookies by cutting some dough into shapes. How do you participate?",
      answers:{
        a: "Take a piece of dough and eat it",
        b: "Roll the dough into the shape of a snake and hiss",
        c: "Help flatten the dough with a rolling pin",
        d: "Add some Play-Doh so that you can have another color to work with"
      },
      correctAnswer: "a",
      correctness: false
    },
    {
      heading: "molly",
      questionAlt: "Molly inside a grocery bag",
      answerAlt: "Myron inside one bag, Molly inside another",
      question: "Molly is playing inside a grocery bag. How do you try to play with her?",
      answers:{
        a: "Put your hand in the bag",
        b: "Pick up the bag and carry it upright",
        c: "Pick up the bag and turn it over",
        d: "Get inside another bag next to her"
      },
      correctAnswer: "d",
      correctness: false
    }
  ]

  // sets height of parent element to correct layout since there is absolute positioning involved
  function setQuizHeight(){
    divHeight = $('.active-slide').height();
    // set to 0 if undefined (happens if .active-slide is not present, like at end)
    if (typeof divHeight === 'undefined'){
      divHeight = 0;
    }
    $('#quiz').css({'height' : divHeight});
  }

  // avoiding some repetition when building html for respnsive images
  function responsiveImage(imgname, alt){
    return(`
      <img
         alt="${alt}"
         src="img/${imgname}_m.jpg"
         srcset="
            img/${imgname}_s.jpg 600w,
            img/${imgname}_m.jpg 1096w,
            img/${imgname}_l.jpg 1284w,
            img/${imgname}_xl.jpg 1540w,
         "
         sizes="
         (min-width: 1136px) 1096px,
         (min-width: 2048px) 1284px,
         (min-width: 2430px) 1540px,
         100vw
         "
      >
    `);
  }


  // build quiz and show results functions
  function buildQuiz(){
    const output = [];

    const questionsLength = myQuestions.length;

    //for each question
    myQuestions.forEach((currentQuestion, questionNumber)=> {

        //human centered question number
        const thisQuestionNumber = questionNumber+1;

        //variable to store possible answers
        const answers =[];

        //for each available answers
        for(letter in currentQuestion.answers){

          //add html radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}" disabled>
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // get the image tag using this function
        const imageTag = responsiveImage(currentQuestion.heading+"-question", currentQuestion.questionAlt);

        //add this question and its answers to the output
        output.push(
          `<div class="slide grid-x grid-padding-x">
            <div class="large-12 cell subheader" id="progress">
              #${thisQuestionNumber} out of ${questionsLength}
            </div>
            <h2 class="heading large-12 cell question-title">
              ${currentQuestion.heading}
            </h2>
            <div class="question-image large-8 medium-6 small-12 cell">
              ${imageTag}
            </div>
            <div class="question-business large-4 medium-6 small-12 cell">
              <div class="question">
                ${currentQuestion.question}
              </div>
              <div class="form-error">
                That's not a choice. Please make a choice before continuing. These are your options.
              </div>
              <div class="answers">
                ${answers.join('')}
              </div>
            </div>
          </div>`
        );
      }
    );

    // combine our output list into one string of HTML and put it on the page
    quizContainer.html(output.join(''));

    // set quiz height initially
    setQuizHeight();
  }

  function showResults(){
    //go no further if we haven't passed validation
    validation();
    if(validationPassed == false){
      return false;
    }

    //remove min height so we can make the quiz disappear
    $('.minheight').removeClass('minheight');

    //reset heading
    $('#title').html('Results');

    // gather answers from our quiz
    const answerContainers = $('.answers');

    //keep track of user's answers
    let numCorrect = 0;

    // build HTML of all questions and answers
    const output = [];

    // for each question
    myQuestions.forEach( (currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // resetting correctness attribute
      currentQuestion['correctness'] = false;

      // get the image tag using this function
      const imageTag = responsiveImage(currentQuestion.heading+"-answer", currentQuestion.questionAlt);

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;

          // set object as correct
          currentQuestion['correctness'] = true;

          // add question and answer to output
          output.push(
            `<div class="result-slide grid-x grid-padding-x correct">
              <h2 class="heading large-12 cell question-title">
                ${currentQuestion.heading}:
                <span class="indicator">
                  Correct
                </span>
              </h2>
              <div class="answer-image large-8 medium-6 small-12 cell">
                ${imageTag}
              </div>
              <div class="answer-business large-4 medium-6 small-12 cell">
                <div class="question">
                  ${currentQuestion.question}
                </div>
                <div class="user-answer">
                  <span class="answer-label">Your answer</span>, "${currentQuestion.answers[userAnswer]}": <span class="indicator">Correct</span>
                </div>
              </div>
            </div>`
          )
      }
      else{
          // if answer incorrect
          // set object as incorrect
          currentQuestion['correctness'] = false;

          // add question and answer to output
          output.push(
            `<div class="result-slide grid-x grid-padding-x incorrect">
              <h2 class="heading large-12 cell question-title">
                ${currentQuestion.heading}:
                <span class="indicator">
                  Incorrect
                </span>
              </h2>
              <div class="answer-image large-8 medium-6 small-12 cell">
                ${imageTag}
              </div>
              <div class="answer-business large-4 medium-6 small-12 cell">
                <div class="question">
                  ${currentQuestion.question}
                </div>
                <div class="user-answer">
                  <span class="answer-label">Your answer</span>, "${currentQuestion.answers[userAnswer]}": <span class="indicator">Incorrect</span>
                </div>
                <div class="correct-answer">
                  <span class="answer-label">Correct answer:</span> "${currentQuestion.answers[currentQuestion.correctAnswer]}"
                </div>
              </div>
            </div>`
          )
      }

    }); // end of foreach


    // remove active slide class to hide the last question
    $('.active-slide').removeClass('active-slide');
    setQuizHeight();

    // hide all the buttons
    previousButton.addClass('hide');
    submitButton.addClass('hide');

    // hide the quizParent
    $('#quizParent').addClass('hide');

    //calculate percentage correct
    var ratio = (numCorrect / myQuestions.length);
    const percentage = ((numCorrect / myQuestions.length)*100) + '%';
    var resultsMessage = "Not bad.";

    if (ratio <= .5){
      resultsMessage = "The important thing is that you tried."
    } else if (ratio >.5 && ratio <.8){
      resultsMessage = "You did a good job."
    } else{
      resultsMessage = "That was amazing!"
    }

    //add message to top of results page
    output.unshift(
    `<div id="score">
      You got ${percentage} correct. ${resultsMessage} Let's review the answers.
    </div>`
    );

    //display output to html
    resultsContainer.html(output.join(''));
    $('#results-parent').removeClass('hide');

    //scroll to top
    window.scrollTo(0, 0);
  } // end of function

  // first run on page load
  buildQuiz();

  // pagination
  const previousButton = $('#previous');
  const nextButton = $('#next');
  const slides = $('.slide');
  let currentSlide = 0;

  function showSlide(n) {
    //reset classes
    $(slides[currentSlide]).removeClass('active-slide');
    $('button').removeClass('hide');
    $(slides[n]).addClass('active-slide');

    currentSlide = n;
    if(currentSlide === 0){
      previousButton.addClass('hide');
    }
    if(currentSlide === slides.length-1) {
      nextButton.addClass('hide');
    } else {
      submitButton.addClass('hide');
    }

    // for subsequent slides, run immediately
    setQuizHeight();

    // for first slide, wait until image loaded and run again
    $('.active-slide img').on('load', setQuizHeight);

    // enable fields on active slide
    $('.active-slide input').prop('disabled', false);

    //set focus
    $('.active-slide input').first().focus();

  }

  function validation(){
    if( $('.active-slide input:radio').is(':checked') == false ){
      $('.active-slide .form-error').addClass('is-visible');
      validationPassed = false;
    } else{
      $('.is-visible').removeClass('is-visible');
      validationPassed = true;
    }
    setQuizHeight();
  }

  function showNextSlide(){
    //go no further if we haven't passed validation
    validation();
    if(validationPassed == false){
      return false;
    }

    showSlide(currentSlide + 1);
    $('#intro').addClass('fadeout');
  }

  function showPreviousSlide(){
    showSlide(currentSlide - 1);
  }

  // show first slide
  showSlide(currentSlide);

  // event listeners
  $('.active-slide input:radio').change(validation);
  previousButton.on('click', showPreviousSlide);
  nextButton.on('click', showNextSlide);
  submitButton.on('click', showResults);
  $(window).resize(setQuizHeight);
});
