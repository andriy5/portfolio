<template>
  <div>
    <h1 class="emphasis">Me contacter</h1>
    <div id="contactme" class="part">
      <form class="contact-form" @submit.prevent="sendEmail">
        <div class="part_name">
          <input
            type="text"
            name="user_name"
            placeholder="Nom"
            inputmode="text"
          />
        </div>

        <div class="part_email">
          <input
            type="email"
            name="user_email"
            placeholder="E-mail"
            inputmode="email"
          />
        </div>

        <div class="part_msg">
          <textarea
            name="message"
            placeholder="Bonjour Andriy..."
            inputmode="text"
            rows="14"
            col="10"
          ></textarea>
        </div>

        <div class="part_submit">
          <input type="submit" value="Envoyer" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import Vue from "vue";
import VueToast from "vue-toast-notification";
// Import one of available themes
// import 'vue-toast-notification/dist/theme-default.css';
import "vue-toast-notification/dist/theme-sugar.css";

export default {
  methods: {
    sendEmail: e => {
      Vue.use(VueToast);

      if (
        e.target.user_name.value &&
        e.target.user_email.value &&
        e.target.message.value
      ) {
        emailjs
          .sendForm(
            "portfolioblablabla",
            "template_wy0IdZjA",
            e.target,
            "user_N189Z1RJi2t5o8twhvDnT"
          )
          .then(
            result => {
              console.log("SUCCESS!", result.status, result.text);
              Vue.$toast.open("Message envoyé !");
            },
            error => {
              console.log("FAILED...", error);
              Vue.$toast.open({
                message:
                  "Il y a eu une erreur lors de l'envoi ! Si le problème persiste vous pouvez me joindre directement par mail.",
                type: "error"
              });
            }
          );
      } else {
        Vue.$toast.open({
          message: "Il semblerait qu'un des champs soit manquant !",
          type: "error",
          duration: "5000"
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$raleway: "Raleway", sans-serif;
$yanone: "Yanone Kaffeesatz", sans-serif;

#contactme {
  height: 45vh;
  margin: 0 3rem;
  padding: 3rem;
  background-color: #222222;
}
.contact-form {
  // display: grid;
  // grid-template-columns: 20% 40% 40%;
  // grid-template-rows: 70px 70px 30px;
  // column-gap: 1em;
  // row-gap: 1em;
}

.part {
  input,
  textarea {
    outline: none;
    border-color: transparent;
    padding-left: 1em;
    width: 90%;
    height: 30px;
    background-color: #222;
    border-bottom: 1px solid rgb(182, 182, 182);
    color: #fff;
    font-family: $raleway;

    &::placeholder {
      font-family: $raleway;
      color: rgb(182, 182, 182);
    }

    &:focus {
    border-bottom: 1px solid #fff!important;
    }
  }

  textarea {
    float: right;
    width: 95%;
    height: 90%;
    padding-top: 1em;
    resize: vertical;
  }

  // &_name {
  //   grid-area: 1 / 1 / 1 / 1;
  // }

  // &_email {
  //   grid-area: 2 / 1 / 3 / 1;
  // }

  // &_msg {
  //   grid-area: 1 / 2 / 3 / 4;
  // }

  // &_error {
  //   grid-area: 3 / 2 / 4 / 4;
  // }

  &_submit {
  //   grid-area: 3 / 3 / 3 / 3;

    input {
      background-color: #fff;
      color: #000;
      float: right;
      width: 80px;
      text-align: center;
      text-transform: uppercase;
      padding: 0;
      letter-spacing: 0.2em; 

      &:hover {
        cursor: pointer;
        background-color: rgb(238, 238, 238);
      }
    }
  }
}

// @media only screen and (max-width: 550px) {
  .contact-form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .part {
    input,
    textarea {
      width: 60vw;
      float: none;
      margin: 0.5em;
    }

    &_msg {
      height: 100%;
    }
  }

  .part_submit input {
    width: 30vw;
    text-align: center;
  }
// }
</style>
