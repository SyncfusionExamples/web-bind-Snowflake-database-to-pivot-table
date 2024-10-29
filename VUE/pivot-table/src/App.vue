<template>
  <div>
    <div class="control-section" style="overflow: auto">
      <div class="content-wrapper">
        <ejs-pivotview
          id="pivotview"
          ref="pivotview"
          :dataSourceSettings="dataSourceSettings"
          :showFieldList="showFieldList"
        ></ejs-pivotview>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import {
  FieldList,
  PivotViewComponent,
} from "@syncfusion/ej2-vue-pivotview";

export default {
  components: {
    'ejs-pivotview': PivotViewComponent
  },
  data () {
    return {
      dataSourceSettings: {
        url: 'https://localhost:44378/Pivot',
        enableSorting: true,
        expandAll: false,
        dataSource: [],
        columns: [
          { name: 'CC_COUNTRY', caption: 'Country' }
        ],
        rows: [
          { name: 'CC_STATE', caption: 'State' },
          { name: 'CC_CITY', caption: 'City' }
        ],
        values: [
          { name: 'CC_COMPANY', caption: 'Company' },
          { name: 'CC_EMPLOYEES', caption: 'Employees' },
          { name: 'CC_TAX_PERCENTAGE', caption: 'Percentage' },
        ],
        filters: []
      },
      showFieldList: true    
    }
  },
  methods: {
  },
  provide: {
    pivotview: [FieldList]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-lists/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>