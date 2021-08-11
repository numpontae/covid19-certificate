<template>
  <div>
    <div class="container">
      <div class="row">
        <div
          class="col-xs-12 col-md-10 offset-md-1 pt-5"
          v-if="isFound == true"
        >
          <div class="table-responsive">
            <table class="table borderless">
              <tbody>
                <tr>
                  <td stlye="text-algin:left"><b>Patient Name :</b></td>
                  <td>{{ result.patientname }}</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td><b>Hospital Number :</b></td>
                  <td>{{ result.hn }}</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td><b>Collected Date/Time :</b></td>
                  <td>{{ dateOfCollect }}</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td><b>Doctor :</b></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td><b>Sex :</b></td>
                  <td>{{ result.sex }}</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td><b>Age :</b></td>
                  <td>{{ result.age }}</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td><b>DOB :</b></td>
                  <td>{{ result.dob }}</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td><b>Lab Episode :</b></td>
                  <td>{{ result.labnumber }}</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          class="col-xs-12 col-md-10 offset-md-1 pt-5"
          v-if="isFound == true"
          style="margin-top: 3rem"
        >
          <div class="table-responsive">
            <table class="table borderless">
              <tbody>
                <tr>
                  <td stlye="text-algin:left">
                    <b>SARSA-COV-2 Real-time RT-PCR (COVID-19)</b>
                  </td>
                </tr>
                <tr>
                  <td> Method :</td>
                  <td>{{ result.method }}</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Specimen :</td>
                  <td>{{ result.specimen }}</td>
                  <td></td>
                </tr>
                <tr>
                  <td>SARS-Cov-2 RNA :</td>
                  <td>{{ result.sars }}</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Limit of detection :</td>
                  <td>{{ result.limit }}</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          style="
            text-align: right;
            margin-top: 3rem;
            padding-top: 1rem;
            padding-right: 10%;
          "
        >
          <vue-qrcode
            v-if="qrValue != null && qrValue != '' && isFound == true"
            :value="qrValue"
            class="border border-dark"
            style="height: 200px; width: 200px"
          />
        </div>
      </div>
    </div>
    <!-- <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="hee hee"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="landscape"
        pdf-content-width="800px"
 
        @progress="onProgress($event)"
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)"
        ref="html2Pdf"
    >
        <section slot="pdf-content">
            <h4>
            Title
        </h4>
        </section>
    </vue-html2pdf> -->
  </div>
</template>

<script>
import Vue from "vue";
import VueHtml2pdf from "vue-html2pdf";
import VueHtmlToPaper from "vue-html-to-paper";
import VueQrcode from "vue-qrcode";

Vue.use(VueHtml2pdf);
Vue.use(VueQrcode);

const options = {
  name: "_blank",
  specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
  styles: [
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
    "https://unpkg.com/kidlat-css/css/kidlat.css",
  ],
};
Vue.use(VueHtmlToPaper, options);
export default {
  name: "HelloWorld",
  components: {
    VueQrcode,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      linkexpired: null,
      isFound: false,
      qrValue: null,
      search: {
        labnumber: null,
      },
      result: {
        labnumber: null,
        patientname: null,
        sex: null,
        age: null,
        dob: null,
        hn: null,
        labepi: null,
        dateOfCollect: null,
        specimenDate: null,
        location: null,
        room: null,
        doctor: null,
        Company: null,
        method: null,
        specimen: null,
        sars: null,
        limit: null,
      },
    };
  },
  mounted() {
    this.checkToken(this.$route.query.token);
  },
  methods: {
    async checkToken(token) {
      var jwt = require("jsonwebtoken");
      jwt.verify(token, "Ar3b1Op", async (err, decoded) => {
        if (err) {
          this.linkexpired = true;
        } else {
          let labData = await this.$http.get(
            `/api/v1/patient/getlabcovid19?labnumber=${decoded.data}`
          );
          console.log(labData.data.length)
          if (labData.data.length > 0) {
            this.result.patientname =
              labData.data[0].Gvn_nme + " " + labData.data[0].Sur_nme;
            this.result.hn = labData.data[0].HN;
            this.result.labnumber = labData.data[0].LabNumber;
            this.result.sex = labData.data[0].EPVIS_Sex;
            this.result.age = labData.data[0].EPVIS_Age;
            this.result.dob = labData.data[0].EPVIS_DateOfBirth;
            this.dateOfCollect =
              labData.data[0].Dte_of_col + " " + labData.data[0].Tme_of_Col;
            console.log(labData.data);
            this.isFound = true;
          }

          labData.data.map((d) => {
            if (d.CTTC_Cde == "M0003" && d.CTTC_Des == "Specimen") {
              this.result.specimen = d.LabResult;
            }
            if (d.CTTC_Cde == "M0004" && d.CTTC_Des == "Method") {
              this.result.method = d.LabResult;
            }
            if (d.CTTC_Cde == "M3665" && d.CTTC_Des == "Limit of detection") {
              this.result.limit = d.LabResult;
            }
            if (d.CTTC_Cde == "M4381" && d.CTTC_Des == "SARS-CoV-2 RNA") {
              this.result.sars = d.LabResult;
            }
          });
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.borderless td,
.borderless th {
  border: none;
}
.table td {
  text-align: left;
}
</style>
