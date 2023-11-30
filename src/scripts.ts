import $ from 'jquery';
import { nameValidate } from './utils/nameValidate/nameValidate';
import { emailValidate } from './utils/emailValidate/emailValidate';
import { passwordValidate } from './utils/passwordValidate/passwordValidate';

$('.form-wrapper').html(`
  <form class="js-form">
    <label for="name">Enter your name</label>
    <input type="text" id="name" name="name" class="js-name input-box--formatting">
    <label class="name-label"></label>

    <label for="email">Enter your email adress</label>
    <input type="text" id="email" class="js-email input-box--formatting">
    <label class="email-label"></label>

    <label for="password">Enter your password</label>
    <input type="password" id="password" name="password" class="js-password input-box--formatting">
    <label class="password-label"></label>

    <button class="register-button">REGISTER</button>
  </form>
`);

$('.js-form').on('submit', (e) => {
  e.preventDefault();
  const name = $<HTMLInputElement>('.js-name').val() as string;
  const email = $<HTMLInputElement>('.js-email').val() as string;
  const password = $<HTMLInputElement>('.js-password').val() as string;

  // Name validation
  const nameIsValid = nameValidate(name);

  if (nameIsValid) {
    $('.name-label').html('Name correct').css('color', 'green');
    $('.js-name').css('box-shadow', '0px 0px 4px 1px green');
  } else {
    $('.name-label').html('Name must be 2 to 50 chars long and consist only of letters').css('color', 'red');
    $('.js-name').css('box-shadow', '0px 0px 4px 1px red');
  }

  // Email validation
  const emailIsValid = emailValidate(email);

  if (emailIsValid) {
    $('.email-label').html('Email correct').css('color', 'green');
    $('.js-email').css('box-shadow', '0px 0px 4px 1px green');
  } else {
    $('.email-label').html('The email must be in a valid format (e.g. example@example.com)').css('color', 'red');
    $('.js-email').css('box-shadow', '0px 0px 4px 1px red');
  }

  // Password validation
  const passwordIsValid = passwordValidate(password);

  if (passwordIsValid) {
    $('.password-label').html('Password is valid').css('color', 'green');
    $('.js-password').css('box-shadow', '0px 0px 4px 1px green');
  } else {
    $('.password-label').html('The password must be at least 8 characters long and must contain at least 1 number and 1 special character (!, @, #, $, %, ^, &, *)').css('color', 'red');
    $('.js-password').css('box-shadow', '0px 0px 4px 1px red');
  }
});
