



function userlogin () {
    loginname = document.getElementById('loginusername');
    loginpass = document.getElementById('loginpassword');
    var userdata = JSON.parse(localStorage.getItem('userdata'));

    if(!storeddata) {
        swal.fire({
            icon : 'error',
            title : 'No user found',
            text :  'please sign up first'
        });
        return;
    }
        if(loginname.value === '' || loginpass.value === '' ) {
            Swal.fire({
                icon: 'error',
                title: 'Fill All Inputs',
                text: 'Please enter both Username and Password',
            });
            return;
        }

        if(loginname.value === storeddata.name && loginpass.value ===  storeddata.password) {
            Swal.fire({
                icon: 'success',
                title: 'Login Successful',
                text: 'Redirecting to quiz...',
            });
           
        setTimeout (function() {
            window.location.href = "quiz.html"
        },2000);
    
    } else{

        Swal.fire({
            icon: 'error',
            title: 'Invalid Inputs',
            text: 'Username or Password is incorrect',
        });
        
    }
}


console.log('store data ' , storeddata);
console.log( storeddata.name);
console.log(storeddata.password)