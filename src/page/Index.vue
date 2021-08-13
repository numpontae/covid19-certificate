<template>
  <div>
    <b-container fluid style="margin-top: 4rem">
      <b-row class="my-1">
        <b-col sm="3"> </b-col>

        <b-col sm="5" style="text-agin: center">
          <b-form-input
            v-model="search.labnumber"
            placeholder="Enter Lab Number"
          ></b-form-input>
        </b-col>
        <b-col sm="1">
          <b-button @click="searchLabData()" variant="outline-primary"
            >Search</b-button
          >
        </b-col>
      </b-row>
    </b-container>
    <div class="container">
      <div
        id="printMe"
        class="printMe"
        v-if="isFound == true"
        style="margin-top: 2rem"
      >
        <div
          class="col-xs-12 col-md-10 offset-md-1 pt-5"
          v-if="isFound == true"
        >
          <p align="center">
            <img
              alt="Samitivej"
              src="../assets/SNH.jpg"
              style="height: 250px"
              v-if="result.site == 'SNH'"
            />
            <img
              alt="Samitivej"
              src="../assets/SVH.jpg"
              style="height: 250px"
              v-if="result.site == 'SVH'"
            />
          </p>
          <p style="font-size: 25px" align="center"><b>Laboratory Report</b></p>
          <b-container style="margin-top: 2rem">
            <b-row class="text-left" style="text-algin: left">
              <b-col cols="3"><b>Patient Name :</b></b-col>
              <b-col cols="3">{{ result.patientname }}</b-col>
              <b-col cols="2"><b>Sex : </b>{{ result.sex }}</b-col>
              <b-col cols="2"><b>Age : </b>{{ result.age }}</b-col>
              <b-col cols="2"><b>DOB : </b>{{ result.dob }}</b-col>
            </b-row>
            <b-row style="margin-top: 1rem" class="text-left">
              <b-col cols="3"><b>Hospital Number:</b></b-col>
              <b-col cols="3">{{ result.hn }}</b-col>
              <b-col cols="2"><b>Lab Episode :</b></b-col>
              <b-col cols="2">{{ result.labnumber }}</b-col>
            </b-row>
            <b-row style="margin-top: 1rem" class="text-left">
              <b-col cols="3"><b>Collected Date/Time :</b></b-col>
              <b-col cols="3">{{ result.dateOfCollect }}</b-col>
              <b-col cols="2"><b>Doctor :</b></b-col>
              <b-col cols="4">{{ result.doctor }}</b-col>
            </b-row>
          </b-container>
          <b-container style="margin-top: 3rem">
            <b-row class="text-left" style="text-algin: left">
              <b-col cols="12"
                ><b>{{ result.ctts_nme }}</b></b-col
              >
            </b-row>
            <b-row style="margin-top: 1rem" class="text-left">
              <b-col style="margin-left: 2rem" cols="3"><b>Method :</b></b-col>
              <b-col cols="4">{{ result.method }}</b-col>
            </b-row>
            <b-row style="margin-top: 1rem" class="text-left">
              <b-col style="margin-left: 2rem" cols="3"
                ><b>Specimen :</b></b-col
              >
              <b-col cols="4">{{ result.specimen }}</b-col>
            </b-row>
            <b-row style="margin-top: 1rem" class="text-left">
              <b-col style="margin-left: 2rem" cols="3"
                ><b>SARS-Cov-2 RNA :</b></b-col
              >
              <b-col cols="4">{{ result.sars }}</b-col>
            </b-row>
            <b-row style="margin-top: 3rem" class="text-left">
              <b-col style="margin-left: 2rem" cols="3"
                ><b>Limit of detection :</b></b-col
              >
              <b-col cols="4">{{ result.limit }}</b-col>
            </b-row>
          </b-container>
          <!-- <div class="table-responsive" style="margin-top:0rem">
            <table class="table borderless">
              <tbody> -->
          <!-- <tr>
                  <td stlye="text-algin:left"><b>Patient Name :</b></td>
                  <td>{{ result.patientname }}</td>
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
                </tr> -->
          <!-- <tr>
                  <td><b>Hospital Number :</b></td>
                  <td>{{ result.hn }}</td>
                  <td></td>
                  <td></td>
                </tr> -->
          <!-- <tr>
                  <td><b>Collected Date/Time :</b></td>
                  <td>{{ result.dateOfCollect }}</td>
                  <td></td>
                  <td></td>
                </tr> -->
          <!-- <tr>
                  <td><b>Doctor :</b></td>
                  <td>{{ result.doctor }}</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td><b>Lab Episode :</b></td>
                  <td>{{ result.labnumber }}</td>
                  <td></td>
                  <td></td>
                </tr> -->
          <!-- </tbody>
            </table> -->
          <!-- </div> -->
        </div>
        <!-- <div
          class="col-xs-12 col-md-10 offset-md-1 pt-5"
          v-if="isFound == true"
          style="margin-top: 3rem"
        >
          <div class="table-responsive">
            <table class="table borderless">
              <tbody>
                <tr>
                  <td stlye="text-algin:left">
                    <b>{{ result.ctts_nme }}</b>
                  </td>
                </tr>
                <tr>
                  <td>Method :</td>
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
        </div> -->
        <div
          class="col-xs-12 col-md-10 offset-md-1 pt-5"
          v-if="isFound == true"
        >
        <b-container style="margin-top: 3rem; margin-bottom: 3rem">
          <b-row class="text-left" style="text-algin: left">
            <b-col cols="9"
              ></b-col
            >
            <b-col cols="3"
              ><vue-qrcode
                      v-if="qrValue != null && qrValue != '' && isFound == true"
                      :value="qrValue"
                      class="border border-dark"
                      style="height: 200px; width: 200px"
                    />
                    </b-col
            >
          </b-row>
          <b-row style="margin-top: 1rem" class="text-left">
            <b-col cols="12"
              >Reported by : {{ result.reported }}</b-col
            >
          </b-row>
          <b-row style="margin-top: 1rem" class="text-left">
            <b-col cols="12"
              >Authorised by : {{ result.authorised }}</b-col
            >
          </b-row>
          
        </b-container>
        </div>
        <!-- <div
          class="col-xs-12 col-md-10 offset-md-1 pt-5"
          v-if="isFound == true"
          style="margin-top: 3rem"
        >
          <div class="table-responsive">
            <table class="table borderless">
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> -->
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
      <div style="margin-top: 3rem; margin-bottom: 3rem">
        <b-button
          v-if="isFound == true"
          @click="print()"
          variant="outline-primary"
          >Print</b-button
        >
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
        ctts_nme: null,
        site: null,
        authorised: null,
        reported: null,
      },
    };
  },
  methods: {
    async searchLabData() {
      if (this.search.labnumber != null && this.search.labnumber != "")
        this.isFound = false;
      let labData = await this.$http.get(
        `/api/v1/patient/getpatientlabcovid19?labnumber=${this.search.labnumber}`
      );

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
        var jwt = require("jsonwebtoken");
        var token = jwt.sign(
          {
            data: this.result.labnumber,
          },
          "Ar3b1Op"
        );
        this.qrValue = `http://phr.samitivejhospitals.com/?token=` + token;
        console.log(this.qrValue);
        this.isFound = true;
      }
    },
    /*
            Generate Report using refs and calling the
            refs function generatePdf()
        */
    print() {
      this.$htmlToPaper("printMe");
      // this.$refs.html2Pdf.generatePdf()
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
  border-top: none;
  border-bottom: none;
}
.table {
  border-collapse: collapse;
}
.table td {
  text-align: left;
}
.printMe {
  border: 1px solid #007065;
}
</style>
