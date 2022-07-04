const answers = document.querySelectorAll('.answer');
const questions = document.querySelectorAll('.question');

questions.forEach( question => {
    question.addEventListener('click', function() {

        
        this.classList.toggle('active');
        let display_answer = question.nextElementSibling;

        if ( display_answer.style.display === 'block' ) {
            display_answer.style.display = 'none';
        } else {
            display_answer.style.display = 'block';
        }

    });
});