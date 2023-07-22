<script>
import axios from "axios";
import { store } from "../store"
export default {
    name: "AppContactUs",
    data() {
        return {
            store,
            name: "",
            email: "",
            message: "",
            loading:false,
        }
    },
    methods: {
        sendForm() {
            this.loading = true
            let requestdata = {
                name: this.name,
                email: this.email,
                message: this.message
            };
            axios.post(this.store.origiapiUrl + "contacts", requestdata).then(response => {
                this.loading = false
                let success = response.data.success;
                if(!success) {
                    console.log("ci sono stati errori");
                }else {

                }
            }).catch(err => {
                this.loading = false
            });
        }
    }
}
</script>

<template>
    <section class="mb-4">

        <!--Section heading-->
        <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
        <!--Section description-->
        <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within
            a matter of hours to help you.</p>
        <div class="row">

            <!--Grid column-->
            <div class="col-md-9 mb-md-0 mb-5">
                <form id="contact-form" name="contact-form" @submit.prevent="sendForm()">

                    <!--Grid row-->
                    <div class="row">

                        <!--Grid column-->
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input type="text" id="name" name="name" class="form-control" v-model="name">
                                <label for="name" class="">Your name</label>
                            </div>
                        </div>
                        <!--Grid column-->

                        <!--Grid column-->
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input type="text" id="email" name="email" class="form-control" v-model="email">
                                <label for="email" class="">Your email</label>
                            </div>
                        </div>
                        <!--Grid column-->

                    </div>
                    <!--Grid row-->

                    <!--Grid row-->
                    <div class="row">
                        <div class="col-md-12">
                            <div class="md-form mb-0">
                                <input type="text" id="subject" name="subject" class="form-control">
                                <label for="subject" class="">Subject</label>
                            </div>
                        </div>
                    </div>
                    <!--Grid row-->

                    <!--Grid row-->
                    <div class="row">

                        <!--Grid column-->
                        <div class="col-md-12">

                            <div class="md-form">
                                <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"
                                    v-model="message"></textarea>
                                <label for="message">Your message</label>
                            </div>

                        </div>
                    </div>
                    <!--Grid row-->


                    <div class="text-center text-md-left">
                        <button class="btn btn-primary text-white" :disabled="loading">{{ loading ? "invio in corso" : "Invia"}}</button>
                    </div>
                    <div class="status"></div>
                </form>
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-md-3 text-center">
                <ul class="list-unstyled mb-0">
                    <li><i class="fas fa-map-marker-alt fa-2x"></i>
                        <p>San Francisco, CA 94126, USA</p>
                    </li>

                    <li><i class="fas fa-phone mt-4 fa-2x"></i>
                        <p>+ 01 234 567 89</p>
                    </li>

                    <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                        <p>contact@mdbootstrap.com</p>
                    </li>
                </ul>
            </div>
            <!--Grid column-->

        </div>

    </section>
</template>