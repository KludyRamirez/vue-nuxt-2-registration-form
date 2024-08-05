<template>
  <div class="main-container">
    <div class="logo-container">
      <h1 class="logo">LOGO</h1>
    </div>

    <div class="free-reg-container">Free Registration</div>

    <div class="stepper-container">
      <div class="stepper-container__inner">
        <q-stepper
          ref="stepper"
          v-model="step"
          header-nav
          animated
          inactive-color="black"
        >
          <q-step :name="1" prefix="1" title="Select campaign settings">
            For each ad campaign that you create, you can control how much
            you're willing to spend on clicks and conversions, which networks
            and geographical locations you want your ads to show on, and more.
          </q-step>

          <q-step
            :name="2"
            prefix="2"
            title="Create an ad group"
            caption="Optional"
          >
            An ad group contains one or more ads which target a shared set of
            keywords.
          </q-step>

          <q-step :name="3" prefix="3" title="Create an ad">
            Try out different ad text to see what brings in the most customers,
            and learn how to enhance your ads using features like ad extensions.
            If you run into any problems with your ads, find out how to tell if
            they're running and how to resolve approval issues.
          </q-step>
        </q-stepper>
      </div>
      <div class="gray-line"></div>
    </div>

    <div class="reg-form-container">
      <div class="socials-container">
        <div class="socials-container__inner">
          <div class="continue-text">Continue with</div>
          <div class="social-logo-container">
            <img src="../assets/fb.png" class="social-logo" />
            <img src="../assets/google.png" class="social-logo" />
          </div>
        </div>
        <div class="separator-container">
          <div class="line"></div>
          <div class="or">or</div>
          <div class="line"></div>
        </div>
      </div>
      <ValidationObserver v-slot="{ invalid }">
        <form class="input-container__template" @submit.prevent="submitForm">
          <div class="input-container__row">
            <div class="input-container">
              <label for="username" class="input-label">Username</label>

              <div class="input-container__inner">
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required|min:5|max:50"
                  name="username"
                >
                  <q-input
                    id="username"
                    v-model="username"
                    filled
                    :error="errors.length > 0"
                    :error-message="errors[0]"
                    label="Please enter username."
                  />
                </ValidationProvider>
              </div>
            </div>

            <div class="input-container">
              <label for="password" class="input-label">Password</label>
              <div class="input-container__inner">
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required|min:5|max:50"
                  name="password"
                >
                  <q-input
                    id="password"
                    v-model="password"
                    filled
                    :error="errors.length > 0"
                    :error-message="errors[0]"
                    label="Please enter password."
                    type="password"
                  />
                </ValidationProvider>
              </div>
            </div>
          </div>

          <div class="input-container__row">
            <div class="input-container">
              <label for="confirmPassword" class="input-label"
                >Confirm Password</label
              >
              <div class="input-container__inner">
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required|confirmed:password|min:5|max:50"
                  name="confirm password"
                >
                  <q-input
                    id="confirmPassword"
                    v-model="confirmPassword"
                    filled
                    :error="errors.length > 0"
                    :error-message="errors[0]"
                    label="Please confirm your password."
                    type="password"
                  />
                </ValidationProvider>
              </div>
            </div>

            <div class="input-container">
              <label for="mobileNumber" class="input-label"
                >Mobile Number</label
              >
              <div class="input-container__inner">
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required|min:5|max:50"
                  name="mobile number"
                >
                  <q-input
                    id="mobileNumber"
                    v-model="mobileNumber"
                    filled
                    :error="errors.length > 0"
                    :error-message="errors[0]"
                    label="Please enter mobile number."
                    mask="(###) ### - ####"
                    hint="Mask: (###) ### - ####"
                  />
                </ValidationProvider>
              </div>
            </div>
          </div>

          <div class="input-container__row">
            <div class="input-container">
              <label for="emailAddress" class="input-label"
                >E-mail Address</label
              >
              <div class="input-container__inner">
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required|min:5|max:50|email"
                  name="e-mail address"
                >
                  <q-input
                    id="emailAddress"
                    v-model="emailAddress"
                    filled
                    :error="errors.length > 0"
                    :error-message="errors[0]"
                    label="Please enter e-mail address."
                  />
                </ValidationProvider>
              </div>
            </div>

            <div class="input-container">
              <label for="identityNumber" class="input-label"
                >Identity Number</label
              >
              <div class="input-container__inner">
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required|min:5|max:50"
                  name="identity number"
                >
                  <q-input
                    id="identityNumber"
                    v-model="identityNumber"
                    filled
                    :error="errors.length > 0"
                    :error-message="errors[0]"
                    label="Please enter correct ID number."
                    mask="#### #### #### ####"
                    fill-mask="#"
                    hint="Mask: #### #### #### ####, FillMask: #"
                  />
                </ValidationProvider>
              </div>
            </div>
          </div>

          <div class="input-container__row">
            <div class="input-container">
              <label for="referral" class="input-label">Referral</label>
              <div class="input-container__inner">
                <ValidationProvider v-slot="{ errors }" name="referral">
                  <q-input
                    id="referral"
                    v-model="referral"
                    filled
                    :error="errors.length > 0"
                    :error-message="errors[0]"
                    label="Please enter referral username."
                  />
                </ValidationProvider>
                <div class="referralNotice">Leave blank if no referral</div>
              </div>
            </div>

            <div class="input-container">
              <label for="verificationCode" class="input-label"
                >Verification Code</label
              >
              <div class="verification-code-container">
                <div class="input-container__inner__verificationCode">
                  <div class="verification-code-container__special">
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required|min:4|max:50|"
                      name="verification code"
                    >
                      <q-input
                        id="verificationCode"
                        v-model="verificationCode"
                        filled
                        :error="errors.length > 0"
                        :error-message="errors[0]"
                        label="Verification Code."
                        class="input-verificationCode"
                      />
                    </ValidationProvider>
                  </div>
                  <div class="verification-code-container__inner">
                    <span class="random-number">{{ randomNumber }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="terms-container">
            <ValidationProvider
              v-slot="{ errors, handleChange }"
              rules="required"
              name="checkbox"
            >
              <q-checkbox
                v-model="terms"
                :error="errors.length > 0"
                :error-message="errors[0]"
                @input="handleChange"
              />
            </ValidationProvider>
            <div class="terms-container__inner">
              I agree.
              <span class="terms-label">OCMS Terms & Conditions</span>
            </div>
          </div>

          <div class="register-button-container">
            <q-btn
              class="register-button"
              :disable="invalid || !isCodeMatching || !terms"
            >
              <span class="register-text">Register</span>
            </q-btn>
          </div>

          <div class="return-button">
            <span class="return-text">Return home</span>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { QStepper, QStep } from 'quasar'

export default {
  components: {
    QStepper,
    QStep,
  },
  data() {
    return {
      step: 1,
      randomNumber: '',
      verificationCode: '',
      terms: false,
      username: '',
      password: '',
      confirmPassword: '',
      mobileNumber: null,
      emailAddress: '',
      identityNumber: null,
      referral: '',
    }
  },
  computed: {
    isCodeMatching() {
      return this.verificationCode === this.randomNumber
    },
  },

  mounted() {
    this.generateRandomNumber()
  },

  methods: {
    generateRandomNumber() {
      this.randomNumber = Math.floor(1000 + Math.random() * 9000).toString()
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

.main-container {
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(151, 42, 177, 1) 0%,
    rgba(28, 58, 112, 1) 80%,
    rgba(8, 24, 50, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 28px;
  padding: 56px;
  height: 100%;
}

/* dito ko tutuloy to 02/08/2024 */
.logo-container {
  width: 210px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
}

.logo {
  font-size: 50px;
  color: #ffff00;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  letter-spacing: 2px;
}

/* stepper */

.q-stepper {
  background-color: transparent;
  box-shadow: none;
  width: 100%;
}

.q-stepper__header--border {
  border: none;
}

.q-stepper__content {
  display: none;
}

.q-stepper__title {
  display: none;
}

.q-stepper__caption {
  display: none;
}

.q-stepper__tab--active {
  color: #eba013;
}

.q-stepper__tab--active:first-child::after {
  content: '1';
  display: block;
  color: white;
  font-size: 40px;
  z-index: 10;
  position: absolute;
  top: 7px;
  left: 40px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
}

.q-stepper__tab--active:nth-child(2)::after {
  content: '2';
  display: block;
  color: white;
  font-size: 40px;
  z-index: 10;
  position: absolute;
  top: 6px;
  left: 54px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
}

.q-stepper__tab--active:nth-child(3)::after {
  content: '3';
  display: block;
  color: white;
  font-size: 40px;
  z-index: 10;
  position: absolute;
  top: 7px;
  left: 71px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
}

.q-icon {
  display: none;
}

.q-stepper__dot {
  width: 50px;
  height: 50px;
  font-size: 24px;
  font-weight: 600;
}

.q-stepper__tab--active .q-stepper__dot {
  background-color: #eba013;
  color: white;
  transform: scale(1.4);
}

.q-field {
  color: white;
}

.q-field__native {
  color: white;
}

.free-reg-container {
  font-weight: 700;
  font-size: 40px;
  font-family: 'Inter', sans-serif;
  color: white;
}

.stepper-container {
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: 36px;
  padding-bottom: 12px;
}

.stepper-container__inner {
  width: 420px;
  display: flex;
  justify-content: center;
  z-index: 9;
}

.gray-line {
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.01) 0%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0.01) 100%
  );
}

/* reg-form */

.reg-form-container {
  width: 760px;

  background-color: black;
  border: 2px solid #ffcc00;
  border-radius: 12px;
  padding: 42px;
}

.socials-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.socials-container__inner {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
}

.continue-text {
  font-size: 18px;
  color: white;
}

.social-logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

.social-logo {
  border-radius: 6px;
  width: 50px;
  height: 50px;
}

.separator-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.line {
  width: 100%;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.5);
}

.or {
  width: 16%;
  font-size: 18px;
  color: white;
  display: flex;
  justify-content: center;
}

.input-container__template {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  gap: 30px;
}

.input-container__row {
  width: 100%;
  display: flex;
  gap: 30px;
}

.input-container {
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 8px;
}

.input-label {
  color: white;
  white-space: nowrap;
}

.input-container__inner {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  height: 56px;
}

.q-field__label {
  color: #c3c3c3;
}

.referralNotice {
  font-size: 14px;
  font-weight: 400;
  color: #959595;
  margin-top: -10px;
}

.verification-code-container {
  display: flex;
  align-items: center;
  width: 100%;
}

.input-container__inner__verificationCode {
  display: flex;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 6px;
  height: 56px;
  width: 100%;
}

.input-verificationCode {
  width: 100%;
}

.verification-code-container__inner {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 40%;
  height: 100%;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}

.random-number {
  font-size: 20px;
  font-weight: 400;
  color: red;
}

.terms-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 4px;
  margin-top: 20px;
}

.terms-container__inner {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  white-space: nowrap;
}

.terms-label {
  color: #d89e30;
  font-size: 16px;
  font-weight: 400;
}

.q-checkbox__bg {
  background: white;
}

.register-button-container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.register-button {
  width: 160px;
  height: 54px;
  border-radius: 27px;
  border: 2px solid #bb7f0f;
  background: linear-gradient(180deg, #ea9f13 0%, #bb7f0f 100%);
  box-shadow: 0px 6px 0px 0px rgba(255, 255, 255, 0.25) inset;
}

.register-text {
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 18px;
  font-weight: 400px;
  letter-spacing: 1px;
}

.return-button {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  margin-top: -10px;
  display: none;
}

.return-text {
  font-size: 14px;
  font-weight: 400;
  color: #888888;
}

.q-field__bottom {
  padding: 8px 0px 0px 0px;
}

.verification-code-container__special {
  display: flex;
  justify-content: center;
}

@media only screen and (max-width: 767px) {
  .main-container {
    padding: 40px 10px 10px 10px;
    height: 100%;
  }

  .logo-container {
    width: 112px;
    height: 40px;
  }

  .logo {
    font-size: 30px;
  }

  .free-reg-container {
    font-weight: 700;
    font-size: 30px;
  }

  .stepper-container {
    width: 100%;
  }

  .reg-form-container {
    width: 100%;
    height: 100%;
    padding: 22px;
  }

  .q-stepper__tab--active .q-stepper__dot {
    transform: scale(1.2);
  }

  .q-stepper__tab--active:nth-child(2)::after {
    top: 6px;
    left: 40px;
  }

  .q-stepper__tab--active:nth-child(3)::after {
    top: 7px;
    left: 42px;
  }

  .input-container {
    width: 100%;
  }

  .input-container__template {
    flex-wrap: wrap;
  }

  .input-container__row {
    flex-wrap: wrap;
  }

  .terms-container {
    margin-top: -10px;
  }

  .return-button {
    display: flex;
  }
}
</style>
