import { PivotView, FieldList } from '@syncfusion/ej2-pivotview';

PivotView.Inject(FieldList);

let pivotTableObj: PivotView = new PivotView({
  dataSourceSettings: {
    url: 'https://localhost:7132/pivot',
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
  showFieldList: true,
  height: 350
});
pivotTableObj.appendTo('#PivotTable');