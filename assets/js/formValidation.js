
// form validation
var nameError=document.getElementById('name_error');
var fname=document.getElementById('name');

var emailError=document.getElementById('email_error');
var femail=document.getElementById('email');

var subjectError=document.getElementById('subject_error');
var fsubject=document.getElementById('subject');

var messageError=document.getElementById('message_error');
var fmessage=document.getElementById('message');

var submitError=document.getElementById('submit_error');

function validation_name(){
    var name=document.getElementById('name').value;
    if(name.length==0   ){
        nameError.innerHTML='Name field is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='Second name is compulsory';
        return false;
    }
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validation_email(){
    var email=document.getElementById('email').value;
    if(email.length==0){
        emailError.innerHTML='Email feild is required'
        return false
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML='This feild may have : alphabets(A-Z/a-z ), numbers, AND must include: "@" '
        return false
    }
    emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true
}
function validation_subject(){
    var subject=document.getElementById('subject').value;
    if(subject.length==0){
        subjectError.innerHTML='This feild is required';
        return false
    }
    subjectError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validation_message(){
    var message=document.getElementById('message').value;
    var required=15;
    var left = required-message.length;
    if(message.length==0){
        messageError.innerHTML='This feild is required';
        return false;
    }
    if(left>0){
        messageError.innerHTML=left + ' more charectors required'
        return false;
    }
    messageError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function all_validation(){
    if(!validation_name() || !validation_email() || !validation_subject() || !validation_message()){
        subjectError.style.display='block';
        submitError.innerHTML='please fix error to submit';
        setTimeout(function(){submitError.style.display='none';},3000)
        return false
    }
    setTimeout(function(){nameError.style.display='none';},10)
    setTimeout(function(){fname.value='';},10)

    setTimeout(function(){emailError.style.display='none';},10)
    setTimeout(function(){femail.value='';},10)

    setTimeout(function(){subjectError.style.display='none';},10)
    setTimeout(function(){fsubject.value='';},10)

    setTimeout(function(){messageError.style.display='none';},10)
    setTimeout(function(){fmessage.value='';},10)
   
}
$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbyQqLEYlxsgel1yBUmnZPEHTzV80NF93XrJzCGKLlqo2SttkJ2zpbzA11odeKi-duoV/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            // window.location.reload()
            //window.location.href="https://google.com"
        },
        error:function (err){
            alert("Something Error")

        }
    })
})


