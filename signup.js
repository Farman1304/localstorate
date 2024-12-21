var username = document.getElementById('username');
var userpassword = document.getElementById('password');
var useremail = document.getElementById('email');
var usercontact = document.getElementById('contact');

// var emailRegex = /^\S+@\S+\.\S+$/;
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


var nameRegex = /^[a-zA-Z]+$/;

var numberRegex = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/; 
var passwordRegex = /^(?=.*#).{6}$/;


function signup () {

    
    if(nameRegex.test (username.value)) {
        if(passwordRegex.test(userpassword.value) ) {
            if(emailRegex.test (useremail.value)) {
                if(numberRegex.test (usercontact.value)) {
              

                    
                Swal.fire({
                    icon: 'success',
                    title: 'Sign up secessfull',
                    text: 'Your password meets all requirements!',
                });

                


            var userdata = {
                name : username.value,
                password : userpassword.value,
                email : useremail.value,
                contact : usercontact.value
            
            };

      var storedata =  localStorage.setItem('userinfo' , JSON.stringify(userdata))
                        
            setTimeout(function () {

                window.location.href = "login.html"
                    
            },2000);

        } else{
            Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: 'pleae follow the number regex',
            });
        }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Invalid email',
                text: 'pleae follow email regex',
            });

        }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Password',
                text: 'pleae follow password regex',
            });
        }
        
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Invalid name',
                text: 'pleae follow name regex',
            });
               }       }

            //    window.onload.location.href = "index.html"


       

        //   var storedata =  localStorage.setItem ("userdata", JSON.stringify(userdata));
            // console.log(userdata)
            // var storedata = localStorage.getItem ('userdate' , JSON.parse(userdata))
            // console.log(storedata)