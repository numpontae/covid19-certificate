<template>
  <div >
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
          <b-button @click="searchLabData()" variant="outline-primary">Search</b-button>
        </b-col>
      </b-row>
    </b-container>
    <div class="container">
      <div id="printMe" class="row">
        
        <div class="col-xs-12 col-md-10 offset-md-1 pt-5">
          <div class="table-responsive">
            <table class="table borderless" v-if="isFound==true">
              <tbody>
                <tr>
                  <td><b>Patient Name :</b></td>
                  <td>{{ result.patientname }}</td>
                  <td>97</td>
                  <td>Miiiiiiiiiyaaaaw!!!</td>
                </tr>
                <tr>
                  <td>Doge</td>
                  <td>Cure</td>
                  <td>80</td>
                  <td>Nggggggggggggrraw!!!</td>
                </tr>
                <tr>
                  <td>Doge</td>
                  <td>Pickle</td>
                  <td>79</td>
                  <td>Aaaaaaw!!! *high pitch*</td>
                </tr>
                <tr>
                  <td>Doge</td>
                  <td>V3</td>
                  <td>90</td>
                  <td>Raaaaw!!! *high pitch*</td>
                </tr>
                <tr>
                  <td>Doge</td>
                  <td>V4</td>
                  <td>40</td>
                  <td>Raaaaw!!! *high pitch x3*</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div style="text-align:center; margin-top:3rem; padding-top:1rem">
        <vue-qrcode
            v-if="qrValue != null && qrValue != ''"
            :value="qrValue"
            class="border border-dark"
            style="height: 200px; width: 200px;"
          />
          </div>
      </div>
      <div style="margin-top:1rem">
      <b-button @click="print()" variant="outline-primary">Print</b-button>
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
import Vue from 'vue'
import VueHtml2pdf from 'vue-html2pdf'  
import VueHtmlToPaper from 'vue-html-to-paper';
import VueQrcode from "vue-qrcode";

Vue.use(VueHtml2pdf)
Vue.use(VueQrcode)

const options = {
  name: '_blank',
  specs: [
    'fullscreen=yes',
    'titlebar=yes',
    'scrollbars=yes'
  ],
  styles: [
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
    'https://unpkg.com/kidlat-css/css/kidlat.css'
  ]
}
Vue.use(VueHtmlToPaper,options);
export default {
  name: "HelloWorld",
  components: {
    VueQrcode,
  },
  props: {
    msg: String,
  },
  data() 
  {
    return {
      isFound: false,
      qrValue: null,
      search : {
        labnumber: null
      },
      result : {
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
        sars: null
      }
    }
  },
  methods: {
    async searchLabData()
    {
      this.isFound = false;
      let labData = await this.$http.get(`/api/v1/patient/getpatientlabcovid19`);
      this.qrValue = `http://phr.samitivejhospitals.com/?token=` + this.result.labnumber;
      this.result.patientname = labData.data[0].Gvn_nme + ' ' + labData.data[0].Sur_nme
      console.log(labData.data)
      this.isFound = true;
    },
        /*
            Generate Report using refs and calling the
            refs function generatePdf()
        */
        print () {
          console.log('11111')
          this.$htmlToPaper('printMe');
            // this.$refs.html2Pdf.generatePdf()
        }
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
.borderless td, .borderless th {
    border: none;
}
</style>
