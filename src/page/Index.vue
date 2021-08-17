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
      <div id="printMe" class="printMe" v-if="isFound == true">
        <div
          style="padding-left: 10px; padding-right: 10px"
          v-if="isFound == true"
        >
        <!-- <div class="container" style="padding-right: 0"> -->
          <table border="0" style="margin-top: 2rem">
            <tr >
              <td rowspan="4">
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
              </td>
              <td>
                <b>
                  &nbsp;
                </b>
              </td>
              
            </tr>
            <tr>
              <td style="font-size: 12px; line-height:4px; width:100%;" v-if="result.site == 'SNH'">
                <b>
                  488 ถนนศรีนครินทร์ แขวงสวนหลวง เขตสวนหลวง กรุงเทพมหานคร 10250 โทร.
                  0-2022-2222 แฟ็กซ์: (66) 0-2391-1290
                </b>
              </td>
              <td style="font-size: 12px; line-height:4px; width:100%;" v-if="result.site == 'SVH'">
                <b>
                  133 สุขุมวิท 49 แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพฯ 10110 โทร.
                  0-2022-2222 แฟ็กซ์: (66) 0-2391-1290
                </b>
              </td>
            </tr>
            <tr style="border-top: 2px solid black;">
              <td style="font-size: 12px; padding-top:0;line-height:4px; width:100%;padding-bottom:7px" v-if="result.site == 'SNH'">
                <b>
                  488 SRINAKARIN RD., SUANLUANG, BANGKOK 10250,
                  THAILAND, TEL. 0-2022-2222 FAX: (66) 0-2391-1290
                </b>
              </td>
              <td style="font-size: 12px; padding-top:0;line-height:4px; width:100%;padding-bottom:7px" v-if="result.site == 'SVH'">
                <b>
                  133 SUKHUMVIT 49, KLONGTAN NUA, VADHANA, BANGKOK 10110,
                  THAILAND, TEL. 0-2022-2222 FAX: (66) 0-2391-1290
                </b>
              </td>
            </tr>
            
          </table>
          </div>
          <div
            style="padding-left: 10px; padding-right: 10px; margin-top: 2rem"
            v-if="isFound == true"
          >
          </div>
          <p
            style="font-size: 25px; margin-top: 2rem; text-align: center"
            align="center"
          >
            <b>Laboratory Report</b>
          </p>
          
          <div
          style="padding-left: 10px; padding-right: 10px"
          v-if="isFound == true"
        >
          <table border="0" style="margin-top: 1rem; padding-top: 1rem; border-top: 2px solid black;width:100%">
            <tr style="padding-top: 2rem;">
              <td style="padding-top: 1rem;" width="20%"><b>Patient Name :</b></td>
              
              <td style="padding-top: 1rem;" colspan="2" width="15%">{{ result.patientname }}</td>
              <td style="padding-top: 1rem;" width="10%"></td>
              <td style="padding-top: 1rem;" width="18%"><b>Sex : </b>{{ result.sex }}</td>
              <td style="padding-top: 1rem;" width="18%"><b>Age : </b>{{ result.age }}</td>
              <td style="padding-top: 1rem;" width="19%"><b>DOB : </b>{{ result.dob }}</td>
              </tr>
              <tr style="padding-top: 2rem;">
              <td style="padding-top: 1rem;" width="20%"><b>Hospital Number :</b></td>
              
              <td style="padding-top: 1rem;" colspan="2" width="15%">{{ result.hn }}</td>
              <td style="padding-top: 1rem;" width="10%"></td>
              <td style="padding-top: 1rem;" width="18%"><b>Lab Episode :</b></td>
              <td style="padding-top: 1rem;" width="18%">{{ result.labnumber }}</td>
              <td style="padding-top: 1rem;" width="19%"></td>
              </tr>
              <tr style="padding-top: 2rem;">
              <td style="padding-top: 1rem;" width="20%"><b>Collected Date/Time :</b></td>
              
              <td style="padding-top: 1rem;" colspan="2" width="15%">{{ result.dateOfCollect }}</td>
              <td style="padding-top: 1rem;" width="10%"></td>
              <td style="padding-top: 1rem;" width="18%"><b>Doctor :</b></td>
              <td style="padding-top: 1rem;" colspan="2" width="18%">{{ result.doctor }}</td>
              <td style="padding-top: 1rem;" width="19%"></td>
              </tr>
            </table>
          <!-- <b-container
            style="
              margin-top: 1rem;
              padding-top: 1rem;
              border-top: 2px solid black;
            "
          >
            <b-row class="text-left" style="text-algin: left">
              <b-col cols="3"><b>Patient Name :</b></b-col>
              <b-col cols="3">{{ result.patientname }}</b-col>
              <b-col cols="2"><b>Sex: </b>{{ result.sex }}</b-col>
              <b-col cols="2"><b>Age: </b>{{ result.age }}</b-col>
              <b-col cols="2"><b>DOB: </b>{{ result.dob }}</b-col>
            </b-row>
            <b-row style="margin-top: 1rem" class="text-left">
              <b-col cols="3"><b>Hospital Number:</b></b-col>
              <b-col cols="3">{{ result.hn }}</b-col>
              <b-col cols="2"><b>Lab Episode :</b></b-col>
              <b-col cols="2">{{ result.labnumber }}</b-col>
            </b-row>
            <b-row
              style="
                margin-top: 1rem;
                padding-bottom: 1rem;
                border-bottom: 2px solid black;
              "
              class="text-left"
            >
              <b-col cols="3"><b>Collected Date/Time :</b></b-col>
              <b-col cols="3">{{ result.dateOfCollect }}</b-col>
              <b-col cols="2"><b>Doctor :</b></b-col>
              <b-col cols="4">{{ result.doctor }}</b-col>
            </b-row>
          </b-container> -->
          <table border="0" style="margin-top: 1rem; padding-top: 1rem; border-top: 2px solid black;width:100%">
            <tr style="padding-top: 2rem;">
              <td style="padding-top: 1rem;" colspan="6" width="15%"><b>{{ result.ctts_nme }}</b></td>
              
              <td style="padding-top: 1rem;" width="15%"></td>
              <td style="padding-top: 1rem;" width="15%"></td>
              <td style="padding-top: 1rem;" width="18%"></td>
              <td style="padding-top: 1rem;" width="18%"></td>
              <td style="padding-top: 1rem;" width="19%"></td>
              </tr>
              <tr>
              <td style="padding-top: 1rem;padding-left: 2rem" width="25%"><b>Method :</b></td>
              
              <td style="padding-top: 1rem;margin-left: 2rem" colspan="2" width="75%">{{ result.method }}</td>
              </tr>
              <tr>
              <td style="padding-top: 1rem;padding-left: 2rem" width="25%"><b>Specimen :</b></td>
              
              <td style="padding-top: 1rem;margin-left: 2rem" colspan="2" width="75%">{{ result.specimen }}</td>
              </tr>
              <tr>
              <td style="padding-top: 1rem;padding-left: 2rem" width="25%"><b>SARS-Cov-2 RNA :</b></td>
              
              <td style="padding-top: 1rem;margin-left: 2rem" colspan="2" width="75%">{{ result.sars }}</td>
              </tr>
              <tr>
              <td style="padding-top: 4rem;padding-left: 2rem" width="25%"><b>Limit of detection :</b></td>
              
              <td style="padding-top: 4rem;margin-left: 2rem" colspan="2" width="75%">{{ result.limit }}</td>
              </tr>
            </table>
          <!-- <b-container style="margin-top: 3rem">
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
          </b-container> -->
          </div>
        <!-- </div> -->
        <div
          style="padding-left: 10px; padding-right: 10px"
          v-if="isFound == true"
        >
          <table border="0" style="margin-top: 30rem; margin-bottom: 3rem;width:100%">
            <tr style="padding-top: 2rem;">
              <td width="80%"></td>
              
              <td style="padding-top: 1rem;" width="20%"><vue-qrcode
                  v-if="qrValue != null && qrValue != '' && isFound == true"
                  :value="qrValue"
                  style="height: 200px; width: 200px"
                /></td>
              </tr>
              
            </table>
            <table border="0" style="margin-top: 1rem; margin-bottom: 3rem;width:100%">
            <tr style="padding-top: 2rem;">
              <tr style="
                margin-top: 2rem;
                padding-top: 1rem;
                border-top: 2px solid black;
              ">
              <td style="padding-top: 1rem;" width="100%"><b>Reported by : </b>{{ result.reported }}</td>
              </tr>
              <tr style="
                margin-top: 1rem;
                padding-bottom: 1rem;
                border-bottom: 2px solid black;
              ">
              <td style="padding-top: 1rem;padding-bottom: 1rem;" width="100%"><b>Authorised by : </b>{{ result.authorised }}</td>
      
              </tr>
            </table>
          <!-- <b-container style="margin-top: 30rem; margin-bottom: 3rem">
            <b-row class="text-left" style="text-algin: left">
              <b-col cols="9"></b-col>
              <b-col cols="3"
                ><vue-qrcode
                  v-if="qrValue != null && qrValue != '' && isFound == true"
                  :value="qrValue"
                  style="height: 200px; width: 200px"
                />
              </b-col>
            </b-row>
            <b-row
              style="
                margin-top: 2rem;
                padding-top: 1rem;
                border-top: 2px solid black;
              "
              class="text-left"
            >
              <b-col cols="12"><b>Reported by : </b>{{ result.reported }}</b-col>
            </b-row>
            <b-row
              style="
                margin-top: 1rem;
                padding-bottom: 1rem;
                border-bottom: 2px solid black;
              "
              class="text-left"
            >
              <b-col cols="12"><b>Authorised by : </b>{{ result.authorised }}</b-col>
            </b-row>
          </b-container> -->
        </div>
      </div>
      <div style="margin-top: 3rem; margin-bottom: 3rem; text-align: center">
        <b-button
          class="btn-lg"
          style="width: 15%"
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
    // "https://unpkg.com/kidlat-css/css/kidlat.css",
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
      data: []
    };
  },
  methods: {
    async searchLabData() {
      if (this.search.labnumber != null && this.search.labnumber != "")
        this.isFound = false;
      let labData = await this.$http.get(
        `/api/v1/patient/getpatientlabcovid19?labnumber=${this.search.labnumber}`
      );
      this.data = labData.data
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
        this.isFound = true;
      }
    },
    /*
            Generate Report using refs and calling the
            refs function generatePdf()
        */
    print() {
      let body = this.data
      // console.log(this.data)
            this.$http.post(`https://phr.samitivejhospitals.com:3000/api/v1/patient/postpatientlabcovid19`, body)
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
  border: 1px solid hsl(174, 100%, 22%);
}
</style>
