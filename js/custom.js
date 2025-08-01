$(document).ready(function(){
    // Changes the education image based on the item being hovered over in the education list
    $(".change-edu-img").hover(
        function(){ // when hovered over
            var imageChange = $(this).data("image");
            $("#edu-img").attr("src", imageChange);
        },
        function(){ // when not-hovered over
            $("#edu-img").attr("src", "./images/education.png");
        });

    $(".change-skill-img").hover(
        function() {  // when hovered over
            var imageChange = $(this).data("image");
            $("#skill-img").attr("src", imageChange);
        }, function() { // when not-hovered over
            $("#skill-img").attr("src", "./images/skills.png");
        }
    );

});