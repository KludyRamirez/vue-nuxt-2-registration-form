<template>
  <div class="main-container">
    <div class="logo-container">LOGO</div>

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
          <div class="separator-container">
            <div class="line"></div>
            <div class="or">or</div>
            <div class="line"></div>
          </div>
        </div>
      </div>
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
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

.main-container {
  width: 100%;
  height: 100vh;
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
}

/* dito ko tutuloy to 02/08/2024 */
.logo-container {
}

.logo-container {
  font-size: 50px;
  color: #ffff00;
  background-color: black;
  padding: 0px 12px;
  font-weight: bold;
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

.free-reg-container {
  font-weight: bold;
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
  width: 680px;
  height: 530px;
  background-color: black;
  border: 2px solid #ffcc00;
  border-radius: 12px;
  padding: 38px;
}

.socials-container {
  width: 100%;
  height: 152px;
}
.socials-container__inner {
  width: 100%;
  height: 75%;
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
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.line {
  width: 42%;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.5);
}

.or {
  width: 6%;
  font-size: 18px;
  color: white;
  display: flex;
  justify-content: center;
}
</style>
