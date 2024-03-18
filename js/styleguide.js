window.addEventListener('scroll', function() {
    // Calculate positions
    const scrollPos = window.scrollY + 60; // Adjusted for 60px from the top of the viewport
    console.log("boo");
    console.log("scroll position is " + scrollPos);


    // Get the offset top position of each section
    const sectionAOffsetTop = document.querySelector('#partA').offsetTop;
    const sectionBOffsetTop = document.querySelector('#partB').offsetTop;
    const sectionCOffsetTop = document.querySelector('#partC').offsetTop;
    const sectionDOffsetTop = document.querySelector('#partD').offsetTop;
    const sectionEOffsetTop = document.querySelector('#partE').offsetTop;
    const sectionTOffsetTop = document.querySelector('#topofpage').offsetTop;



    // Reference to the buttons
    const buttonA = document.querySelector('#part1');
    const buttonB = document.querySelector('#part2');
    const buttonC = document.querySelector('#part3');
    const buttonD = document.querySelector('#part4');
    const buttonE = document.querySelector('#part5');
    const topButton = document.querySelector('#top-nav');

    // Reset all buttons to not active
    buttonA.classList.remove('is-active');
    buttonB.classList.remove('is-active');
    buttonC.classList.remove('is-active');
    buttonD.classList.remove('is-active');
    buttonE.classList.remove('is-active');
    topButton.classList.remove('is-active');

    // Activate buttons based on the scrollY position of their corresponding sections
    if (scrollPos >= sectionAOffsetTop && scrollPos < sectionBOffsetTop) {
        buttonA.classList.add('is-active');
    } else if (scrollPos >= sectionBOffsetTop && scrollPos < sectionCOffsetTop) {
        buttonB.classList.add('is-active');
    } else if (scrollPos >= sectionCOffsetTop && scrollPos < sectionDOffsetTop) {
        buttonD.classList.add('is-active');
    } else if (scrollPos >= sectionDOffsetTop && scrollPos < sectionEOffsetTop) {
        buttonE.classList.add('is-active');
    } else if (scrollPos >= 0 && scrollPos < sectionAOffsetTop) {
        topButton.classList.add('is-active');
    }
});

