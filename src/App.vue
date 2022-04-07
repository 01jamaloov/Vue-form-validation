<template>
  <div class="container pt-2 pb-2">
    <form class="card" id="survey-form" @submit.prevent="handleForm">
      <div>
        <h1>'Newbie' Developer Survey Form</h1>
        <p>
          This is the IT-Labs 'Newbie' Developer Survey Form. This form was
          developed for your enjoyment. Take your time to fill it out completely
          and we will compile the data for everyone's enjoyment. Thanks!
        </p>
      </div>

      <div class="form-control" :class="{ invalid: errors.name }">
        <label for="firstname">First Name</label>
        <input
          id="firstname"
          type="text"
          placeholder="First Name"
          autocomplete="off"
          v-model.trim="name"
        />
        <span class="input-value"></span>
        <small v-if="errors.name">{{ errors.name }}</small>
      </div>

      <div class="form-control" :class="{ invalid: errors.lastname }">
        <label for="lastname">Last Name</label>
        <input
          id="lastname"
          type="text"
          placeholder="Last Name"
          autocomplete="off"
          v-model.trim="lastname"
        />
        <small v-if="errors.lastname">{{ errors.lastname }}</small>
      </div>

      <div class="form-control" :class="{ invalid: errors.email }">
        <label for="email">Email</label>
        <input
          id="email"
          type="text"
          placeholder="Email"
          autocomplete="off"
          v-model.trim="email"
        />
        <small v-if="errors.email">{{ errors.email }}</small>
      </div>

      <div class="form-control">
        <label for="age">Age</label>
        <input
          id="age"
          type="number"
          placeholder="Age"
          min="18"
          max="42"
          v-model.number="age"
        />
      </div>

      <div class="form-checkbox">
        <span class="label">Gender</span>
        <div class="checkbox">
          <label for="man">
            <input
              id="man"
              type="radio"
              name="gender"
              v-model="gender"
              value="man"
            />
            Man
          </label>
        </div>

        <div class="checkbox">
          <label for="woman">
            <input
              id="woman"
              type="radio"
              name="gender"
              v-model="gender"
              value="woman"
            />
            Woman
          </label>
        </div>

        <div class="checkbox">
          <label for="other">
            <input
              id="other"
              type="radio"
              name="gender"
              v-model="gender"
              value="other"
            />
            Other
          </label>
        </div>
      </div>

      <div class="form-control">
        <label for="frameworks">Favorite CSS Frameworks?</label>
        <select name="frameworks" id="frameworks" v-model="favourite">
          <option value="tailwind">TailwindCSS</option>
          <option value="bootstrap">Bootstrap</option>
          <option value="bulma">Bulma</option>
          <option value="foundation">Foundation</option>
          <option value="materialize">Materialize</option>
          <option value="semantic">Semantic UI</option>
          <option value="skeleton">Skeleton</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">What Type of Developer are You?</span>
        <div class="checkbox">
          <label for="frontend">
            <input
              id="frontend"
              type="checkbox"
              value="frontend"
              v-model="developer"
            />
            Front-end Developer
          </label>
        </div>

        <div class="checkbox">
          <label for="backend">
            <input
              id="backend"
              type="checkbox"
              value="backend"
              v-model="developer"
            />
            Backend Developer
          </label>
        </div>

        <div class="checkbox">
          <label for="fullstack">
            <input
              id="fullstack"
              type="checkbox"
              value="fullstack"
              v-model="developer"
            />
            Full Stack Developer
          </label>
        </div>

        <div class="checkbox">
          <label for="middle">
            <input
              id="middle"
              type="checkbox"
              value="middle"
              v-model="developer"
            />
            Middle Tier Developer
          </label>
        </div>

        <div class="checkbox">
          <label for="webdev">
            <input
              id="webdev"
              type="checkbox"
              value="webdev"
              v-model="developer"
            />
            Web Developer
          </label>
        </div>

        <div class="checkbox">
          <label for="deskdev">
            <input
              id="deskdev"
              type="checkbox"
              value="deskdev"
              v-model="developer"
            />
            Desktop Developer
          </label>
        </div>

        <div class="checkbox">
          <label for="mobiledev">
            <input
              id="mobiledev"
              type="checkbox"
              value="mobiledev"
              v-model="developer"
            />
            Mobile Developer
          </label>
        </div>

        <div class="checkbox">
          <label for="graphdev">
            <input
              id="graphdev"
              type="checkbox"
              value="graphdev"
              v-model="developer"
            />
            Graphics Developer
          </label>
        </div>

        <div class="checkbox">
          <label for="gamedev">
            <input
              id="gamedev"
              type="checkbox"
              value="gamedev"
              v-model="developer"
            />
            Game Developer
          </label>
        </div>

        <div class="checkbox">
          <label for="datascientist">
            <input
              id="datascientist"
              type="checkbox"
              value="datascientist"
              v-model="developer"
            />
            Data Scientist Developer
          </label>
        </div>

        <div class="checkbox">
          <label for="bigdatadev">
            <input
              id="bigdatadev"
              type="checkbox"
              value="bigdatadev"
              v-model="developer"
            />
            Big Data Developer
          </label>
        </div>

        <div class="checkbox">
          <label for="devopsdev">
            <input
              id="devopsdev"
              type="checkbox"
              value="devopsdev"
              v-model="developer"
            />
            Dev Ops Developer
          </label>
        </div>

        <div class="checkbox">
          <label for="crmdev">
            <input
              id="crmdev"
              type="checkbox"
              value="crmdev"
              v-model="developer"
            />
            CRM Developer
          </label>
        </div>

        <div class="checkbox">
          <label for="softdev">
            <input
              id="softdev"
              type="checkbox"
              value="softdev"
              v-model="developer"
            />
            Software Development Engineer in Test (SDET)
          </label>
        </div>

        <div class="checkbox">
          <label for="embeddeddev">
            <input
              id="embeddeddev"
              type="checkbox"
              value="embeddeddev"
              v-model="developer"
            />
            Embedded Developer
          </label>
        </div>

        <div class="checkbox">
          <label for="highdev">
            <input
              id="highdev"
              type="checkbox"
              value="highdev"
              v-model="developer"
            />
            High Level Developer
          </label>
        </div>

        <div class="checkbox">
          <label for="lowdev">
            <input
              id="lowdev"
              type="checkbox"
              value="lowdev"
              v-model="developer"
            />
            Low Level Developer
          </label>
        </div>

        <div class="checkbox">
          <label for="wordpressdev">
            <input
              id="wordpressdev"
              type="checkbox"
              value="wordpressdev"
              v-model="developer"
            />
            WordPress Developer
          </label>
        </div>

        <div class="checkbox">
          <label for="securitydev">
            <input
              id="securitydev"
              type="checkbox"
              value="securitydev"
              v-model="developer"
            />
            Security Developer
          </label>
        </div>
      </div>

      <div class="form-control">
        <label for="message">Message</label>
        <textarea
          class="message"
          name="message"
          id="message"
          placeholder="Comments"
          v-model="message"
        ></textarea>
      </div>

      <div class="form-checkbox">
        <label for="agree">
          <input id="agree" type="checkbox" v-model="agree" />
          I agree to the <a href="#">terms and conditions</a>
        </label>
      </div>
      <button class="btn primary" :disabled="!agree" type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      name: '',
      lastname: '',
      email: '',
      age: 18,
      gender: '',
      favourite: 'bootstrap',
      developer: [],
      message: '',
      agree: null,
      errors: {
        name: null,
        lastname: null,
        email: null,
        age: null,
        gender: null,
        favourite: null,
        developer: null,
        message: null,
        agree: null
      }
    }
  },

  watch: {
    name(value) {
      if (value.length > 0) {
        this.errors.name = null
      }
    },
    lastname(value) {
      if (value.length > 0) {
        this.errors.lastname = null
      }
    },
    email(value) {
      if (
        value.length > 0 &&
        value.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        this.errors.email = null
      }
    }
  },

  methods: {
    formValidation() {
      let isValid = true
      if (this.name.length === 0) {
        this.errors.name = 'First name cannot be blank'
        isValid = false
      } else {
        this.errors.name = null
      }

      if (this.lastname.length === 0) {
        this.errors.lastname = 'Last name cannot be blank'
        isValid = false
      } else {
        this.errors.lastname = null
      }

      if (
        this.email.match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        this.errors.email = null
      } else {
        this.errors.email = 'Enter a valid email address'
        isValid = false
      }
      return isValid
    },
    handleForm() {
      if (this.formValidation()) {
        console.group('Data form')
        console.log('Name:', this.name)
        console.log('Last name:', this.lastname)
        console.log('Email:', this.email)
        console.log('Age:', this.age)
        console.log('Gender:', this.gender)
        console.log('Skills:', this.favourite)
        console.log('Developer:', this.developer)
        console.log('Message:', this.message)
        console.log('Agreement:', this.agree)
        console.groupEnd()
        this.name = ''
        this.lastname = ''
        this.email = ''
      }
    }
  }
}
</script>

<style>
.form-control small {
  color: red;
}

.form-control.invalid input,
.form-control.invalid input:focus {
  border-color: red;
}

.form-control .message {
  resize: none;
}
</style>
