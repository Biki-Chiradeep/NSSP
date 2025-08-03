function prevLesson(currentLessonId) {
    console.log("previouslession called");
    let currentLesson = document.getElementById(currentLessonId);
    console.log( currentLesson);
    let prevLessonId = currentLesson.getAttribute("previous-lesson-id");
    console.log( prevLessonId);
    if (prevLessonId) {
        let prevLesson = document.getElementById(prevLessonId);
        if (prevLesson) {
            currentLesson.style.display = "none";
            prevLesson.style.display = "flex";
        }
    }
}

function nextLesson(currentLessonId) {
    let currentLesson = document.getElementById(currentLessonId);
    let nextLessonId = currentLesson.getAttribute("next-lesson-id");

    if (nextLessonId ) {
        let nextLesson = document.getElementById(nextLessonId);
        if (nextLesson) {
            currentLesson.style.display = "none";
            nextLesson.style.display = "flex";
        }
    }
}
