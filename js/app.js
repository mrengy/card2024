$(document).foundation();

$( document ).ready(function() {

  // initial variables
  var validationPassed = true;
  const quizContainer = $('#quiz');
  const resultsContainer = $('#results');
  const buttonContainerHTML = $('#buttons')[0].outerHTML;

  // remove the button container from the DOM once HTML is stored
  $('#buttons').remove();

  const myQuestions = [
    {
      heading: "guppy",
      questionAlt: "Myron looking into our aquarium",
      answerAlt: "closeup of guppy in our aquarium. He is backlit with gold and blue visible on his caudal and dorsal fins",
      question: "We got a new guppy. What did Myron name him?",
      answers:{
        a: "Blue",
        b: "Nemo",
        c: "Mr. Fish",
        d: "Seymour"
      },
      correctAnswer: "a",
      correctness: false
    },
    {
      heading: "breakfast",
      questionAlt: "Myron smiling with his eyes closed, wearing pajamas with some food residue visible around his mouth",
      answerAlt: "Myron smiling with his mouth open and a plate with a pancake and berries in front of him",
      question: "What is our favorite breakfast item when we go to our neighborhood diner (or have a special breakfast at preschool?",
      answers:{
        a: "Eggs",
        b: "Pancakes",
        c: "Waffles",
        d: "Hash browns"
      },
      correctAnswer: "b",
      correctness: false
    },
    {
      heading: "visits",
      questionAlt: "Myron, Em, and Caitlin sitting around a dinner table with dirty dishes",
      answerAlt: "Myron wearing a Batman mask",
      question: "We had a surprise visit from a friend who joined us for dinner. It was fun for everyone except Myron (at first). How did our guest win Myron over?",
      answers:{
        a: "By making fart noises",
        b: "By putting on a Batman mask",
        c: "By playing peek-a-boo",
        d: "By telling a knock-knock joke"
      },
      correctAnswer: "b",
      correctness: false
    },
    {
      heading: "planes",
      questionAlt: "Myron standing on a moving sidewalk in an airport, wearing a backpack and eating water ice with a spoon",
      answerAlt: "Myron seated in an airplane seat, throwing Mike's hand up",
      question: "We flew to California a couple of times this year - to visit family and friends in San Luis Obispo and San Jose, and to celebrate Aunt Linda’s birthday. What was Myron’s favorite way to pass the time in the plane when we were on the ground and couldn’t watch movies?",
      answers:{
        a: "Reading books",
        b: "Seated dancing",
        c: "Pretending to be superheroes",
        d: "Pretending papa’s hand was pizza dough and tossing it"
      },
      correctAnswer: "d",
      correctness: false
    },
    {
      heading: "allentown",
      questionAlt: "Myron seated in a stadium with a drum and bugle corps performing on the field. Myron is turning to Uncle Matt and smiling",
      answerAlt: "Myron pushing a gate closed and looking intently at it with Grammy K in the background, standing over a bed with someone in it. Grammy K has the heels of her hand pressed against her mouth.",
      question: "We saw a drum & bugle corps show in Allentown. When it was time to check out of our rental house, how did Myron help wake everyone up?",
      answers:{
        a: "Making fart noises with Grammy K",
        b: "Singing Smoke on the Water",
        c: "Roaring like a dinosaur",
        d: "Jumping on their beds"
      },
      correctAnswer: "a",
      correctness: false
    },
    {
      heading: "swimming",
      questionAlt: "Myron seated on deck stairs, wearing goggles, a personal floatation device, and swim trunks and holding a pool noodle",
      answerAlt: "Myron squirting Mike in the face with a pool noodle",
      question: "We spent some time at our friends’ swimming pool celebrating another friend’s birthday. What was Myron’s favorite way to play in the pool?",
      answers:{
        a: "Doing cannonballs",
        b: "Riding on a floating chair",
        c: "Attaching a pool noodle to a jet and spraying Papa’s face with the other end",
        d: "Pushing Papa in the pool"
      },
      correctAnswer: "c",
      correctness: false
    },
    {
      heading: "gift",
      questionAlt: "Em seated on the floor, hugging Myron and Dominic, who are both seated on her lap",
      answerAlt: "Two ant farms on a table. Dominic is looking at one of the ant farms.",
      question: "Myron and his best friend, Dominic each got one of a certain science-y gift this year that didn’t last very long. What was it?",
      answers:{
        a: "A garden kit",
        b: "An ant farm",
        c: "A crystal growing kit",
        d: "A microscope"
      },
      correctAnswer: "b",
      correctness: false
    },
    {
      heading: "forest",
      questionAlt: "Myron wearing rain boots and walking to the side of a path in the woods",
      answerAlt: "Myron walking aongside a miniature train bridge in the woods",
      question: "What was our favorite thing to find in the forest this year?",
      answers:{
        a: "A miniature train village",
        b: "A fox",
        c: "A large collection of edible mushrooms",
        d: "A story with pages spread out along a trail"
      },
      correctAnswer: "a",
      correctness: false
    },
    {
      heading: "monitor",
      questionAlt: "Myron seated at the dining table with a mostly-eaten bowl of grits in front of him, wearing a bib and noise-protecting ear muffs on his head with his elbows out",
      answerAlt: "Myron pushing buttons on the baby monitor parent unit, with an instructional video displayed on the screen",
      question: "Myron discovered the parent unit of our baby monitor this year. What was his favorite way to play with it?",
      answers:{
        a: "Having one person dance in his room while he watched them from the parent unit",
        b: "Shouting and hearing his echo come through the parent unit",
        c: "Holding the parent unit up to the camera to create an infinite mirror effect",
        d: "Watching the instructions for connecting the monitor to wi-fi"
      },
      correctAnswer: "d",
      correctness: false
    },
    {
      heading: "door",
      questionAlt: "Miss Molly the cat seated next to Myron while Myron draws a maze with markers",
      answerAlt: "Myron's foot with a sock on it, stuck through the cat door",
      question: "Miss Molly has a cat door in an interior door that leads to the basement. Aside from letting Molly go through the door to her litter box, what other purpose does it serve?",
      answers:{
        a: "Myron puts toilet paper through it",
        b: "Myron likes to try to squeeze himself through it",
        c: "Myron puts his clothes through it after he uses the bathroom",
        d: "Myron puts action figures through it, pretending it’s a portal to another dimension"
      },
      correctAnswer: "b",
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
    $('#previous').addClass('hide');
    $('#submit').addClass('hide');

    // hide the quizParent
    $('#quizParent').addClass('hide');

    //calculate percentage correct
    var ratio = (numCorrect / myQuestions.length);
    const percentage = ((numCorrect / myQuestions.length)*100) + '%';
    var resultsMessage = "Not bad.";

    if (ratio <= .5){
      resultsMessage = "The important thing is that you tried."
      // play audio
      $('#not-correct')[0].play();
    } else if (ratio >.5 && ratio <.8){
      resultsMessage = "You did a good job."
      $('#number-one')[0].play();
    } else{
      resultsMessage = "That was amazing!"
      $('#number-one')[0].play();
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
  const slides = $('.slide');
  let currentSlide = 0;

  function showSlide(n) {
    //reset classes
    $(slides[currentSlide]).removeClass('active-slide');
    $(slides[n]).addClass('active-slide');

    //remove old buttons, add new buttons
    $('#buttons').remove();
    $('.active-slide .question-business').append(buttonContainerHTML);

    //reset button classes
    $('button').removeClass('hide');

    //show/hide buttons
    currentSlide = n;
    if(currentSlide === 0){
      $('#previous').addClass('hide');
    }
    if(currentSlide === slides.length-1) {
      $('#next').addClass('hide');
    } else {
      $('#submit').addClass('hide');
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
  $('#quiz').on('click', '#previous', showPreviousSlide);
  $('#quiz').on('click', '#next', showNextSlide);
  $('#quiz').on('click', '#submit', showResults);
  $(window).resize(setQuizHeight);
});
