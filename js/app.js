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
      heading: "sports",
      questionAlt: "holding a plastic baseball bat against a soccer ball",
      answerAlt: "Myron rock climbing",
      question: "What new sport did Myron and Mike participate in all year?",
      answers:{
        a: "Swimming",
        b: "Rock climbing",
        c: "Break dancing",
        d: "Skateboarding"
      },
      correctAnswer: "b",
      correctness: false
    },
    {
      heading: "birthday",
      questionAlt: "Myron in the back of the car surrounded by birthday balloons",
      answerAlt: "Birthday parade group photo",
      question: "How did we celebrate Myron’s 5th Birthday",
      answers:{
        a: "A bounce house",
        b: "Bumper cars",
        c: "A tub full of Cheerios",
        d: "A robot parade"
      },
      correctAnswer: "d",
      correctness: false,
      link: "https://www.emandminbeantown.com/myron-is-5/",
      linkText: "See Myron's birthday parade"
    },
    {
      heading: "creature",
      questionAlt: "Myron wearing a crown and a cape, pointing a magic wand at toy trees",
      answerAlt: "Myron and Dominic in the park, wearing St. Patrick's Day costume gear",
      question: "What mythical creature did Myron hunt in our local park?",
      answers:{
        a: "A leprechaun",
        b: "A fairy",
        c: "A sasquatch",
        d: "A unicorn"
      },
      correctAnswer: "a",
      correctness: false
    },
    {
      heading: "superlative",
      questionAlt: "Myron in front of a giant stuffed clam",
      answerAlt: "Myron in front of the world's largest tree near Oaxaca, Mexico",
      question: "What superlative did we see this year?",
      answers:{
        a: "The largest unsupported dome structure",
        b: "The largest species of animal",
        c: "The largest car made out of toothpicks",
        d: "The world’s widest tree"
      },
      correctAnswer: "d",
      correctness: false,
      link: "https://en.wikipedia.org/wiki/%C3%81rbol_del_Tule",
      linkText: "Learn more about el Árbol del Tule"
    },
    {
      heading: "food",
      questionAlt: "Myron looking dismayed, wearing a sweater depicting a cat wearing a red berret, with a skillet of mac and cheese with green sprouts on top",
      answerAlt: "Joe pointing at Myron, both seated at an outdoor food hall in Oaxaca",
      question: "When we visited a foreign city this year, what new food did Em and Myron try?",
      answers:{
        a: "Snake",
        b: "Scorpions",
        c: "Grasshoppers",
        d: "Tripe"
      },
      correctAnswer: "c",
      correctness: false,
      link: "https://en.wikipedia.org/wiki/Chapulines",
      linkText: "Learn more about chapulines"
    },
    {
      heading: "award",
      questionAlt: "Myron with a shirt covering his face",
      answerAlt: "Photo of Myron's book worm award",
      question: "What award did Myron receive at the end of his Pre-K school year?",
      answers:{
        a: "Gardener",
        b: "Most talkative",
        c: "Most creative",
        d: "Book worm"
      },
      correctAnswer: "d",
      correctness: false
    },
    {
      heading: "documentary",
      questionAlt: "a young Em seated in front of wood dowels",
      answerAlt: "Still image from the Secret Mall Apartment documentary",
      question: "South by Southwest premiered a documentary featuring a 20 year old art project that Emily did in what location?",
      answers:{
        a: "Central Park, NYC",
        b: "Salem College",
        c: "Providence Place Mall",
        d: "Cranston Street Armory"
      },
      correctAnswer: "c",
      correctness: false, 
      link: "https://www.secretmallapartment.com/",
      linkText: "Learn more about the Secret Mall Apartment documentary"
    },
    {
      heading: "theater",
      questionAlt: "Myron holding a fish toy over The Rainbow Fish book",
      answerAlt: "Myron holding his DIY octopus costume over his face",
      question: "What part did Myron play in his summer theater camp production of The Rainbow Fish?",
      answers:{
        a: "The rainbow fish",
        b: "The octopus",
        c: "The blue fish",
        d: "The seahorse"
      },
      correctAnswer: "b",
      correctness: false,
      link: "https://www.emandminbeantown.com/myron-does-theater-camp/",
      linkText: "See Myron's theater camp production of The Rainbow Fish"
    },
    {
      heading: "california",
      questionAlt: "Shawn, Natalie, and Mike in a Yayoi Kusama art installation featuring infinity mirrors",
      answerAlt: "Mike and Greg on a sailboat",
      question: "When Mike was in California for a baptism, from what situation did a friend have to rescue him and another friend?",
      answers:{
        a: "A bear attack",
        b: "A capsized sailboat",
        c: "A snake bite",
        d: "Getting stranded on the freeway"
      },
      correctAnswer: "b",
      correctness: false
    },
    {
      heading: "halloween",
      questionAlt: "Matt and Myron carving a pumpkin",
      answerAlt: "Myron in Gigantosaurus costume, with a toy dinosaur in his mouth",
      question: "What did Myron dress up as for Halloween?",
      answers:{
        a: "A robot",
        b: "Gigantosaurus",
        c: "Martin Kratt",
        d: "A skeleton"
      },
      correctAnswer: "b",
      correctness: false,
      link: "https://gigantosaurus-tvseries.com/",
      linkText: "Learn more about the TV show, Gigantosaurus"
    },
    {
      heading: "phrase",
      questionAlt: "Group of friends and Em, Myron, and Mike, with mustache glasses on",
      answerAlt: "Myron and Auntie Caitlin, seated at the table and laughing",
      question: "Myron spent a lot of time with Mike’s friends. What phrase did he pick up from them?",
      answers:{
        a: "Sick, man!",
        b: "That’s what she said",
        c: "If you’re gonna spew, spew into this",
        d: "Wicked"
      },
      correctAnswer: "a",
      correctness: false
    },
    {
      heading: "thanksgiving",
      questionAlt: "Our Thanksgiving group seated on the couch",
      answerAlt: "Em slicing a delicious mushroom wellington",
      question: "We hosted Thanksgiving this year for the first time. What was Mike’s favorite dish?",
      answers:{
        a: "Acorn squash bake",
        b: "Mushroom wellington",
        c: "Collards",
        d: "Cranberries"
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
         src="img/${imgname}_m.jpeg"
         srcset="
            img/${imgname}_s.jpeg 600w,
            img/${imgname}_m.jpeg 1096w,
            img/${imgname}_l.jpeg 1284w,
            img/${imgname}_xl.jpeg 1540w,
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
            `<div class="result-slide grid-x grid-padding-x correct" id="question-${questionNumber}">
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
            `<div class="result-slide grid-x grid-padding-x incorrect" id="question-${questionNumber}">
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
    const percentage = Math.round(((numCorrect / myQuestions.length)*100)) + '%';
    var resultsMessage = "Not bad.";

    if (ratio <= .5){
      resultsMessage = "It's a tough quiz!"
      // play audio
      $('#not-correct')[0].play();
    } else if (ratio >.5 && ratio <.8){
      resultsMessage = "Not bad."
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

    //add links, if present
    // for each question
    myQuestions.forEach( (currentQuestion, questionNumber) => {
      if (typeof currentQuestion.link !== 'undefined'){
        $("#question-"+questionNumber+" .answer-business").append(
         `
         <div class="link">
          <a href="${currentQuestion.link}">
            ${currentQuestion.linkText}
          </a>
         </div>
         ` 
        );
      }
    }); // end of for each


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
