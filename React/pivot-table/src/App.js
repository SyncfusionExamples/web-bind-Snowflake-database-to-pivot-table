import { PivotViewComponent, FieldList, Inject } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import './App.css';

function App() {
  let dataSourceSettings = {
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
  };

  return (<PivotViewComponent id='PivotView' height={350} dataSourceSettings={dataSourceSettings} showFieldList={true}>
    <Inject services={[FieldList]}/></PivotViewComponent>);
};
export default App;
