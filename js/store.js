/* JavaScript
 * A3JodiVisser
 *
 *  Description: A JavaScript program that captures data in a form
 *
 * Revision History
 *      Jodi Visser, 2016.03.17: Created
 */

//puts focus on first name
function focus() 
{
    var firstName = document.getElementById('firstName').focus();
}
focus();

function validateFirstName()
{
    var fName = document.getElementById('firstName').value;
    
    if(!fName)
    {
        document.getElementById('errorMessage').innerHTML += '<div>Please enter your First Name</div>';
        document.getElementById('firstName').focus();
        return false;
    }
    else if(fName.length < 2)
    {
        document.getElementById('errorMessage').innerHTML += '<div>First Name needs to be more than 2 characters</div>';
        document.getElementById('firstName').focus();
        return false;
    }

    return true;
}

function validateLastName()
{
    var lName = document.getElementById('lastName').value;
    
    if(!lName)
    {
        document.getElementById('errorMessage').innerHTML += '<div>Please enter your Last Name</div>';
        document.getElementById('lastName').focus();
        return false;
    }
    else if(lName.length < 2)
    {
        document.getElementById('errorMessage').innerHTML += '<div>Last name needs to be more than 2 characters</div>';
        document.getElementById('lastName').focus();
        return false;
    }

    return true;
}

function validateAddress()
{
    var address = document.getElementById('address').value;
    
    if(!address)
    {
        document.getElementById('errorMessage').innerHTML += '<div>Please enter your Address</div>';
        document.getElementById('address').focus();
        return false;
    }
    else if(address.length < 2)
    {
        document.getElementById('errorMessage').innerHTML += '<div>Address needs to be more than 2 characters</div>';
        document.getElementById('address').focus();
        return false;
    }
    
    return true;
}

function validateCity()
{
    var city = document.getElementById('city').value;
    
    if(!city)
    {
        document.getElementById('errorMessage').innerHTML += '<div>Please enter your City</div>';
        document.getElementById('city').focus();
        return false;
    }
    else if(city.length < 2)
    {
        document.getElementById('errorMessage').innerHTML += '<div>City needs to be more than 2 characters</div>';
        document.getElementById('city').focus();
        return false;
    }
    
    return true;
}

function validatePostalCode()
{
    var postal = document.getElementById('postalCode').value;
    
    if(!postal)
    {
        document.getElementById('errorMessage').innerHTML += '<div>Please enter your Postal Code in the form L0L 0L0</div>';
        document.getElementById('postalCode').focus();
        return false;
    }
    
    return true;
}

function validateProvince()
{
    var province = document.getElementById('province').value;
    
    if(province === '-- Province --')
    {
        document.getElementById('errorMessage').innerHTML += '<div>Please choose a Province from the Menu</div>';
        return false;
    }
    
    return true;
}    

function validateCountry()
{
    var country = document.getElementById('country').value;
    
    if(country === '-- Country --')
    {
        document.getElementById('errorMessage').innerHTML += '<div>Please choose a Country from the Menu</div>';
        return false;
    }
    
    return true;
}    

function validateEmailAddress()
{
    var email = document.getElementById('email').value;
    
    if(!email)
    {
        document.getElementById('errorMessage').innerHTML += '<div>Please enter your Email Address</div>';
        return false;
    }

    if(!validateEmail(email))
    {
        document.getElementById('errorMessage').innerHTML += '<div>Please enter a valid Email Address (me.example@gmail.com)</div>';
        return false;
    }
    
    return true;
}

function validatePhoneNumber()
{
    var phone = document.getElementById('phoneNumber').value;
    
    if(!phone)
    {
        document.getElementById('errorMessage').innerHTML += '<div>Please enter your Phone Number</div>';
        return false;
    }
    else if(phone.length < 10)
    {
        document.getElementById('errorMessage').innerHTML += '<div>Phone number must be 10 digits long</div>';
        return false;
    }
    if(!isOnlyNumbers(phone))
    {
        document.getElementById('errorMessage').innerHTML += '<div>Please enter only numbers for your Phone Number</div>';
        return false;
    }
    
    return true;
}

function validatePaymentMethod()
{
    var cheque = document.getElementById('cheque').checked;
    var moneyOrder = document.getElementById('moneyOrder').checked;
    
    if(!cheque.checked || !moneyOrder.checked)
    {
        document.getElementById('errorMessage').innerHTML += '<div>Please choose a Payment Method</div>';
        return false;
    }
    
    return true;
}    

function upperName()
{
    var fName = document.getElementById('firstName').value.toUpperCase();
    document.getElementById('firstName').value = fName;
}

function validateForm()
{
    document.getElementById('errorMessage').innerHTML = "";
    var isFirstNameValid = validateFirstName();
    var isLastNameValid = validateLastName();
    var isAddressValid = validateAddress();
    var isCityValid = validateCity();
    var isProvinceValid = validateProvince();
    var isCountryValid = validateCountry();
    var isEmailAddressValid = validateEmailAddress();
    var isPhoneNumberValid = validatePhoneNumber();
    var isPaymentMethodValid = validatePaymentMethod();
    
    if(isFirstNameValid && isLastNameValid && isAddressValid && isCityValid && isProvinceValid && isCountryValid && isEmailAddressValid && isPhoneNumberValid && isPaymentMethodValid)
    {
       return true;     
    }
    else
    {
        return false;
    }
}

function clearForm()
{
    document.getElementById('firstName').value = "";
    document.getElementById('lastName').value = "";
    document.getElementById('address').value = "";
    document.getElementById('city').value = "";
    document.getElementById('postalCode').value = "";
    document.getElementById('province').value = "";
    document.getElementById('country').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phoneNumber').value = "";
    document.getElementById('payment').value = "";  
}

//Function that changes all alphabetical characters to upper case
function postalCodeToUpper()
{
    document.getElementById('postalCode').value = document.getElementById('postalCode').value.toUpperCase();
}

function convertFirstLetterToUpper(text)
{
    var string = document.getElementById(text).value;
    if(string.length === 1)
    {
        document.getElementById(text).value = string.toUpperCase();
    }
}

//Function that trims all input in textboxes as required so there are not any extra spaces
function trimOnBlur(id)
{
    document.getElementById(id).value = customTrim(document.getElementById(id).value);
}

//Functon that will trim spaces on a string
function customTrim (str)
{
    var trimmedStr = '';
    for(var i = 0; i < str.length; i++)
    {
        if(str[i] !== ' ')
        {
            trimmedStr += str[i];
        }
    }
    return trimmedStr;
}

//Function that ensures email is entered as such using regular expression
function validateEmail(email) 
{
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(email.match(pattern))
    {
        return true;
    }
    return false;
}

function isOnlyNumbers(input)
{
    var numbers = /^[0-9]+$/;
    
    if(input.match(numbers))
    {
        return true;
    }
    
    return false;
    
}