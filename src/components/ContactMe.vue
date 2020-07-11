<template>
  <div>
    <h1 class="emphasis">Me contacter</h1>
    <div id="contactme" class="part">
      <form class="contact-form" @submit.prevent="sendEmail">
        <div class="part_name">
          <input type="text" name="user_name" placeholder="Nom" />
        </div>

        <div class="part_email">
          <input type="email" name="user_email" placeholder="E-mail" />
        </div>

        <div class="part_msg">
          <textarea name="message" placeholder="Bonjour Andriy..."></textarea>
        </div>

        <div class="part_error">
          <p id="error-msg-contact">J'aimerais vraiment savoir ce que vous avez à me dire, pouvez vous remplir tous les champs.</p>
        </div>

        <div class="part_submit">
          <input type="submit" value="Envoyer" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// import emailjs from "emailjs-com";

export default {
  methods: {
    sendEmail: (e) => {
      if (e.target.user_name.value && e.target.user_email.value && e.target.message.value) {
        alert("c bon mon khouia")
      }
      else {
        document.getElementById("error-msg-contact").style.display = "block";
        // alert("c pas bon mon khouia")
      }

      // emailjs
      //   .sendForm(
      //     "portfolioblablabla",
      //     "template_wy0IdZjA",
      //     e.target,
      //     "user_N189Z1RJi2t5o8twhvDnT"
      //   )
      //   .then(
      //     (result) => {
      //       console.log("SUCCESS!", result.status, result.text);
      //     },
      //     (error) => {
      //       console.log("FAILED...", error);
      //     }
      //   );
    },
  },
};
</script>

<style lang="scss" scoped>
$raleway: "Raleway", sans-serif;
$yanone: "Yanone Kaffeesatz", sans-serif;
#error-msg-contact {
  display: none;
}

#contactme {
  margin: 0 3rem;
  padding: 3rem;
  background-color: #222222;
}
.contact-form {
  display: grid;
  grid-template-columns: 20% 40% 40%;
  grid-template-rows: 70px 70px 30px;
  column-gap: 1em;
  row-gap: 1em;
}

.part {
  input, textarea {
    padding-left: 1em;
    width: 90%;
    height: 30px;
    background-color: #222;
    border: 1px solid #fff;
    color: #fff;
    font-family: $raleway;


    &::placeholder{
      font-family: $raleway;
      color: rgb(182, 182, 182);
    }
  }

  textarea {
    float: right;
    width: 95%;
    height: 90%;
    padding-top: 1em;
  }

  &_name {
    grid-area: 1 / 1 / 1 / 1;
  }

  &_email {
    grid-area: 2 / 1 / 3 / 1;
  }

  &_msg {
    grid-area: 1 / 2 / 3 / 4;    
  }

  &_error {
    grid-area: 3 / 2 / 4 / 4;    
  }

  &_submit {
    grid-area: 3 / 3 / 3 / 3;

    input {
      background-color: #fff;
      color: #000;
      float: right;
      width: 80px;
      text-align: left;
    }
  }
}

</style>
