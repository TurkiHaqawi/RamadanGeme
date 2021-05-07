
// Set Setting
let container = document.querySelector('.container'),
    cloud = document.getElementsByClassName('cloud'),
    cloudArray = Array.from(cloud),
    clouds = document.querySelector('.clouds'),
    rightAnswer = 0,
    wrongAnswers = 5;
let qObject = [
    {
        question: "ماهو الشهر الذي انزل فيه القران اكريم؟",
        answer: "رمضان"
    },
    {
        question: "كم عدد سور القران الكريم؟",
        answer: "144"
    },
    {
        question: "ماهي اطول سورة في القران الكريم؟",
        answer: "سورة البقرة"
    },
    {
        question: "ماهي اقصر سورة في القراء الكريم؟",
        answer: "سورة الكوثر"
    },
    {
        question: "العيد الذي يأتي بعد رمضان هو ...",
        answer: "عيد الفطر"
    }

]



window.onload = function() {
    swal(`
    أهلا وسهلا مجتمع الجافا سكربت، هذه لعبة صغيره بمناسبة رمضان و قرب عيد الفطر المبارك،
    طريقة عمل اللعبة: 
    - سوف تمر أمامك مجموعة من السحب
    - قم بالضفط على اي سحابة ترديها
    - بعد الضغط سوف يظهر لك سؤال
    - لكي تربح عليكك ان تجاوب على الاقل 3 اسأله من أصل 5
    - تلميح: شيك على الكود 
    `)
    .then((value) => {
        if (value) {
            clouds.style.display = "block";
        } else {
            clouds.style.display = "block";
        }
    })
}


// console.log(cloudArray);
clickClouds(cloudArray)
function clickClouds (cl) {
    for(let i = 0; i < cl.length; i++) {
        cl[i].addEventListener("click", function() {
            let data = cl[i].dataset.number;
            
            if (cl[i].dataset.number === data) {
                swal({
                    text: qObject[i].question,
                    content: "input",
                    button: {
                    text: "تحقق",
                    closeModal: false,
                    },
                })
                .then(value => {
                    if (value === qObject[i].answer) {
                        rightAnswer++
                        swal ("اجابه صحيحة", " ", "success")
                        cl[i].classList.add("active");
                        if (rightAnswer === 3) {
                            swal("!مبدع استمر", " ", "success")
                        }
                    } else {
                        swal ("اجابة خاطئه", " ", "error")
                        cl[i].classList.remove("active");
                        wrongAnswers--;
                    }
                })
                .then(() => {
                    if (rightAnswer >= 5) {
                        swal(`Your Right Answers are ${rightAnswer} From ${cloudArray.length} `, " ", "success")
                        container.style.display = 'block';
                    }
                })
                .then(() => {
                    if(wrongAnswers < 3) {
                        swal(`Your Wrong Asnwers are ${wrongAnswers + 1}`, " ", "error")
                        wrongAnswers = 5;
                    }
                })
                
            }
        })
    }
}



















