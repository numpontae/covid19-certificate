<template>
  <div>
    <div class="container">
      <div
        id="printMe"
        class="printMe"
        v-if="isFound == true"
        style="margin-top: 2rem;margin-bottom: 2rem"
      >
        <div
          class="col-xs-12 col-md-10 offset-md-1"
          v-if="isFound == true"
        >
          <p align="center">
            <img
              alt="Samitivej"
              src="../assets/SNH.jpg"
              style="height: 90px"
              v-if="result.site == 'SNH'"
            />
            <img
              alt="Samitivej"
              src="../assets/SVH.jpg"
              style="height: 90px"
              v-if="result.site == 'SVH'"
            />
          </p>
          <p style="margin-top: 2rem; font-size: 25px; text-align:center">
            <b>Laboratory Report</b>
          </p>
          <div style="margin-top: 1rem; padding-top: 1rem; border-top: 2px solid black;
          margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 2px solid black;
          font-size:12px;">
            <table class="table borderless">
              <tbody>
                <tr>
                  <td stlye="text-algin:left"><b>Patient Name :</b></td>
                  <td>{{ result.patientname }}</td>
                </tr>
                <tr>
                  <td><b>Sex :</b></td>
                  <td>{{ result.sex }}</td>
                </tr>
                <tr>
                  <td><b>Age :</b></td>
                  <td>{{ result.age }}</td>
                </tr>
                <tr>
                  <td><b>DOB :</b></td>
                  <td>{{ result.dob }}</td>
                </tr>
                <tr>
                  <td><b>Hospital Number :</b></td>
                  <td>{{ result.hn }}</td>
                </tr>
                <tr>
                  <td><b>Lab Episode :</b></td>
                  <td>{{ result.labnumber }}</td>
                </tr>
                <tr>
                  <td><b>Collected Date/Time :</b></td>
                  <td>{{ result.dateOfCollect }}</td>
                </tr>
                <tr>
                  <td><b>Doctor :</b></td>
                  <td>{{ result.doctor }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          class="col-xs-12 col-md-10 offset-md-1"
          v-if="isFound == true"
          style="margin-top: 0rem; font-size:12px;"
        >
          <div class="table-responsive">
            <table class="table borderless">
              <tbody>
                <tr>
                  <td stlye="text-algin:left" colspan="2">
                    <b>{{ result.ctts_nme }}</b>
                  </td>
                </tr>

                <tr v-if="result.method && !result.covid19ag">
                  <td style="padding-left:20px"><b>Method :</b></td>
                  <td>{{ result.method }}</td>
                </tr>
                <tr v-else>
                  <td style="padding-left:20px;padding-top:30px"><b>Method :</b></td>
                  <td style="padding-top:30px">{{ result.method }}</td>
                </tr>
                <tr v-if="result.specimen">
                  <td style="padding-left:20px"><b>Specimen :</b></td>
                  <td>{{ result.specimen }}</td>
                </tr>
                <tr v-if="result.sars">
                  <td style="padding-left:20px"><b>SARS-Cov-2 RNA :</b></td>
                  <td>{{ result.sars }}</td>
                </tr>
                <tr v-if="result.limit">
                  <td style="padding-left:20px;padding-top:30px"><b>Limit of detection :</b></td>
                  <td style="padding-top:30px">{{ result.limit }}</td>
                </tr>
                <tr v-if="result.covid19ag">
                  <td style="padding-left:20px;padding-top:30px"><b>COVID-19 Ag :</b></td>
                  <td style="padding-top:30px">{{ result.covid19ag }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          class="col-xs-12 col-md-10 offset-md-1"
          v-if="isFound == true"
        >
          <div class="table-responsive" style="margin-top: 0rem; border-top: 2px solid black;
          margin-bottom: 1rem; border-bottom: 2px solid black; font-size:12px;">
            <table class="table borderless" style="margin-top: 1rem;">
              <tbody>
                <tr>
                  <td><b>Reported by :</b> {{ result.reported }}</td>
                </tr>
                <tr>
                  <td><b>Authorised by :</b> {{ result.authorised }}</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- <div
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
        </div> -->
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

Vue.use(VueHtml2pdf);

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
        covid19ag: null,
        site: null,
        ctts_nme: null,
        authorised: null,
        reported: null,
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
          console.log(labData)
          if (labData.data.length > 0) {
            this.result.patientname =
              labData.data[0].Gvn_nme + " " + labData.data[0].Sur_nme;
            this.result.hn = labData.data[0].HN;
            this.result.labnumber = labData.data[0].LabNumber;
            this.result.sex = labData.data[0].EPVIS_Sex;
            this.result.age = labData.data[0].EPVIS_Age;
            this.result.dob = labData.data[0].EPVIS_DateOfBirth;
            this.result.dateOfCollect =
              labData.data[0].Dte_of_col + " " + labData.data[0].Tme_of_Col;
            this.result.doctor = labData.data[0].DoctorName;
            this.result.ctts_nme = labData.data[0].CTTS_Nme;
            this.result.site = labData.data[0].Site;
            this.result.authorised =
              labData.data[0].Usr_aut +
              " on " +
              labData.data[0].VISTS_Dte_of_aut +
              " " +
              labData.data[0].VISTS_Tme_of_aut;
              this.result.reported =
          labData.data[0].Usr_report +
          " on " +
          labData.data[0].report_date +
          " " +
          labData.data[0].report_time;
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
            if (d.CTTC_Cde == "N0591" && d.CTTC_Des == "COVID-19 Ag") {
            this.result.covid19ag = d.LabResult;
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